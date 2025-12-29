import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get a random Pirkei Avot quote
    const chapters = [16, 16, 18, 22, 23]; // Number of mishnahs per chapter
    const totalMishnahs = chapters.reduce((a, b) => a + b, 0);
    
    // Generate a random index
    const index = Math.floor(Math.random() * totalMishnahs);
    
    let chapter = 1;
    let mishnah = index + 1;
    for (let i = 0; i < chapters.length; i++) {
      if (mishnah <= chapters[i]!) {
        chapter = i + 1;
        break;
      }
      mishnah -= chapters[i]!;
    }

    const ref = `Pirkei Avot.${chapter}.${mishnah}`;

    const response = await fetch(
      `https://www.sefaria.org/api/texts/${ref}?context=0`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Sefaria API returned ${response.status}`);
    }
    
    const data = await response.json();

    // Sefaria API returns text as array if multiple verses, or string if single verse
    const englishText = Array.isArray(data.text) ? data.text.join(' ') : data.text;
    const hebrewText = Array.isArray(data.he) ? data.he.join(' ') : data.he;

    return NextResponse.json({
      ref: data.ref || ref,
      heRef: data.heRef || ref,
      text: englishText || '',
      heText: hebrewText || '',
      url: `https://www.sefaria.org/${ref.replace(/ /g, '_')}`,
    });
  } catch (error) {
    console.error("Failed to fetch wisdom:", error);
    return NextResponse.json(
      { error: "Failed to fetch wisdom" },
      { status: 500 }
    );
  }
}

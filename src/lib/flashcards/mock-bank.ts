import type { Portion } from "~/lib/mock-data";

export type FlashcardSeed = { prompt: string; answer: string };

function keyOf(p: Portion) {
  return `${p.type}:${p.label}`;
}

// New: small deterministic-ish generator so every portion yields real-looking cards.
function generatedSeedsForPortion(portion: Portion, count = 12): FlashcardSeed[] {
  const base = `${portion.type} "${portion.label}"`;

  const templates: FlashcardSeed[] = [
    { prompt: `In ${base}, what is the main topic in 1 sentence?`, answer: "Write a 1-sentence summary in your own words." },
    { prompt: `In ${base}, list 3 key terms you saw.`, answer: "Example: term A / term B / term C (with short definitions)." },
    { prompt: `In ${base}, what question is being asked?`, answer: "State the question being clarified or debated." },
    { prompt: `In ${base}, what is one proposed answer?`, answer: "State one answer and a brief rationale." },
    { prompt: `In ${base}, what is one objection raised?`, answer: "State one objection and why it matters." },
    { prompt: `In ${base}, what is the practical takeaway?`, answer: "One concrete takeaway (halakhic / ethical / narrative)." },
    { prompt: `In ${base}, identify a named figure (rabbi/person) and their role.`, answer: "Name + 1 line: what they said/did." },
    { prompt: `In ${base}, what is a key distinction being made?`, answer: "Describe the categories/cases and the difference." },
    { prompt: `In ${base}, what is the proof-text or source used?`, answer: "Name the source and what it supports." },
    { prompt: `In ${base}, what is the conclusion (maskana) if any?`, answer: "State the conclusion; if unresolved, say 'teiku/left open'." },
    { prompt: `In ${base}, what would you ask your study partner?`, answer: "Write one sharp clarification question." },
    { prompt: `In ${base}, make a quick example/counterexample.`, answer: "Provide a small example that fits (or breaks) the rule." },
  ];

  return templates.slice(0, Math.max(1, Math.min(count, templates.length)));
}

const BANK: Record<string, FlashcardSeed[]> = {
  "Daf:Berakhot 2": [
    { prompt: "What is the first tractate of the Talmud?", answer: "Berakhot." },
    {
      prompt: "Berakhot primarily deals with what general topic?",
      answer: "Blessings and prayer (including Shema).",
    },
    {
      prompt: "What does 'Berakhot' literally mean?",
      answer: "Blessings.",
    },
    {
      prompt: "Name one core daily Jewish prayer discussed in Berakhot.",
      answer: "The Shema (and its recitation times) / Amidah.",
    },
    {
      prompt: "What is a 'berakhah'?",
      answer: "A blessing (a formula of praise/thanks to God).",
    },
  ],
  "Daf:Berakhot 3": [
    { prompt: "In Berakhot, what topic does the tractate open with?", answer: "Times/laws of reciting Shema and prayer-related blessings." },
    { prompt: "What is a common way sugyot structure arguments?", answer: "Question → answer → challenge → resolution (often with sources)." },
    { prompt: "What does 'sugya' mean?", answer: "A Talmudic unit of discussion/argument." },
    { prompt: "What is 'halakhah' in broad terms?", answer: "Jewish law/practice derived from sources and interpretation." },
    { prompt: "What is 'aggadah' in broad terms?", answer: "Non-legal narrative/ethical/theological material in the Talmud." },
  ],
  "Daf:Berakhot 4": [
    { prompt: "Name two pillars of daily Jewish prayer practice.", answer: "Shema and Amidah (Shmoneh Esrei)." },
    { prompt: "What is a 'berakhah' formula generally doing?", answer: "Praising/acknowledging God for something (often with a set wording)." },
    { prompt: "What does 'minyan' refer to?", answer: "A quorum (typically 10) for certain communal prayers." },
    { prompt: "What is a 'hefsek' in prayer contexts?", answer: "An interruption/break that may affect validity/continuity." },
    { prompt: "What does 'kavanah' mean?", answer: "Intent/focus; mindful attention during mitzvot/prayer." },
  ],
  "Perek:Pirkei Avot 1": [
    {
      prompt: "Pirkei Avot is a tractate of which order (Seder) of Mishnah?",
      answer: "Nezikin.",
    },
    {
      prompt: "Pirkei Avot is known primarily for what kind of content?",
      answer: "Ethics and teachings of the sages (maxims).",
    },
    {
      prompt: "Complete: 'Moshe received Torah from ___'",
      answer: "Sinai.",
    },
  ],
  "Perek:Pirkei Avot 2": [
    { prompt: "Pirkei Avot focuses primarily on what?", answer: "Ethical teachings and character development." },
    { prompt: "Why is Avot often learned repeatedly?", answer: "It’s concise, practical, and meant for ongoing moral refinement." },
    { prompt: "Define 'middot' in this context.", answer: "Character traits/qualities." },
    { prompt: "What is one way to apply Avot during the week?", answer: "Choose one teaching and implement one action aligned with it." },
    { prompt: "What does it mean to 'make a fence' around something?", answer: "Create safeguards to avoid transgression or mistakes." },
  ],
  "Perek:Pirkei Avot 3": [
    { prompt: "Avot often links wisdom with what?", answer: "Action/behavior; wisdom expressed through deeds." },
    { prompt: "What is 'derekh eretz' (broadly)?", answer: "Proper conduct/ethical behavior; sometimes worldly engagement." },
    { prompt: "What is a common Avot theme about learning?", answer: "Consistency, humility, and translating learning into practice." },
    { prompt: "How can you test understanding of a mishnah?", answer: "Paraphrase it and give a concrete example of its principle." },
    { prompt: "What does 'yirat shamayim' mean?", answer: "Awe/fear of Heaven; reverence for God." },
  ],
  "Parasha:Vayigash": [
    {
      prompt: "Which brother approaches Joseph in Parashat Vayigash?",
      answer: "Judah (Yehudah).",
    },
    {
      prompt: "Where does Jacob's family move in Vayigash?",
      answer: "To Egypt (Goshen).",
    },
  ],
  "Parasha:Vayeishev": [
    { prompt: "Who is a central figure in Vayeishev?", answer: "Joseph (Yosef)." },
    { prompt: "What major theme begins in Vayeishev?", answer: "Joseph’s descent and the lead-up to the Egypt narrative." },
    { prompt: "What is one literary motif in Joseph’s story?", answer: "Dreams and their interpretation." },
    { prompt: "What is a recurring family dynamic in Genesis?", answer: "Sibling rivalry and reconciliation." },
    { prompt: "Name one moral tension in Vayeishev.", answer: "Jealousy, favoritism, responsibility, temptation, etc." },
  ],
  "Parasha:Miketz": [
    { prompt: "What major event happens in Miketz?", answer: "Pharaoh’s dreams; Joseph rises to power in Egypt." },
    { prompt: "What do Pharaoh’s dreams foreshadow?", answer: "Years of plenty followed by famine." },
    { prompt: "What is Joseph’s role after interpreting the dreams?", answer: "Administrator planning for famine (storing grain, policy)." },
    { prompt: "What brings Joseph’s brothers to Egypt?", answer: "Famine and the need to buy food." },
    { prompt: "What is a key theme in Miketz?", answer: "Providence, reversal of fortune, and testing/recognition." },
  ],
};

export function getSeedsForPortion(portion: Portion): FlashcardSeed[] {
  return (
    BANK[keyOf(portion)] ??
    generatedSeedsForPortion(portion, 12)
  );
}

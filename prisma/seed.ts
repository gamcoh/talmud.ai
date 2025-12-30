import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Note: Authentication is now required. Users must sign up through the app.
  // This seed file is preserved for future test data seeding if needed.
  
  console.log("✅ Seed completed successfully!");
  console.log("Note: Create a user account through /auth/signup to use the app.");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const kila = await prisma.user.upsert({
    where: { email: "kila@kila.es" },
    update: {},
    create: {
      email: "kila@kila.es",
      username: "Kila",
      password: "givemefood",
    },
  });

  const didi = await prisma.user.upsert({
    where: { email: "didi@didi.com" },
    update: {},
    create: {
      email: "didi@didi.com",
      username: "didi",
      password: "justwannasleep",
    },
  });
  console.log({ kila, didi });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const kilansw = await prisma.assessmentAnswer.create({
    data: {
      user: {
        connect: {
          id: 1,
        },
      },
      incomes: "Fijos",
      percentfixedoutcomes: 0.4,
      percentessentialoutcomes: 0.2,
      percentexpendableoutcomes: 0.3,
      objective1: "SalirDeDeudas",
      objective2: "AdministrarMisFinanzas",
      objective3: "Ahorrar",
    },
  });

  const didiansw = await prisma.assessmentAnswer.create({
    data: {
      user: {
        connect: {
          id: 2,
        },
      },
      incomes: "SoyAutonomo",
      percentfixedoutcomes: 0.5,
      percentessentialoutcomes: 0.3,
      percentexpendableoutcomes: 0.2,
      objective1: "Ahorrar",
      objective2: "SalirDeDeudas",
      objective3: "AdministrarMisFinanzas",
    },
  });
  console.log({ kilansw, didiansw });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

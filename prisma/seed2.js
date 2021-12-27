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
      objective1: "Salir de deudas",
      objective2: "Administrar mis finanzas",
      objective3: "null",
    },
  });

  const didiansw = await prisma.assessmentAnswer.create({
    data: {
      user: {
        connect: {
          id: 2,
        },
      },
      incomes: "Soy autónomo",
      percentfixedoutcomes: 0.5,
      percentessentialoutcomes: 0.3,
      percentexpendableoutcomes: 0.2,
      objective1: "Ahorrar",
      objective2: "null",
      objective3: "null",
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

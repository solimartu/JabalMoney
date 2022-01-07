const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const opc = await prisma.opcion.create({
    data: {
      question: {
        connect: {
          id: 1,
        },
      },
      opcion: "Fijos",
    },
  });

  console.log({ opc });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const opciondos = await prisma.opcion.create({
    data: {
      question: {
        connect: {
          id: 1,
        },
      },
      opcion: "Soy Autónomo",
    },
  });

  const opciontres = await prisma.opcion.create({
    data: {
      question: {
        connect: {
          id: 1,
        },
      },
      opcion: "Estoy en el paro",
    },
  });

  const opcioncuatro = await prisma.opcion.create({
    data: {
      question: {
        connect: {
          id: 5,
        },
      },
      opcion: "Salir de deudas",
    },
  });

  const opcioncinco = await prisma.opcion.create({
    data: {
      question: {
        connect: {
          id: 5,
        },
      },
      opcion: "Ahorrar",
    },
  });

  const opcionseis = await prisma.opcion.create({
    data: {
      question: {
        connect: {
          id: 5,
        },
      },
      opcion: "Administrar mis finanzas",
    },
  });

  console.log({ opciondos, opciontres, opcioncuatro, opcioncinco, opcionseis });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

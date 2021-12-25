const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const ques = await prisma.question.createMany({
    data: [
      {
        title: "Qué tipo de ingresos tienes?",
        category: 1,
      },
      {
        title: "Qué porcentaje de tus ingresos representa tus gastos fijos?",
        category: 2,
      },
      {
        title:
          "Qué porcentaje de tus ingresos representa tus gastos variables imprescindibles?",
        category: 2,
      },
      {
        title:
          "Qué porcentaje de tus ingresos representa tus gastos variables prescindibles?",
        category: 2,
      },
      {
        title: "Cuáles son tus objetivos financieros?",
        category: 3,
      },
    ],
  });

  console.log({ ques });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

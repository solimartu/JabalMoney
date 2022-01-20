const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main(req, res) {

  const { concept, tipo } = req.body;
  const postmovimiento = await prisma.calculator.create({
    data: {
      amount: +req.body.amount,
      concept,
      tipo,
      category: "Regalo",
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });
  
  res.json(postmovimiento);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default main;

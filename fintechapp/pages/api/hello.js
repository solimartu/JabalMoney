// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main(req, res) {
  // ... you will write your Prisma Client queries here
  // const movimientos = await prisma.calculator.findMany();
  // res.json(movimientos);
  const { concept } = req.body;
  console.log("el reqbody y el concept", req.body, concept);
  const postmovimiento = await prisma.calculator.create({
    data: {
      amount: +req.body.amount,
      concept,
      type: "ingreso",
      category: "Regalo",
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log("el amount", +req.body.amount);
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

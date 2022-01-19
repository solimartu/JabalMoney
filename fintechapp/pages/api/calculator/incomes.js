const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const incomes = await prisma.calculator.findMany({
    where: {
      userId: 1,
      type: "ingreso",
    },
  });
  const amounts = incomes
    .filter((income) => income.amount)
    .reduce((acc, b) => acc + b.amount, 0);
  res.send(amounts);
  console.log("los amounts", amounts);
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const incomes = await prisma.calculator.findMany({
    where: {
      userId: 1,
      type: "ingreso",
    },
  });
  const outcomes = await prisma.calculator.findMany({
    where: {
      userId: 1,
      type: "gasto",
    },
  });
  const totalingresos = incomes
    .filter((income) => income.amount)
    .reduce((acc, b) => acc + b.amount, 0);
  const totalgastos = outcomes
    .filter((outcome) => outcome.amount)
    .reduce((acc, b) => acc + b.amount, 0);
  const balance = totalingresos - totalgastos;
  const total = {
    ingresos: totalingresos,
    gastos: totalgastos,
    balance: balance,
  };
  res.send(total);
  console.log("los amounts", amounts);
}

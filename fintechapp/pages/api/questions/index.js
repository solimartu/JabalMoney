const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const questions = await prisma.question.findMany();
  res.json(questions);
}


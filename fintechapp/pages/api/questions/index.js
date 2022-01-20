const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handle(req, res) {
  try {
    const question = await prisma.question.findFirst();
    const questions = [question];

    return res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ error });
  }
  handle()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

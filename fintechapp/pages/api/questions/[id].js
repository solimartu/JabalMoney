const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { id } = req.params;

  try {
    const question = await prisma.question.findMany({
      where: {
        id: +id,
      },
    });
    const opcion = await prisma.opcion.findMany({
      where: {
        questionId: id,
      },
    });

    const questionnaire = {
      question: question,
      opcion: opcion,
    };
    res.status(200).json(questionnaire);
    
    
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

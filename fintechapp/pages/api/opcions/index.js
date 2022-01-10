const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handle(req, res) {
  try {
    const opcions = await prisma.opcion.findMany();
    console.log('esta son las opcions', opcions);

    res.status(200).json(opcions);
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

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const opcions = await prisma.opcion.findMany();
  res.json(opcions);

}

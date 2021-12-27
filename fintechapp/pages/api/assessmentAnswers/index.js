const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const assessments = await prisma.assessmentAnswer.findMany();
  res.json(assessments);
}

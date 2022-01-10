const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//post answers
export default async function handle(req, res) {
  // const assessments = await prisma.assessmentAnswer.findMany();
  // res.json(assessments);

  const inputAnswer = JSON.parse(req.body);
  const assessment = await prisma.assessmentAnswer.create({
    data: inputAnswer,
  });

  res.json(assessment);
}

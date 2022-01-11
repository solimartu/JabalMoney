const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//post answers
export default async function handle(req, res) {
  // const assessments = await prisma.assessmentAnswer.findMany();
  // res.json(assessments);

  // const inputAnswer = JSON.parse(req.body);
  // const { answers } = req.body;
  console.log("las reqbody", req.body);
  const assessment = await prisma.assessmentAnswer.create({
    data: req.body,
  });

  res.json(assessment);
}

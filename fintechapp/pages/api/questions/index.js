const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { query } = req;
  const { id } = query;

  //go to question table
  const prisma = new PrismaClient();

  try {
    const question = await prisma.question.findFirst();
    const questions = [question];
    // console.log("esto es question", question);
    // //opcion table
    // const opcion = await prisma.opcion.findMany({
    //   // where: {
    //   //   questionId: id,
    //   // },
    // });
    res.status(200).json(questions);
    console.log("esto es opcion", opcion);
  } catch (error) {
    console.log("este seria el error", error);
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

  //   const { incomes } = req.body;

  //   // try {
  //   const answers = await prisma.assessmentAnswer.create({
  //     data: {
  //       user: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //       incomes,
  //       percentfixedoutcomes: 0.5,
  //       percentessentialoutcomes: 0.3,
  //       percentexpendableoutcomes: 0.2,
  //       objective1: "AdministrarMisFinanzas",
  //       objective2: "SalirDeDeudas",
  //       objective3: "Ahorrar",
  //     },
  //   });
  //   console.log("el reqbody", req.body);
  //   console.log("lasansers", answers);
  // }
  // //   res.status(200).json(answers);
  // // } catch (error) {
  // //   console.log(error);
  // //   res.status(400).json({ err });
  // // }
  // // }
  // handle()
  //   .catch((e) => {
  //     console.error(e);
  //     process.exit(1);
  //   })
  //   .finally(async () => {
  //     await prisma.$disconnect();
  //   });
}

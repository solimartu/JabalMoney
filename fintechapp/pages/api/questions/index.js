const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import { signIn, signOut, useSession } from "next-auth/react";

export default async function handle(req, res) {
  const session = await getSession({ req });
  if (session) {
    res.send({
      content: "Welcome to the secret page",
    });
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
  } else {
    res.send({
      error: "You need to be signed in.",
    });
  }

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

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// import { getSession } from "next-auth/react";

export default async function handle(req, res) {
  // const session = await getSession({ req });
  // if (session) {
  //   res.send({
  //     content: "Welcome to the secret page",
  //   });
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
  // } else {
  //   res.send({
  //     error: "You need to be signed in.",
  //   });
  // }
}

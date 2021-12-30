import { PrismaClient } from "@prisma/client";

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const questions = await prisma.question.findMany({
    where: {
      id: +params.id,
    },
  });
  console.log("y estas questions", questions);
  console.log("y estos params", params);
  //   const postData = getPostData(params.id);
  return {
    props: {
      questions,
    },
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const questions = await prisma.question.findMany();
  const qId = questions.map((question) => ({
    params: { id: question.id.toString() },
  }));
  console.log("que son ids", qId);

  // const paths = preguntas.map((pregunta) => ({
  //   params: { id: pregunta.id },
  // }));
  return {
    paths: qId,
    fallback: false,
  };
}

export default function Post({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>{question.title}</div>
      ))}
      <h1>Me ves o no me ves?</h1>
    </div>
  );
}

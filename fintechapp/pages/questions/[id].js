import { prisma, PrismaClient } from "@prisma/client";
import Link from "next/link";
import QuesA from "../../components/QuesA";
import QuesB from "../../components/QuesB";

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const questions = await prisma.question.findMany({
    where: {
      id: +params.id,
    },
  });
  const answers = await prisma.assessmentAnswer.findMany({
    where: {
      id: 1,
    },
  });
  console.log("y estas answers", answers);
  console.log("y esto que es", prisma.assessmentAnswer);
  //   const postData = getPostData(params.id);
  return {
    props: {
      questions,
      answers,
    },
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const questions = await prisma.question.findMany();
  const qId = questions.map((question) => ({
    params: { id: question.id.toString() },
  }));

  // const paths = preguntas.map((pregunta) => ({
  //   params: { id: pregunta.id },
  // }));
  return {
    paths: qId,
    fallback: false,
  };
}

export default function Question({ questions, answers }) {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>{question.title}</div>
      ))}
      <div className="mt-3">
        {questions.map((question) => (
          <div key={question.id}>
            <Link
              href={{
                pathname: "/questions/[id]",
                query: { id: question.id + 1 },
              }}
            >
              <a className="rounded-xl p-3  mt-3 bg-emerald-400 text-white">
                Next
              </a>
            </Link>
          </div>
        ))}
      </div>

      {questions[0].id === 1 || questions[0].id === 5 ? (
        <div>
          {answers.map((answer) => (
            <button
              className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl"
              key={answer.id}
            >
              {answer.incomes} and {answer.objective1}
            </button>
          ))}
        </div>
      ) : (
        <QuesB />
      )}
    </div>
  );
}

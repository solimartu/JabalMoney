import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider);

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

export default function Question({ questions }) {
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
      {console.log("las cuestions pal id", questions)}
      {questions[0].id === 1 || questions[0].id === 5 ? (
        <div className="flex flex-col mx-40">
          <button className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
            Fijos
          </button>
          <button className="bg-emerald-400 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
            Soy autónomo
          </button>
          <button className="bg-emerald-500 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
            Estoy en el paro
          </button>
        </div>
      ) : (
        <Range className="mt-3" />
      )}
    </div>
  );
}

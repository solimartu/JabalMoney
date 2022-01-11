const { PrismaClient } = require("@prisma/client");
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Link from "next/link";
import { useState } from "react";
import QuesA from "../../components/QuesA";
import QuesB from "../../components/QuesB";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider);

// export async function getServerSideProps(context) {
//   console.log("el context", context);
// const { params, res } = context;
// const { id } = params;

// const apiResponse = await fetch(`http://localhost:300/api/opcions/${id}`);
// if (apiResponse.ok) {
//   const props = await apiResponse.json();
//   return { props };
// }
// if (res) {
//   res.writeHead(301, { Location: "/questions" }).end();
// }
// const prisma = new PrismaClient();

// const questions = await prisma.question.findUnique({
//   where: { id: 1 },
// });

// console.log(questions);
// return {
//   props: { questions },
// };
// }

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const questions = await prisma.question.findUnique({
    where: { id: +params.id },
  });
  //   const questions = await prisma.question.findMany({
  //     where: { id: +params.id },
  //   });
  const opcions = await prisma.opcion.findMany({
    where: { questionId: +params.id },
  });

  return {
    props: { questions, opcions },
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

export default function Ques({ questions, opcions }) {
  const [answers, setAnswers] = useState({
    userId: 1,
    incomes: "",
    percentfixedoutcomes: 0,
    percentessentialoutcomes: 0,
    percentexpendableoutcomes: 0,
    objective1: "",
    objective2: "null",
    objective3: "null",
  });

  function handleInputChange(e) {
    e.preventDefault();
    const name = questions.id === 1 ? "incomes" : "objective1";
    // const name = e.target.name;
    const value = e.target.value;
    setAnswers((state) => ({ ...state, [name]: value }));
  }

  function handleInputRange(e) {
    const name =
      questions.id === 2
        ? "percentfixedoutcomes"
        : questions.id === 3
        ? "percentessentialoutcomes"
        : "percentexpendableoutcomes";
    setAnswers((state) => ({
      ...state,
      [name]: e,
    }));
  }

  async function sendAnswers() {
    try {
      await fetch("/api/assessmentAnswers", {
        method: "POST",
        body: JSON.stringify(answers),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }

    // if (!response.ok) {
    //   throw new Error(response.statusText);
    // }

    // return await response.json();
  }

  return (
    <div className="container mx-auto text-center">
      <h2 className="font-bold text-black text-3xl text-center mt-2">
        Assessment questions
      </h2>
      <h3 className="font-normal text-black text-2xl text-center mt-2">
        {questions.title}
      </h3>
      <div className="flex flex-col mx-40">
        {/* {opcions.map((opcion) => (
          <button
            className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl"
            key={opcion.id}
            onClick={(e) => handleInputChange(e)}
            name="incomes"
            value={opcion.opcion}
          >
            {opcion.opcion}
          </button>
        ))} */}
        {/* <button className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
          Fijos
        </button>
        <button className="bg-emerald-400 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
          Soy autónomo
        </button>
        <button className="bg-emerald-500 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
          Estoy en el paro
        </button> */}

        {/* <Range className="mt-3" dotStyle={{ borderColor: "yellow" }} /> */}
      </div>{" "}
      {questions.id === 1 || questions.id === 5 ? (
        <QuesA handleInputChange={handleInputChange} opcions={opcions}>
          {" "}
        </QuesA>
      ) : (
        <QuesB handleInputRange={handleInputRange}></QuesB>
      )}
      <div className="text-right pr-4">Question {questions.id}/5</div>
      {questions.id === 5 ? (
        <Link
          href={{
            pathname: "/questions/",
          }}
        >
          <a
            className="rounded-xl p-3  mt-3 bg-emerald-400 text-white"
            onClick={() => sendAnswers()}
          >
            Finish
          </a>
        </Link>
      ) : (
        <Link
          href={{
            pathname: "/questions/[id]",
            query: { id: questions.id + 1 },
          }}
        >
          <a className="rounded-xl p-3  mt-3 bg-emerald-400 text-white">Next</a>
        </Link>
      )}
    </div>
  );
}

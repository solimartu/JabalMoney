import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import QuesA from "../../components/QuesA";
import QuesB from "../../components/QuesB";
import Slider from "rc-slider";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider);
import "rc-slider/assets/index.css";
import { useState } from "react";

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
  const [perfijos, setPerfijos] = useState([]);

  // function handleInputChange(event) {
  //   // let value = event.target.value;
  //   // setPerfijos(value);
  //   // console.log("el value", value);
  //   console.log("este es el event", event);
  // }
  async function handleSubmit() {
    // event.preventDefault();
    const datoPercent = await prisma.assessmentAnswer.create({
      data: {
        percentfixedoutcomes: perfijos,
      },
    });
    console.log(datoPercent);
  }

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
              onClick={(event) => handleSubmit(event)}
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
        <Range
          className="mt-3"
          onChange={(event) => setPerfijos(event)}
          min={0}
          max={100}
          value={perfijos}
          step={5}
        />
      )}
    </div>
  );
}

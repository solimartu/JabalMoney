import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import QuesA from "../../components/QuesA";
import QuesB from "../../components/QuesB";
import Slider from "rc-slider";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider);
import "rc-slider/assets/index.css";
import { useState } from "react";

export async function getServerSideProps(context) {
  console.log("este es el context", context);
}

export default function Preguntas({ questions, answers }) {
  const [respuestas, setRespuestas] = useState({
    incomes: "",
    // percentfixedoutcomes: 0,
    // percentessentialoutcomes: 0,
    // percentexpendableoutcomes: 0,
    // objective1: "",
    // objective2: "",
    // objective3: "",
    percentfixedoutcomes: 0.5,
    percentessentialoutcomes: 0.3,
    percentexpendableoutcomes: 0.2,
    objective1: "AdministrarMisFinanzas",
    objective2: "SalirDeDeudas",
    objective3: "Ahorrar",
    userId: 2,
  });

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setRespuestas((state) => ({
      ...state,
      [name]: value,
    }));
  }
  function handleInputRange(e) {
    setRespuestas((state) => ({
      ...state,
      percentfixedoutcomes: e,
    }));
  }

  async function handleSubmit(respuestas) {
    // event.preventDefault();

    console.log("estoy entrando aqui o que?");
    // fetch("http://localhost:3000/api/questions", {
    //   body: JSON.stringify(respuestas),
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    // });
    const datoPercent = await prisma.assessmentAnswer.create({
      data: {
        user: {
          connect: {
            id: 1,
          },
        },
        incomes: "Fijos",
        percentfixedoutcomes: 0.5,
        percentessentialoutcomes: 0.3,
        percentexpendableoutcomes: 0.2,
        objective1: "AdministrarMisFinanzas",
        objective2: "SalirDeDeudas",
        objective3: "Ahorrar",
      },
    });
    console.log("o el dato o la respuesta", datoPercent, respuestas);
  }

  return (
    <div className="container mx-auto text-center">
      <h2 className="font-bold text-black text-3xl text-center mt-2">
        Assessment questions
      </h2>
      {questions.map((question) => (
        <h3
          key={question.id}
          className="font-normal text-black text-2xl text-center mt-2"
        >
          {question.title}
        </h3>
      ))}
      <div className="flex flex-col mx-40">
        {questions[0].id === 1 || questions[0].id === 5 ? (
          // <div>
          //   {answers.map((answer) => (
          //     <button
          //       className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl"
          //       key={answer.id}
          //       onClick={(e) => handleInputChange(e)}
          //       name="incomes"
          //       value="SoyAutonomo"
          //     >
          //       Soy Autónomo
          //     </button>
          //   ))}
          // </div>
          <QuesA handleInputChange={handleInputChange} />
        ) : (
          // <Range
          //   className="mt-3"
          //   onChange={(e) => handleInputRange(e)}
          //   min={0}
          //   max={100}
          //   value={respuestas.percentfixedoutcomes}
          //   step={5}
          //   name="percentfixedoutcomes"
          // />
          <QuesB
            handleInputRange={(respuesta) => handleInputRange(respuesta)}
          />
        )}
      </div>
      <div className="mt-3">
        {questions.map((question) => (
          <div key={question.id}>
            <Link
              href={{
                pathname: "/questions/[id]",
                query: { id: question.id + 1 },
              }}
            >
              <a
                className="rounded-xl p-3  mt-3 bg-emerald-400 text-white"
                onClick={(e) => handleSubmit(e)}
              >
                Next
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

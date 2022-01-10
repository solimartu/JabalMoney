import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import QuesA from "../../components/QuesA";
import QuesB from "../../components/QuesB";
import Slider from "rc-slider";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider);
import "rc-slider/assets/index.css";
import { useState } from "react";

// export async function getServerSideProps({ context }) {
//   console.log(context)
//   const apiUrl = `http://localhost:3000/api/questions/${context.params.id}`;
//   const response = await fetch(apiUrl);
//   const questionnaire = await response.json();
//   console.log(questionnaire)

//   return {
//     props: {
//       questionnaire,
//     },
//   };
// }

//to post
async function sentAnswers(answer) {
  const response = await fetch("api/assessmentAnswers", {
    method: "POST",
    body: JSON.stringify(answer),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function Question({}) {
  const [answer, setAnswer] = useState([]);

  function handleInputChange(e) {}

  function handleInputRange(e) {}

  async function handleSubmit() {}

  return (
    <div>
      <h1>Hello from id.js de la questions</h1>
      <QuesB
        onSubmit={async (data, e) => {
          try {
            await sentAnswers(data);
            setAnswer([...answer, data]);
            e.target.reset();
          } catch (err) {
            console.log(err);
          }
        }}
      />
      <QuesA
        onSubmit={async (data, e) => {
          try {
            await sentAnswers(data);
            setAnswer([...answer, data]);
            e.target.reset();
          } catch (err) {
            console.log(err);
          }
        }}
      />
    </div>
  );
}

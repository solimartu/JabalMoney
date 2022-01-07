import React from "react";
import { PrismaClient } from "@prisma/client";

// export async function getStaticProps() {
//   console.log("hola soy prisma acaso?");
//   const prisma = new PrismaClient();
//   const answers = await prisma.assessmentAnswer.findMany(
//   //   {
//   //   where: {
//   //     id: 1,
//   //   },
//   // }
//   );
//   console.log("y estas answers", answers);
//   //   console.log("y estos params", params);
//   //   const postData = getPostData(params.id);
//   return {
//     props: {
//       answers,
//     },
//   };
// }

export default function QuesA({ answers, handleInputChange }) {
  return (
    <div className="flex flex-col mx-40">
      {/* <button className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
        {answers.map((answer) => answer.incomes)}
      </button> */}
      {/* {answers.map((answer) => (
        <div key={answer.id}>{answer.incomes}</div>
      ))} */}
      {answers.map((answer) => (
        <button
          className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl"
          key={answer.id}
          onClick={(e) => handleInputChange(e)}
          name="incomes"
          value="SoyAutonomo"
        >
          Soy Autónomo
        </button>
      ))}
    </div>
  );
}

import React from "react";

// export async function getStaticProps() {

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

// export async function getServerSideProps({ context }) {
//   console.log(context);
//   const apiUrl = `http://localhost:3000/api/opcions`;
//   const response = await fetch(apiUrl);
//   const opcions = await response.json();
//   console.log("opcions from the server sideeee", opcions);

//   return {
//     props: {
//       opcions,
//     },
//   };
// }

export default function QuesA({ opcions, handleInputChange, name }) {
  return (
    <div className="flex flex-col mx-40">
      {/* <button className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
        {answers.map((answer) => answer.incomes)}
      </button> */}
      {/* {answers.map((answer) => (
        <div key={answer.id}>{answer.incomes}</div>
      ))} */}
      {/* {opcions.map((opcion) => (
        <button
          className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl"
          key={opcion.id}
          onClick={(e) => handleInputChange(e)}
          name="incomes"
          value="SoyAutonomo"
        >
          Soy Autónomo
        </button>
      ))} */}
      {opcions.map((opcion) => (
        <button
          className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl"
          key={opcion.id}
          onClick={(e) => handleInputChange(e)}
          name={name}
          value={opcion.opcion}
        >
          {opcion.opcion}
        </button>
      ))}
    </div>
  );
}

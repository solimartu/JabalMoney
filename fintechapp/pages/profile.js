import axios from "axios";
import React, { useState } from "react";
import useSWR, { SWRConfig } from "swr";
import { AssessmentAnswer } from "@prisma/client";

//   const [assessments, setAssessments] = useState([]);

//   async function getStaticProps() {
//     const apiUrl = "http:localhost:3002/api/assessmentAnswers";
//     const data = await axios
//       .get(apiUrl)
//       .then((response) => setAssessments(response.data));
//     console.log(assessments);

//     // The value of the `props` key will be
//     //  passed to the `Home` component
//     return {
//       props: data,
//     };
//   }
// export async function getStaticProps() {
//   try {
//     const assessments = await prisma.assessmentAnswer.findMany({});

//     return {
//       props: { assessments },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// }

// function Assessment() {
//   // `data` will always be available as it's in `fallback`.
//   const { data } = useSWR("/api/assessmentAnswer", fetcher);
//   return <h1>{data.ingresos}</h1>;
// }

// export default function Profile(props) {
//   // SWR hooks inside the `SWRConfig` boundary will use those values.
//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
//         {props.assessments}
//       </div>
//     </div>
//   );
// }

export default function Profile() {
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-black text-2xl text-center mt-2">
        Tu perfil es:
      </h2>
      <div className="grid gap-4 grid-cols-3 mt-3">
        <div className="flex items-center justify-center rounded-xl text-white text-2xl bg-emerald-300 flex-col">
          <h5 className="font-bold text-xl">Tus ingresos:</h5>
          <h3 className="font-extrabold text-5xl">Fijos</h3>
        </div>
        <div className="flex items-center justify-center rounded-xl text-white text-4xl font-extrabold bg-emerald-400  flex-col">
          <div className="flex flex-col text-center">
            <h3 className="text-5xl font-extrabold">60%</h3>
            <h6 className="font-normal text-xs">destinado a gastos </h6>
            <h5 className="text-xl font-extrabold uppercase">fijos</h5>
          </div>
          <div className="flex flex-col text-center">
            <h3 className="text-5xl font-extrabold">20%</h3>
            <h6 className="font-normal text-xs">destinado a gastos </h6>
            <h5 className="text-xl font-extrabold uppercase">
              variables imprescindibles
            </h5>
          </div>
          <div className="flex flex-col text-center">
            <h3 className="text-5xl font-extrabold">20%</h3>
            <h6 className="font-normal text-xs">destinado a gastos </h6>
            <h5 className="text-xl font-extrabold uppercase">
              variables prescindibles
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl text-white bg-emerald-500 flex-col text-center">
          <h5 className="font-bold text-xl">Tus objetivos:</h5>
          <h3 className="text-5xl font-extrabold">1</h3>
          <h5 className="text-2xl font-extrabold">Ahorrar</h5>

          <h3 className="text-5xl font-extrabold">2</h3>
          <h5 className="text-2xl font-extrabold">Administrar mis finanzas</h5>
        </div>
      </div>
      <button className="text-black text-center">Y ahora qué?</button>
    </div>
  );
}

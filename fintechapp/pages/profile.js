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
export async function getStaticProps() {
  try {
    const assessments = await prisma.assessmentAnswer.findMany({});

    return {
      props: { assessments },
    };
  } catch (err) {
    console.log(err);
  }
}

// function Assessment() {
//   // `data` will always be available as it's in `fallback`.
//   const { data } = useSWR("/api/assessmentAnswer", fetcher);
//   return <h1>{data.ingresos}</h1>;
// }

export default function Profile(props) {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {props.assessments}
      </div>
    </div>
  );
}

//   return (
//     <div>
//       <h2>Tu perfil</h2>
//       <p>Ingresos:</p>
//       <p>{props}</p>
//       <br />
//       <p>Tus gastos:</p>
//       <p></p>
//       <br />
//       <p>Tus objetivos:</p>
//       <p></p>
//       <button className="bg-red">Y ahora qué?</button>
//     </div>
//   );

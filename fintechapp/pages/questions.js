import axios from "axios";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

export default function Questions() {
//   const [questions, setQuestions] = useState([])

  // async function startAssessment(){
  //     const apiUrl = "http://localhost:3000/api/questions";
  //     await axios.get(apiUrl).then(response => setQuestions(response.data));
  //     console.log(questions)
  // }

  
  
   const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/questions", fetcher);
  if (error) return <div>An error occurried</div>;
  if (!data) return <div>Loading...</div>;






  return (
    <div>
      <h3>
        Hoy es tu ultimo dia de <strong>pobre</strong>
      </h3>
      <br />
      <section>
        A continuacion te haremos unas preguntas para evaluar tu situacion
        financiera
        
      </section>
      {/* <section>
        <ul>
          {data.questions.map((question) => (
            <li key={question.id}>{question.title}</li>
          ))}
        </ul>
      </section> */}
      <button className="p-3 bg-gray-200" onClick={startAssessment}>
        Start assesment
      </button>
    </div>
  );
}

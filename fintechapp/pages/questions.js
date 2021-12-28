import axios from "axios";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { PrismaClient } from "@prisma/client";

export async function getServerSideProps(context) {
  // const apiUrl = "http://localhost:3000/api/questions";
  // // await axios.get(apiUrl).then((response) => setQuestions(response.data));
  // const response = await fetch(apiUrl)
  // const questions = await response.json()
  // console.log(questions);
  // return { props: { questions } };

    const prisma = new PrismaClient();
    const questions = await prisma.question.findMany();
    
    return {
      props: { questions },
    };
  
}

export default function Questions({questions}) {


 
const showQuestions = () =>{
  return (
    <section>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h3>{question.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

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
    {/* <h2>{questions[1].title}</h2> */}
    <section>
       <ul>
         {questions.map((question) => (           
         <li key={question.id}>
          <h3>{question.title}</h3>
        </li>
         ))}
       </ul>
     </section>

{/*   
    <button className="p-3 bg-gray-200" onClick={showQuestions}>Start assesment</button> */}
  </div>
);
}

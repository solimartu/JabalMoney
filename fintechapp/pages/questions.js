import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export async function getServerSideProps(context) {
  // const apiUrl = "http://localhost:3000/api/questions";
  // // await axios.get(apiUrl).then((response) => setQuestions(response.data));
  // const response = await fetch(apiUrl)
  // const questions = await response.json()
  // console.log(questions);
  // return { props: { questions } };

  const prisma = new PrismaClient();
  const question = await prisma.question.findFirst();
  const questions = [question];

  return {
    props: { questions },
  };
}

export default function Questions({ questions }) {
  const router = useRouter();

  return (
    <div>
      <h3>
        Hoy es tu ultimo dia de <strong>pobre</strong>
      </h3>

      <br />
      <section>
        A continuacion te haremos unas preguntas para evaluar tu situacion
        financiera hola que tal
      </section>
      {/* <h2>{questions.title}</h2> */}
      <section>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <h3>{question.title}</h3>
            </li>
          ))}
        </ul>
      </section>

      {/* <button
        className="bg-red-300"
        type="button"
        onClick={() => {
          router.push({
            pathname: "/questions/[id]",
            query: { id: questions.id },
          });
        }}
      >
        Next
      </button> */}
      {/* <button className="p-3 bg-gray-200" onClick={showQuestions}>Start assesment</button> */}
      <ul className="mt-3">
        {questions.map((question) => (
          <li key={question.id}>
            <Link
              href={{
                pathname: "/questions/[id]",
                query: { id: question.id },
              }}
            >
              <a className="rounded-xl p-3  mt-3 bg-emerald-400 text-white">
                Next
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

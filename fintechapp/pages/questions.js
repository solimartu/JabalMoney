import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import useProvideAuth from "./hooks/useProvideAuth";
// import { signIn, signOut, useSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const apiUrl = `http://localhost:3000/api/questions/`;
  const response = await fetch(apiUrl);
  const questions = await response.json();

  return {
    props: { questions },
  };
}

export default function Questions({ questions }) {
  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("key");
  }, []);
  const router = useRouter();

  const auth = useProvideAuth();

  return (
    <div className="container mx-auto text-center">
      {auth && (
        <>
          <h2 className="font-bold text-black text-3xl text-center mt-2">
            Sí. Hoy es tu último día de{" "}
            <strong className="text-emerald-500">pobre</strong>
          </h2>
          <h3 className="font-normal text-black text-2xl text-center mt-2 mb-3">
            A continuación te haremos unas preguntas para evaluar <br />
            tu situación financiera
          </h3>

          <ul className="mt-3">
            {questions.map((question) => (
              <li key={question.id}>
                <Link
                  href={{
                    pathname: "/questions/[id]",
                    query: { id: question.id },
                  }}
                >
                  <a className="rounded-xl p-3  mt-3 bg-emerald-400 text-white hover:bg-emerald-500">
                    Next
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

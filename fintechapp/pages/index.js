import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Router from "next/router";


export default function Home() {
 

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (errorMsg) setErrorMsg("");

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="container mx-auto bg-[#31ba9c]">
      {/* {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign In</button>
        </>
      )}
      {session && (
        <>
          Sign in as {session.user.email} <br />
          <div>You can now access our super secret pages</div>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}  */}
      <h2 className="font-bold text-white text-2xl text-center mt-2 pt-6">
        Hoy es el último día
      </h2>
      <h2 className="font-bold text-white text-4xl text-center -mt-5 pt-6">
        de tu vida de pobre
      </h2>
      <div className="grid gap-4 grid-cols-2 mt-3 mb-3">
        <Image
          priority
          src="/images/financialimg2.webp"
          className="img-fluid mx-auto text-center"
          height={783}
          width={1024}
          layout="responsive"
          alt="bla"
        />
        <div className="flex items-center justify-center rounded-xl text-white bg-emerald-300 flex-col mr-2">
          {/* <h5 className="font-bold text-xl">Tus ingresos:</h5>
          <h3 className="font-extrabold text-5xl">lalala</h3> */}
          {/* {!session && (
            <>
              Aún no estás logueado <br />
              <button
                onClick={() => signIn()}
                className="rounded-lg p-3 bg-yellow-400 text-black text-center mx-auto"
              >
                Sign In
              </button> */}
          <Link href={`/questions`}>
            <a className="rounded-lg p-3 bg-yellow-400 text-black text-center mx-auto">
              Deja de perder tiempo
            </a>
          </Link>

          {/* </>
          
          )}
          {session && (
            <>
              Sign in as {session.user.username} <br />
              <div>You can now access our super secret pages</div>
              <button onClick={() => signOut()}>Sign Out</button>
              <Link href={`/questions`}>
                <a className="rounded-lg p-3 bg-yellow-400 text-black text-center mx-auto">
                  Deja de perder tiempo
                </a>
              </Link>
            </>
          )}  */}
        </div>
      </div>
      {/* <Image
        priority
        src="/images/financialimg2.webp"
        className="img-fluid mx-auto text-center"
        height={783}
        width={1024}
        layout="responsive"
        alt="bla"
      /> */}
      {/* <div className="text-center mt-3 mb-3">
        <Link href={`/questions`}>
          <a className="rounded-lg p-3 bg-yellow-400 text-black text-center mx-auto">
            Deja de perder tiempo
          </a>
        </Link>
      </div> */}
    </div>
  );

  // export default async function getServerSideProps() {
  //   // Fetch data from external API
  //   const apiUrl = "http://localhost:3000/api/questions";
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   console.log(data);
  //   //  setQuestions(data);
  //   //  console.log(questions);
  // }

  // return <div></div>;
}

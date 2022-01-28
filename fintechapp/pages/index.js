import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Router from "next/router";
import useAuth from "./hooks/useAuth";

export default function Home() {
  const [credentials, setCredentials] = useState({
    username: "test",
    password: "test",
  });
  const [error, setError] = useState(null);
  const auth = useAuth(); //so i dont need to do the post in here

  const { username, password } = credentials;

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      await auth.signin(credentials);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="container mx-auto bg-[#31ba9c] pb-4">
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
          className="img-fluid mx-auto text-center col-span-2"
          height={783}
          width={1024}
          layout="responsive"
          alt="bla"
        />
        <div className="flex items-center justify-center rounded-xl text-black bg-emerald-300/75 flex-col mr-4 ml-3 text-center drop-shadow-xl">
          <div className="container mt-4">
            <h3 className="font-bold text-white text-2xl pb-3">
              Accede con tu cuenta
            </h3>

            <div className="flex flex-col px-6">
              <label>Username</label>
              <input
                type="text"
                name="username"
                // placeholder="type your username"
                value={username}
                className="rounded-full px-3 mb-2 shadow-lg text-sm py-0.5"
                onChange={(e) => handleChange(e)}
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="rounded-full px-3 mb-4 shadow-lg"
                value={password}
                onChange={(e) => handleChange(e)}
              />
              <Link href={`/questions`}>
                <button
                  className="rounded-lg p-3 bg-yellow-400 text-black text-center mx-auto hover:border-yellow-500 hover:text-lg drop-shadow-lg"
                  type="submit"
                  onClick={login}
                >
                  A empezar
                </button>
              </Link>
            </div>
            {error && <div className="alert alert-danger mt-4">{error}</div>}
            <br />

            {/* <button className="btn btn-test6 bg-test6 m-4" onClick={logout}>Log out</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

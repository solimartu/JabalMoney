import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useAuth from "./hooks/useAuth";

function Registration() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const [error, setError] = useState("");

  const auth = useAuth();

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setUser((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  };

  const register = async () => {
    try {
      const response = await fetch("api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const newUser = await response.json();

      setUser(newUser);
    } catch (error) {
      setError(error.message);
    }
  };
  const { username, email, password } = user;

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
            <h3 className="font-bold text-white text-2xl pb-3">Regístrate</h3>

            <div className="flex flex-col px-6">
              <label>Username</label>
              <input
                type="text"
                name="username"
                // placeholder="type your username"
                value={username}
                className="rounded-full px-3 mb-2 shadow-lg text-sm py-0.5"
                required
                onChange={(e) => handleInputChange(e)}
              />

              <label>Email</label>
              <input
                className="rounded-full px-3 mb-2 shadow-lg text-sm py-0.5"
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => handleInputChange(e)}
              />

              <label>Password</label>
              <input
                className="rounded-full px-3 mb-4 shadow-lg text-sm py-0.5"
                type="password"
                name="password"
                value={password}
                required
                onChange={(e) => handleInputChange(e)}
              />

              <Link href={`/`}>
                <button
                  className="rounded-lg p-3 bg-yellow-400 text-black text-center mx-auto hover:border-yellow-500 hover:text-lg drop-shadow-lg"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Regístrate!
                </button>
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

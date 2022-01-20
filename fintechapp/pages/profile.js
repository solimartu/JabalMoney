import { PrismaClient } from "@prisma/client";
import { useState, useEffect } from "react";
// import BoxMovement from "../components/BoxMovement";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const assessments = await prisma.assessmentAnswer.findFirst({
    where: { userId: 1 },
  });

  return {
    props: { assessments },
  };
}

export default function Profile({ assessments }) {
  const [ingreso, setIngreso] = useState({
    amount: 0,
    concept: "",
    type: "ingreso",
    category: "equis",
  });
  const [gasto, setGasto] = useState({
    amount: 0,
    concept: "",
    type: "gasto",
    category: "equis",
  });
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    getMovimientos();
  }, [movimientos]);

  function handleInputChangeI(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setIngreso((state) => ({ ...state, [name]: value }));
  }
  function handleInputChangeG(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setGasto((state) => ({ ...state, [name]: value }));
  }
  async function sendIngreso() {
    try {
      await fetch("/api/calculator/movimientos", {
        method: "POST",
        body: JSON.stringify(ingreso),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function sendGasto() {
    try {
      await fetch("/api/calculator/movimientos", {
        method: "POST",
        body: JSON.stringify(gasto),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function getMovimientos() {
    try {
      const response = await fetch("/api/calculator/balance");
      // all
      //   .filter((all) => all.userId === 1)
      //   .reduce((acc, b) => acc + b.amount, 0);
      // setIngresos(all);
      // console.log(all);
      console.log(response);
      const data = await response.json();

      setMovimientos(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mx-auto">
      <>
        <h2 className="font-bold text-black text-2xl text-center mt-2">
          Tu perfil es:
        </h2>
        <div className="grid gap-4 grid-cols-3 mt-3">
          <div className="flex items-center justify-center rounded-xl text-white text-2xl bg-emerald-300 flex-col">
            <h5 className="font-bold text-xl">Tus ingresos:</h5>
            <h3 className="font-extrabold text-4xl">{assessments.incomes}</h3>
          </div>
          <div className="flex items-center justify-center rounded-xl text-white text-4xl font-extrabold bg-emerald-400  flex-col">
            <div className="flex flex-col text-center">
              <h3 className="text-5xl font-extrabold">
                {assessments.percentfixedoutcomes}%
              </h3>
              <h6 className="font-normal text-xs">destinado a gastos </h6>
              <h5 className="text-xl font-extrabold uppercase">fijos</h5>
            </div>
            <div className="flex flex-col text-center">
              <h3 className="text-5xl font-extrabold">
                {assessments.percentessentialoutcomes}%
              </h3>
              <h6 className="font-normal text-xs">destinado a gastos </h6>
              <h5 className="text-xl font-extrabold uppercase">
                variables imprescindibles
              </h5>
            </div>
            <div className="flex flex-col text-center">
              <h3 className="text-5xl font-extrabold">
                {assessments.percentexpendableoutcomes}%
              </h3>
              <h6 className="font-normal text-xs">destinado a gastos </h6>
              <h5 className="text-xl font-extrabold uppercase">
                variables prescindibles
              </h5>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl text-white bg-emerald-500 flex-col text-center">
            <h5 className="font-bold text-xl">Tus objetivos:</h5>

            <h5 className="text-4xl font-extrabold">
              {assessments.objective1}
            </h5>
          </div>
        </div>
      </>
      <div className="container mx-auto">
        <h2 className="font-bold text-black text-2xl text-center mt-2 mb-3">
          Calculadora de gastos e ingresos
        </h2>
        {/* <BoxMovement
        handleInputChange={handleInputChange}
        sendMovimiento={sendMovimiento}
        tipo="ingreso"
      /> */}
        <div className="bg-yellow-200 rounded-xl px-3 pb-2 mb-3 drop-shadow-md">
          <h5 className="font-bold text-xl text-center text-yellow-400">
            Ingresos
          </h5>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label className="text-xs text-black mb-1">Monto</label>
              <input
                placeholder="€ 0.00"
                className="rounded-xl text-center mr-2 w-20 text-sm"
                name="amount"
                value={ingreso.amount}
                onChange={(e) => handleInputChangeI(e)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-black mb-1">Concepto</label>
              <input
                placeholder="concepto"
                className="rounded-xl text-center mr-2 w-40 text-sm"
                onChange={(e) => handleInputChangeI(e)}
                name="concept"
                value={ingreso.concept}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-black mb-1">Categoria</label>
              <select
                className="rounded-xl w-50 mr-2 text-sm px-2"
                name="category"
                value={ingreso.category}
              >
                <option>Sueldo</option>
                <option>Regalo</option>
                <option>Supermercado</option>
              </select>
            </div>
            <div className="flex flex-col align-center">
              <button
                className="rounded-full bg-yellow-400 text-white px-3 pt-1 pb-2 mt-3 font-extrabold"
                type="submit"
                onClick={(e) => sendIngreso(e)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        {/* <BoxMovement
        handleInputChange={handleInputChange, "tipo"}
        sendMovimiento={sendMovimiento}
        tipo="ingreso"
      /> */}
        <div className="bg-red-200 rounded-xl px-3 pb-2 mb-3 drop-shadow-md">
          <h5 className="font-bold text-xl text-center text-red-400">Gastos</h5>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label className="text-xs text-black mb-1">Monto</label>
              <input
                placeholder="€ 0.00"
                className="rounded-xl text-center mr-2 w-20 text-sm"
                name="amount"
                value={gasto.amount}
                onChange={(e) => handleInputChangeG(e)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-black mb-1">Concepto</label>
              <input
                placeholder="concepto"
                className="rounded-xl text-center mr-2 w-40 text-sm"
                onChange={(e) => handleInputChangeG(e)}
                name="concept"
                value={gasto.concept}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-black mb-1">Categoria</label>
              <select
                className="rounded-xl w-50 mr-2 text-sm px-2"
                name="category"
                value={gasto.category}
              >
                <option>Supermercado</option>
                <option>Servicios</option>
              </select>
            </div>
            <div className="flex flex-col align-center">
              <button
                className="rounded-full bg-red-400 text-white px-3 pt-1 pb-2 mt-3 font-extrabold"
                type="submit"
                onClick={(e) => sendGasto(e)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <hr className="text-gray-400 mt-4 mx-5"></hr>
        <div className="grid gap-4 grid-cols-3 mt-3">
          <div className="flex items-center justify-center rounded-xl text-white text-2xl bg-yellow-400 flex-col drop-shadow-md">
            <div className="flex flex-col text-center mb-3">
              <h3 className="text-2xl font-bold">Ingresos</h3>

              <h3 className="text-4xl font-light">{movimientos.ingresos}€</h3>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl text-white text-4xl font-extrabold bg-red-400 flex-col drop-shadow-md">
            <div className="flex flex-col text-center mb-3">
              <h3 className="text-2xl font-bold">Gastos</h3>

              <h3 className="text-4xl font-light">{movimientos.gastos}€</h3>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl text-white text-4xl font-extrabold bg-emerald-400 flex-col drop-shadow-xl">
            <div className="flex flex-col text-center mb-3">
              <h3 className="text-2xl font-bold">Balance</h3>

              <h3 className="text-4xl font-light">{movimientos.balance}€</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

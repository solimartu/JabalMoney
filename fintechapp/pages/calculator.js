import { PrismaClient } from "@prisma/client";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const movements = await prisma.calculator.findMany({
    where: { userId: 1 },
  });

  console.log(movements);
  return {
    props: { movements },
  };
}

export default function Profile({ movements }) {
  const [movimiento, setMovimiento] = useState({
    amount: 0,
    concept: "",
    type: "ingreso",
    category: "",
  });
  const [ingresos, setIngresos] = useState([]);

  useEffect(() => {
    getIncomes();
  }, []);

  function handleInputChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setMovimiento((state) => ({ ...state, [name]: value }));
  }
  async function sendMovimiento() {
    try {
      await fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify(movimiento),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function getIncomes() {
    try {
      const response = await fetch("/api/calculator/incomes");
      // all
      //   .filter((all) => all.userId === 1)
      //   .reduce((acc, b) => acc + b.amount, 0);
      // setIngresos(all);
      // console.log(all);
      console.log(response);
      const data = await response.json();

      setIngresos(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mx-auto">
      {/* {assessments.map((a) => (
        <div key={a}> {a.incomes}</div>
      ))} */}
      <h2 className="font-bold text-black text-2xl text-center mt-2 mb-3">
        Calculadora de gastos e ingresos
      </h2>
      <div className="bg-yellow-200 rounded-xl px-3 pb-2 mb-3 drop-shadow-md">
        <h5 className="font-bold text-xl text-center text-yellow-400">
          Ingresos
        </h5>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label className="text-xs text-black mb-1">Monto</label>
            <input
              placeholder="€ 0.00"
              type="number"
              className="rounded-xl text-center mr-2 w-20 text-sm"
              name="amount"
              value={movimiento.amount}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-black mb-1">Concepto</label>
            <input
              placeholder="concepto"
              className="rounded-xl text-center mr-2 w-40 text-sm"
              onChange={(e) => handleInputChange(e)}
              name="concept"
              value={movimiento.concept}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-black mb-1">Categoria</label>
            <select
              className="rounded-xl w-50 mr-2 text-sm px-2"
              name="category"
              value={movimiento.category}
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
              onClick={(e) => sendMovimiento(e)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red-200 rounded-xl px-3 pb-2 mb-3 drop-shadow-md">
        <h5 className="font-bold text-xl text-center text-red-400">Gastos</h5>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label className="text-xs text-black mb-1">Monto</label>
            <input
              placeholder="€ 0.00"
              className="rounded-xl text-center mr-2 w-20 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-black mb-1">Concepto</label>
            <input
              placeholder="concepto"
              className="rounded-xl text-center mr-2 w-40 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-black mb-1">Categoria</label>
            <select className="rounded-xl w-50 mr-2 text-sm px-2">
              <option>Supermercado</option>
              <option>Servicios</option>
            </select>
          </div>
          <div className="flex flex-col align-center">
            <button className="rounded-full bg-red-400 text-white px-3 pt-1 pb-2 mt-3 font-extrabold">
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

            <h3 className="text-4xl font-light">{ingresos}€</h3>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl text-white text-4xl font-extrabold bg-red-400 flex-col drop-shadow-md">
          <div className="flex flex-col text-center mb-3">
            <h3 className="text-2xl font-bold">Gastos</h3>

            <h3 className="text-4xl font-light">0€</h3>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl text-white text-4xl font-extrabold bg-emerald-400 flex-col drop-shadow-xl">
          <div className="flex flex-col text-center mb-3">
            <h3 className="text-2xl font-bold">Balance</h3>

            <h3 className="text-4xl font-light">{movements.amount}€</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

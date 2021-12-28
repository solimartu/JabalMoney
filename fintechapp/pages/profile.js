import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const assessments = await prisma.assessmentAnswer.findMany({
    where: { id: 1 },
  });

  console.log(assessments);
  return {
    props: { assessments },
  };
}

export default function Profile({ assessments }) {
  return (
    <div className="container mx-auto">
      {assessments.map((a) => (
        <div key={a}> {a.incomes}</div>
      ))}
      <h2 className="font-bold text-black text-2xl text-center mt-2">
        Tu perfil es:
      </h2>
      <div className="grid gap-4 grid-cols-3 mt-3">
        <div className="flex items-center justify-center rounded-xl text-white text-2xl bg-emerald-300 flex-col">
          <h5 className="font-bold text-xl">Tus ingresos:</h5>
          <h3 className="font-extrabold text-5xl">{assessments[0].incomes}</h3>
        </div>
        <div className="flex items-center justify-center rounded-xl text-white text-4xl font-extrabold bg-emerald-400  flex-col">
          <div className="flex flex-col text-center">
            <h3 className="text-5xl font-extrabold">
              {assessments[0].percentfixedoutcomes}
            </h3>
            <h6 className="font-normal text-xs">destinado a gastos </h6>
            <h5 className="text-xl font-extrabold uppercase">fijos</h5>
          </div>
          <div className="flex flex-col text-center">
            <h3 className="text-5xl font-extrabold">
              {assessments[0].percentessentialoutcomes}
            </h3>
            <h6 className="font-normal text-xs">destinado a gastos </h6>
            <h5 className="text-xl font-extrabold uppercase">
              variables imprescindibles
            </h5>
          </div>
          <div className="flex flex-col text-center">
            <h3 className="text-5xl font-extrabold">
              {assessments[0].percentexpendableoutcomes}
            </h3>
            <h6 className="font-normal text-xs">destinado a gastos </h6>
            <h5 className="text-xl font-extrabold uppercase">
              variables prescindibles
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl text-white bg-emerald-500 flex-col text-center">
          <h5 className="font-bold text-xl">Tus objetivos:</h5>
          <h3 className="text-5xl font-extrabold">1</h3>
          <h5 className="text-2xl font-extrabold">Ahorrar</h5>

          <h3 className="text-5xl font-extrabold">2</h3>
          <h5 className="text-2xl font-extrabold">Administrar mis finanzas</h5>
        </div>
      </div>
      <button className="text-black text-center">Y ahora qué?</button>
    </div>
  );
}

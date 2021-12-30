const { PrismaClient } = require("@prisma/client");
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider);

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const questions = await prisma.question.findUnique({
    where: { id: 1 },
  });

  console.log(questions);
  return {
    props: { questions },
  };
}

export default function Ques({ questions }) {
  return (
    <div className="container mx-auto text-center">
      <h2 className="font-bold text-black text-3xl text-center mt-2">
        Assessment questions
      </h2>
      <h3 className="font-normal text-black text-2xl text-center mt-2">
        {questions.title}
      </h3>
      <div className="flex flex-col mx-40">
        <button className="bg-emerald-300 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
          Fijos
        </button>
        <button className="bg-emerald-400 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
          Soy autónomo
        </button>
        <button className="bg-emerald-500 text-white py-3 px-20 mt-3 rounded-xl text-center font-extrabold text-2xl">
          Estoy en el paro
        </button>

        <Range className="mt-3" />
      </div>
      <div className="text-right pr-4">Question {questions.id}/5</div>
    </div>
  );
}

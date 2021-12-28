import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container mx-auto bg-[#31ba9c]">
      <h2 className="font-bold text-white text-2xl text-center mt-2 pt-6">
        Hoy es el ultimo dia
      </h2>
      <h2 className="font-bold text-white text-4xl text-center -mt-5 pt-6">
        de tu vida de pobre
      </h2>
      <Image
        priority
        src="/images/financialimg2.webp"
        className="img-fluid mx-auto text-center"
        height={783}
        width={1024}
        alt="bla"
      />
    </div>
  );
}

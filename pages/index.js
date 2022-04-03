import Head from "next/head";
import Image from "next/image";
import Styles from '../styles/home.module.css';

export default function Home() {

  return (

    <div>
      <Head>
        <title> Nerf This. </title>
        <meta name="description" content="League of Legends Stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" text-red-600 font-bold">
        Hello
      </div>

    </div>

  )

}

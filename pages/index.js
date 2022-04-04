import Head from "next/head";
import Image from "next/image";
import Styles from '../styles/home.module.css';

import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function Home() {

  const color = '#000000'

  return (
    <div>
      <Head>
        <title> Nerf This. </title>
        <meta name="description" content="League of Legends Stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ​‌‌‍​‌‍‌𝗛𝗢𝗠𝗘​ */}
      <div className="grid grid-cols-1 grid-rows-3 h-screen w-screen min-h-screen overflow-hidden" id='home'>
        <header className=''>
          <NavBar color={color} />
        </header>
        <div className='flex flex-col row-start-2 justify-center place-items-center'>
          <p className='font-Inter text-8xl font-black text-white pb-6'>nerf this.</p>
          <span className='w-640'> <SearchBar color={color} /> </span>
        </div>
        <footer className='flex row-start-3 items-end place-content-center p-5'>
          <Footer />
        </footer>
      </div>
      {/* ​‌‍‌𝗛𝗢𝗠𝗘 𝗘𝗡𝗗​  */}

    </div>
  )
}

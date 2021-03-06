import Head from "next/head";
import NavBar from "../components/common/NavBar";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/common/Footer";
import { BackgroundHome } from "../components/common/BackgroundLayer";

export default function Home() {

  return (
    <div>
      <Head>
        <title> nerf this. </title>
        <meta name="description" content="League of Legends Stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ​‌‌‍​‌‍‌𝗛𝗢𝗠𝗘​ */}
      <BackgroundHome imageSrc='/images/beemo.jpg'>
        <div className="grid grid-cols-1 grid-rows-3 h-screen w-screen min-h-screen overflow-hidden" id='home'>
          <header className=''>
            <NavBar />
          </header>
          <div className='flex flex-col row-start-2 justify-center place-items-center'>
            <p className='font-Inter text-8xl font-black text-white pb-6'>nerf this.</p>
            <span className='w-640'> <SearchBar /> </span>
          </div>
          <footer className='flex row-start-3 items-end place-content-center p-5'>
            <Footer />
          </footer>
        </div>
      </BackgroundHome>
      {/* ​‌‍‌𝗛𝗢𝗠𝗘 𝗘𝗡𝗗​ */}

    </div>
  )
}

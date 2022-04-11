import Head from "next/head";
import NavBar from "../components/common/NavBar";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/common/Footer";
import { BackgroundHome } from "../components/common/BackgroundLayer";

export default function About() {

  return (
    <div>
      {/* ABOUT */}
      <BackgroundHome imageSrc='/images/ahri.jpg'>
        <div className="grid grid-cols-1 grid-rows-3 h-screen w-screen min-h-screen overflow-hidden" id='home'>
          <header className=''>
            <NavBar />
          </header>
          <p className='font-Inter text-8xl font-black text-white text-center'>🧍‍♂️ about 💅 </p>
          <footer className='flex row-start-3 items-end place-content-center p-5'>
            <Footer />
          </footer>
        </div>
      </BackgroundHome>
      {/* ABOUT END */}

    </div>
  )
}

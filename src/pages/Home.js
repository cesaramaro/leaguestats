import '../index'
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 h-screen w-screen" id='home'>
      <header className=''>
        <NavBar />
      </header>
      <div className='flex flex-col row-start-2 justify-center place-items-center'>
        <p className='font-Inter text-8xl font-black text-white pb-6'>nerf this.</p>
        <SearchBar />
      </div>
      <footer className='flex row-start-3 items-end place-content-center p-5'>
        <Footer />
      </footer>
    </div>
  );
}

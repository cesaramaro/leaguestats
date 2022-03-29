import logo from '../logo.svg';
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 h-screen w-screen">
      <nav className=''>
        <NavBar />
      </nav>
      <div className='flex row-start-2 justify-center place-items-center'>
        <SearchBar/>
      </div>
      <footer className='flex row-start-3 items-end text-center p-5'>
        <Footer />  
      </footer>
    </div>
  );
}

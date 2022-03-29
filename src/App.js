import logo from './logo.svg';
import './Sass/style.scss'
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import bg from './images/vex-bg.jpg';
import Champions from './components/Champions';
import Match from './components/Match';
import SummonerCard from './components/SummonerCard';

export default function App() {
  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
}

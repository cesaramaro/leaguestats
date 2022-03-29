import NavBar from "../components/NavBar";
import Champions from '../components/Champions';
import Match from '../components/Match';
import SummonerCard from '../components/SummonerCard';
import Footer from '../components/Footer';

export default function Summoner() {
  return (
    <div className="Summoner">
      <NavBar />
      <Champions />
      <Match />
      <SummonerCard />
      <Footer />
    </div>
  );
}

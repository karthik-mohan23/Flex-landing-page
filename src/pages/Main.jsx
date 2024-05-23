import BgImage from "../assets/BG.png";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import bgWave from "../assets/BGWave.png";
import heroBg from "../assets/HeroBG.png";

console.log(BgImage);

const Main = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "contain",
      }}
      className="min-h-full">
      <Navbar />
      <Hero />
    </div>
  );
};
export default Main;

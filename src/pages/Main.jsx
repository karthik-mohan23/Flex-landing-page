import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroBg from "../assets/HeroBG.png";

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

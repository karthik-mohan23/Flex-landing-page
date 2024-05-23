import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroBg from "../assets/HeroBG.png";

const Main = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "contain",
      }}
      className="min-h-full">
      <Navbar />
      <Hero />
    </section>
  );
};
export default Main;

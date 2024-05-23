import logoImage from "../assets/Group.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logoImage} alt="logo" />
      <h2 className="text-gray-900  text-xl font-extrabold">Flex</h2>
    </div>
  );
};
export default Logo;

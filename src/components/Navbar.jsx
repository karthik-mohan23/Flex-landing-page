import Logo from "./Logo";

const links = [
  { href: "#", label: "Product" },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Resources" },
];

const Navbar = () => {
  return (
    <header className="py-6">
      <nav className="w-[90%] mx-auto flex items-center justify-between">
        <Logo />
        <ul className="hidden md:flex items-center gap-12 text-gray-500  ">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-6 ">
          <button className="text-gray-500 rounded-md   px-3 py-1">
            Log In
          </button>
          <button className="bg-primary-500 rounded-md  text-white-50 px-3 py-1">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

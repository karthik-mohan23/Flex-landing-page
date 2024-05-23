import checkBoxImg from "../assets/Checkbox.png";
import SignInForm from "./SignInForm";

const checkboxTexts = [
  "Mauris pellentesque congue libero nec",
  "Suspendisse mollis tincidunt",
  "Praesent varius justo vel justo pulvinar",
];

const Hero = () => {
  return (
    <section className="w-[85%] lg:w-[75%] mx-auto  pt-8 pb-20  lg:pt-16 lg:pb-40 lg:flex items-center  justify-between gap-4">
      <div className="max-w-[554px] mb-20 lg:mb-0 ">
        <div className="flex flex-col gap-4 mb-8">
          <span className="bg-primary-500 rounded-full text-primary-100 font-medium text-xs px-2 py-2 self-start">
            HEADER
          </span>
          <h1 className="text-gray-900 font-extrabold whitespace-pre-wrap text-6xl -tracking-[0.02em] leading-[72px] font-poppins">
            A small business is only as good as its tools.
          </h1>
          <p className="font-medium text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisng.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {checkboxTexts.map((text) => (
            <CheckboxText text={text} key={text} />
          ))}
        </div>
      </div>
      <SignInForm />
    </section>
  );
};
export default Hero;

function CheckboxText({ text }) {
  return (
    <div className="flex items-center gap-3">
      <img src={checkBoxImg} alt="checkbox image" className="w-5 h-full" />
      <p className="font-medium text-xl text-gray-500">{text}</p>
    </div>
  );
}

import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";
import appleIcon from "../assets/apple.png";
import LogoIcon from "../assets/Frame3.png";

const SignInButtonContents = [
  { icon: googleIcon, label: "Sign in with Google" },
  { icon: facebookIcon, label: "Sign in with Facebook" },
  { icon: appleIcon, label: "Sign in with Apple" },
];

const SignInForm = () => {
  return (
    <div className="rounded-2xl bg-white-900 px-[98px] shadow-2xl lg:w-[554px] max-w-[554px] relative">
      <img
        src={LogoIcon}
        alt="logo icon"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      />
      <div className="    pt-[88px] pb-[46px]">
        <h3 className="text-[30px] font-bold text-gray-900 text-center mb-4">
          Join our community
        </h3>
        <p className="text-lg font-medium text-gray-500 text-center mb-[26px]">
          Start your free trial
        </p>
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="loginEmail"
              className="text-gray-800 font-medium text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              id="loginEmail"
              className="rounded-lg px-[14px] py-[10px] outline-gray-200 border border-gray-200"
            />
          </div>
          <button className="bg-primary-500 rounded-md text-white-50  h-[46px]">
            Get Started
          </button>
          <p className="flex justify-between items-center gap-2 ">
            <LoginFormDivider />
            <span className="text-xs font-medium text-gray-400">OR</span>
            <LoginFormDivider />
          </p>
          {SignInButtonContents.map(({ icon, label }) => (
            <SignInButton icon={icon} label={label} />
          ))}

          <p className="text-gray-400 text-sm font-medium self-center pt-2">
            Already have an account?{" "}
            <span className="text-primary-500">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignInForm;

function SignInButton({ icon, label }) {
  return (
    <button className="flex justify-center items-center gap-2 h-[46px] border border-gray-200 rounded-md">
      <img src={icon} alt="" />{" "}
      <span className="font-medium text-base text-gray-500">{label}</span>
    </button>
  );
}

function LoginFormDivider() {
  return <div className="bg-gray-100 h-[2px] w-full"></div>;
}

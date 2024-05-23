import checkBoxImg from "../assets/Checkbox.png";
const CheckboxText = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={checkBoxImg} alt="checkbox image" className="w-5 h-full" />
      <p className="font-medium text-xl text-gray-500">{text}</p>
    </div>
  );
};
export default CheckboxText;

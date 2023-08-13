type Props = {
  currentStep: number;
};

const Steps = ({ currentStep }: Props) => {
  return (
    <div className="flex justify-center items-center mb-8 text-center">
      <div
        className={`px-4 py-2 cursor-pointer rounded-l ${
          currentStep === 1 ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Step One
      </div>
      <div
        className={`px-4 py-2 cursor-pointer  ${
          currentStep === 2 || currentStep === 3
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        Step Two
      </div>
      <div
        className={`px-4 py-2 cursor-pointer rounded-r ${
          currentStep === 4 ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Step Three
      </div>
    </div>
  );
};

export default Steps;

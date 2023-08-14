import Image from "next/image";

type Props = {
  onChange: (value: string) => void;
  diseaseType: string;
};

const all_steps = [
  {
    image: "/assets/disease.jpeg",
    title: "Alzheimer disease",
    id: 1,
  },
  {
    image: "/assets/disease.jpeg",
    title: "Heart disease",
    id: 2,
  },
  {
    image: "/assets/disease.jpeg",
    title: "Diabetic Retinopathy ",
    id: 3,
  },
];

const StepOne = ({ onChange, diseaseType }: Props) => {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-3 lg:gap-8">
        {all_steps.map((step) => (
          <div
            key={step.id}
            className={`${
              diseaseType === step.title && "border border-gray-400 shadow"
            } p-2 rounded`}
            onClick={() => onChange(step.title)}
          >
            <Image
              src={step.image}
              alt={step.title}
              width={400}
              height={400}
              className="rounded"
            />
            <p className="text-center mt-4 mb-2">{step.title}</p>
          </div>
        ))}
      </div>
      <p className="text-center my-20 text-lg">
        <span className="font-semibold">Note:</span> You should upload an Xray
        scan image for better prediction and accuracy...
      </p>
    </div>
  );
};

export default StepOne;

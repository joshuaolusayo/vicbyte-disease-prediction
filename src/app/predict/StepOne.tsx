import Image from "next/image";

const StepOne = () => {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-3 lg:gap-8">
        <div className="border p-2 border-gray-800 rounded">
          <Image
            src="/assets/disease.jpeg"
            alt="Lung disease"
            width={400}
            height={400}
            className="rounded"
          />
          <p className="text-center mt-4 mb-2">Lung Disease</p>
        </div>
        <div className="border p-2 border-gray-800 rounded">
          <Image
            src="/assets/disease.jpeg"
            alt="Lung disease"
            width={400}
            height={400}
            className="rounded"
          />
          <p className="text-center mt-4 mb-2">Lung Disease</p>
        </div>
        <div className="border p-2 border-gray-800 rounded">
          <Image
            src="/assets/disease.jpeg"
            alt="Lung disease"
            width={400}
            height={400}
            className="rounded"
          />
          <p className="text-center mt-4 mb-2">Lung Disease</p>
        </div>
      </div>
      <p className="text-center my-8">
        <span className="font-semibold">Note:</span> You should upload an Xray
        scan image for better prediction and accuracy...
      </p>
    </div>
  );
};

export default StepOne;

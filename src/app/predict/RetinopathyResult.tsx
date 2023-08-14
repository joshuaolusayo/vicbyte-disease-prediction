import { ResultType } from "./page";

type Props = {
  result: ResultType;
};

const RetinoResult = ({ result }: Props) => {
  const { prediction } = result;
  return (
    <>
      <p className="leading-relaxed text-lg text-gray-600 text-center mb-4">
        {prediction === "Healthy" ? "You are healthy" : "You are not healty"}.{" "}
      </p>
    </>
  );
};

export default RetinoResult;

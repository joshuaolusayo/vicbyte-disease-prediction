import AlzheimerResult from "./AlzheimerResult";
import HeartDiseaseResult from "./HeartDiseaseResult";
import RetinoResult from "./RetinopathyResult";
import { ResultType } from "./page";

type Props = {
  result: ResultType | null;
};

const Result = ({ result }: Props) => {
  console.log(result);

  return (
    <div className="my-10">
      <div className="max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6">
            Prediction Result
          </h3>
        </div>

        {result?.type?.trim() === "Heart disease" && (
          <HeartDiseaseResult result={result} />
        )}

        {result?.type?.trim() === "Alzheimer disease" && (
          <AlzheimerResult result={result} />
        )}

        {result?.type?.trim() === "Diabetic Retinopathy" && (
          <RetinoResult result={result} />
        )}
      </div>
    </div>
  );
};

export default Result;

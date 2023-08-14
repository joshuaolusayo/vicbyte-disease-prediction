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
      <div className="mt-10 text-gray-600">
        <p className="text-lg mb-3">
          {prediction === "Healthy" ? (
            <>
              Congratulations! Your prediction indicates a healthy condition,
              and no signs of Diabetic Retinopathy have been detected. It&apos;s
              essential to continue managing your diabetes and maintaining a
              healthy lifestyle to ensure your eye health remains optimal.
              Regular eye check-ups and following your healthcare
              provider&apos;s recommendations can help you keep your eyes in
              great shape. If you have any concerns or questions, don&apos;t
              hesitate to consult your healthcare professional. Remember,
              proactive care is key to preserving your vision and overall
              well-being.
            </>
          ) : (
            <>
              We&apos;ve detected some indications that suggest the presence of
              Diabetic Retinopathy. Please remember that early detection and
              proactive management are crucial in addressing this condition. We
              recommend scheduling an appointment with your healthcare provider
              or an eye specialist as soon as possible for a comprehensive
              examination and personalized guidance. Timely intervention and
              proper management can significantly improve your chances of
              preserving your vision and preventing further complications. Stay
              proactive about your health and work closely with your medical
              team to ensure the best possible outcome.
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default RetinoResult;

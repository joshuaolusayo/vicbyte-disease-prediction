import { ResultType } from "./page";

type Props = {
  result: ResultType;
};

const HeartDiseaseResult = ({ result }: Props) => {
  return (
    <>
      {result?.type === "Heart disease" && (
        <p className="leading-relaxed text-lg text-gray-600 text-center mb-4">
          {result?.prediction === "no_heart_disease"
            ? "You have heart disease"
            : "You do not have heart disease"}
          .{" "}
          {result?.probability &&
            `The probability of having is
            ${Number.parseFloat(result.probability)?.toFixed(2)}`}
        </p>
      )}
      {result?.prediction !== "no_heart_disease" ? (
        <div className="mt-10 text-gray-600">
          <h3 className="tex-xl font-semibold text-center mb-4 text-black">
            Managing Heart Disease: Your Guide to a Healthier Life
          </h3>
          <p className="text-lg mb-3">
            Living with heart disease requires making positive changes to your
            lifestyle and adopting habits that support your heart health.
            Here&apos;s what you can do:
          </p>
          <ol className="ml-4 list-decimal">
            <li>Follow Your Doctor&apos;s Recommendations</li>
            <li>Have Healthy Eating Habits</li>
            <li>
              Stay Active: Engage in regular physical activity with your
              doctor&apos;s approval
            </li>
            <li>
              Manage Stress: Practice stress-relief techniques like deep
              breathing, meditation, and yoga
            </li>
            <li>Monitor Your Heart</li>
            <li>Quit Smoking</li>
            <li>Limit Alcohol Intake</li>
            <li>
              Build a Support System: Connect with friends, family, or support
              groups that understand your journey and can offer encouragement
            </li>
          </ol>
          <p className="text-gray-800">
            Remember, managing heart disease is a journey. By making these
            positive changes, you&apos;re taking control of your health and
            reducing the risk of further complications.
          </p>
        </div>
      ) : (
        <div className="mt-10 text-gray-600">
          <h3 className="tex-xl font-semibold text-center mb-4 text-black">
            Heart-Healthy Living: Preventing Heart Disease
          </h3>
          <p className="text-lg mb-3">
            Congratulations on maintaining a healthy heart! Here are some tips
            to keep your heart in top shape:
          </p>
          <ol className="ml-4 list-decimal">
            <li>Eat Balanced Diet</li>
            <li>
              Stay Active: Engage in regular physical activity with your
              doctor&apos;s approval
            </li>
            <li>
              Manage Stress: Practice stress-relief techniques like deep
              breathing, meditation, and yoga
            </li>
            <li>Avoid Smoking and Excessive Alcohol</li>
            <li>Regular Check-ups</li>
            <li>
              Maintain a healthy weight through a balanced diet and regular
              exercise
            </li>
            <li>Quality Sleep</li>
            <li>Educate Yourself</li>
          </ol>
          <p className="text-gray-800">
            Remember, the choices you make today can impact your heart health in
            the future. By adopting these habits, you&quot;re investing in a
            healthier and happier life.
          </p>
        </div>
      )}
    </>
  );
};

export default HeartDiseaseResult;

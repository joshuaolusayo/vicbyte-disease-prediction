"use client";

import { useState } from "react";
import Steps from "./Steps";
import StepOne from "./StepOne";
import UploadImage from "./UploadImage";
import Result from "./Result";
import PredictionForm from "./PredictionForm";

export type ResultType = {
  prediction?: string;
  probability?: string;
  type: string;
};

export default function Summarizer() {
  const [current_step, setCurrentStep] = useState<number>(1);
  const [disease_type, setDiseaseType] = useState<string>("");
  const [result, setResult] = useState<ResultType | null>(null);

  const handleChangeDisease = (value: string) => setDiseaseType(value);

  const handlePrevious = () => {
    if (current_step === 3 || current_step === 4) setCurrentStep(1);
    else current_step > 1 ? setCurrentStep((prev_step) => prev_step - 1) : "";
  };

  const handleNext = () => {
    if (current_step > 4) return;
    if (current_step === 1) {
      if (!disease_type) return;
      if (disease_type === "Heart disease") setCurrentStep(3);
      else setCurrentStep(2);
      return;
    }
    if (!result) return;
    else setCurrentStep(4);
  };

  const changeResult = (value: ResultType) => {
    setResult(value);
    handleNext();
  };

  return (
    <main className="px-6 py-20">
      <div className="container mx-auto">
        <div className="bg-gray-600/10 px-6 py-10 lg:px-10 lg:py-16 rounded-lg max-w-6xl mx-auto">
          <Steps currentStep={current_step} />
          {current_step === 1 && (
            <StepOne
              onChange={handleChangeDisease}
              diseaseType={disease_type}
            />
          )}
          {current_step === 2 && (
            <UploadImage changeResult={changeResult} type={disease_type} />
          )}
          {current_step === 3 && (
            <PredictionForm changeResult={changeResult} type={disease_type} />
          )}
          {current_step === 4 && <Result result={result} />}
          <div className="flex justify-center space-x-4">
            {current_step > 1 && current_step <= 4 && (
              <button
                onClick={handlePrevious}
                className="bg-transparent border-2 border-black px-12 py-3 text-black hover:bg-black hover:text-white hover:border-white duration-500 text-3xl"
              >
                Previous
              </button>
            )}
            {current_step >= 1 && current_step < 4 && (
              <button
                onClick={handleNext}
                className="bg-transparent border-2 border-black px-12 py-3 text-black hover:bg-black hover:text-white hover:border-white duration-500 text-3xl"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

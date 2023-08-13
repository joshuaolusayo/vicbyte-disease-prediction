"use client";

import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import Steps from "./Steps";
import StepOne from "./StepOne";
import UploadImage from "./UploadImage";
import Result from "./Result";

export default function Summarizer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [current_step, setCurrentStep] = useState<number>(3);
  const [disease_type, setDiseaseType] = useState<string>("");

  const handleStepChange = (value: number) => setCurrentStep(value);
  const handleChangeDisease = (value: string) => setDiseaseType(value);

  const handlePrevious = () =>
    current_step > 1 ? setCurrentStep((prev_step) => prev_step - 1) : "";

  const handleNext = () =>
    current_step < 3 ? setCurrentStep((prev_step) => prev_step + 1) : "";

  const handleSubmit = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);
      const request = await axios.post(
        "https://summarizer-cd45.onrender.com/summarize",
        {
          message: text,
        }
      );
      if (request.status !== 200) {
        toast.error("Unable to generate response at the moment");
      }
      if (request.data?.response) {
        toast.success("Summary generated successfully!");
        setResult(request.data.response);
      }
    } catch (error: any) {
      toast.error(error?.message ?? "An error occured. Please, try again");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
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
          {current_step === 2 && <UploadImage />}
          {current_step === 3 && <Result />}
          <div className="flex justify-center space-x-4">
            {current_step > 1 && current_step <= 3 && (
              <button
                onClick={handlePrevious}
                className="bg-transparent border-2 border-black px-12 py-3 text-black hover:bg-black hover:text-white hover:border-white duration-500 text-3xl"
              >
                Previous
              </button>
            )}
            {current_step >= 1 && current_step < 3 && (
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

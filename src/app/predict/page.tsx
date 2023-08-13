"use client";

import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import Steps from "./Steps";
import StepOne from "./StepOne";

export default function Summarizer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

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
          <Steps />
          <StepOne />
        </div>
      </div>
    </main>
  );
}

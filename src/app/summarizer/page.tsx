"use client";

import axios from "axios";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

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
    <main className="grid lg:grid-cols-2 gap-y-10 gap-10 summarize-height">
      <div className="border-2 border-black p-4 rounded-lg h-full flex flex-col justify-between items-stretch">
        <textarea
          className="w-full h-full resize-none placeholder:text-gray-600 focus:outline-none overflow-y-scroll"
          placeholder="Paste/write your topic and then click the Summarize button."
          name="summarize-text"
          id="summarize-text"
          rows={10}
          onChange={handleChange}
          value={text}
        ></textarea>
        <div className="flex justify-end border-t-2 border-black pt-3">
          <button
            className="px-10 py-2 bg-gray-600 hover:bg-black duration-500 text-white rounded"
            onClick={handleSubmit}
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </div>
      <div className="border-2 border-black p-4 rounded-lg h-full">
        {result && (
          <>
            <h3 className="font-semibold mb-4">Summary:</h3>
            {result}
          </>
        )}
      </div>
    </main>
  );
}

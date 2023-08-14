import Image from "next/image";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { ResultType } from "./page";
import axios from "axios";
import { toast } from "react-hot-toast";

export type ResultProp = {
  changeResult: (value: ResultType) => void;
  type: string;
};

const UploadImage = ({ changeResult, type }: ResultProp) => {
  const [files, setFiles] = useState<FileList>();
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(e.target.files);
  };

  const url =
    type !== "Alzheimer disease"
      ? "https://retinopathy-prediction.onrender.com/predict/"
      : "https://alzheimer-predictor.onrender.com/predict/";

  const mockResponse =
    type === "Alzheimer disease" ? { predicted_label: "VeryMildDemented" } : {};

  const handleSubmit = async () => {
    if (!files?.length) return;

    try {
      setLoading(true);
      const result = await axios.post(
        url,
        {
          file: files[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log({ result });
      if (result?.data) {
        changeResult({
          type,
          prediction: result?.data?.predicted_label,
        });
      }
    } catch (error: any) {
      toast.error(error?.message || "An error occured");
      console.log(error);
      console.log(error?.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-6 justify-center items-center my-10">
      <input
        className="bg-white px-4 py-2"
        type="file"
        name="image"
        id="image"
        onChange={handleFileChange}
      />
      {files?.length && (
        <div className="flex flex-col justify-center space-y-4">
          <Image
            src={URL.createObjectURL(files[0])}
            alt="Uploaded image"
            width={400}
            height={400}
          />

          <button
            className="py-3 px-6 border-2 border-gray-600 bg-gray-600 text-white hover:bg-black duration-500"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadImage;

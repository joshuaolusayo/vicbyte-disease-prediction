"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField, { LabelMessage } from "./InputField";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ResultProp } from "./UploadImage";

const validationSchema = yup.object({
  age: yup.number().required("Required"),
  gender: yup.number().required("Required"),
  chestPainType: yup.number().required("Required"),
  restingBP: yup.number().integer().min(100).max(180).required("Required"),
  cholesterol: yup.number().integer().min(100).max(600).required("Required"),
  fastingBS: yup.number().oneOf([0, 1]).required("Required"),
  restingECG: yup.number().oneOf([0, 1, 2]).required("Required"),
  maxHR: yup.number().min(60).max(202).required("Required"),
  exerciseAngina: yup.number().oneOf([0, 1]).required("Required"),
  oldpeak: yup.number().min(0).max(6).required("Required"),
  stSlope: yup.number().oneOf([0, 1, 2]).required("Required"),
});

const PredictionForm = ({ changeResult }: ResultProp) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = handleSubmit(async (data) => {
    toast.success("Form submitted");
    console.log(data);
    try {
      setLoading(true);
      const values = {
        Age: data.age,
        ChestPainType: data.chestPainType,
        RestingBP: data.restingBP,
        Cholesterol: data.cholesterol,
        FastingBS: data.fastingBS,
        RestingECG: data.restingECG,
        MaxHR: data.maxHR,
        ExerciseAngina: data.exerciseAngina,
        Oldpeak: data.oldpeak,
        ST_Slope: data.stSlope,
      };
    //   console.log(values);
      const request = await axios.post(
        "https://heart-disease-myfa.onrender.com/predict",
        { ...values }
      );
      if (request.status !== 200) {
        toast.error("Unable to generate prediction at the moment");
      }
      if (request.data?.response) {
        toast.success("Prediction generated successfully!");
        changeResult(request.data.response);
      }
    } catch (error: any) {
      toast.error(error?.message ?? "An error occured. Please, try again");
    } finally {
      setLoading(false);
    }
    // changeResult("asdfadf");
  });

  useEffect(() => {
    watch();
  }, [watch]);

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmit}>
        <div className="grid gap-y-4 mb-10">
          <div>
            <InputField
              register={register}
              errorMessage={errors?.age?.message}
              name="age"
              label="Age"
              type="number"
              placeholder="40"
            />
            <ErrorMessage message={errors?.age?.message} />
          </div>

          <div>
            <LabelMessage name="gender" message="Gender" />
            <select
              className="w-full px-4 py-3 rounded focus:outline-none"
              {...register("gender")}
              aria-invalid={errors.gender ? "true" : "false"}
            >
              <option value="">Select Your Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
            <ErrorMessage message={errors?.gender?.message} />
          </div>

          <div>
            <LabelMessage name="chestPainType" message="Chest Pain Type" />
            <select
              className="w-full px-4 py-3 rounded focus:outline-none"
              {...register("chestPainType")}
              aria-invalid={errors.chestPainType ? "true" : "false"}
            >
              <option value="">Select Chest Pain Type</option>
              <option value="3">TA: Typical Angina</option>
              <option value="2">ATA: Atypical Angina</option>
              <option value="1">NAP: Non-Anginal Pain</option>
              <option value="0">ASY: Asymptomatic</option>
            </select>
            <ErrorMessage message={errors?.chestPainType?.message} />
          </div>

          <div>
            <InputField
              label="Resting Blood Pressure (100 - 180)"
              placeholder="120"
              name="restingBP"
              type="number"
              register={register}
              errorMessage={errors?.restingBP?.message}
            />
            <ErrorMessage message={errors?.restingBP?.message} />
          </div>

          <div>
            <InputField
              label="Cholesterol (100 - 600)"
              name="cholesterol"
              type="number"
              placeholder="200"
              register={register}
              errorMessage={errors?.cholesterol?.message}
            />
            <ErrorMessage message={errors?.cholesterol?.message} />
          </div>

          <div>
            <LabelMessage name="fastingBS" message="Fasting Blood Sugar" />
            <select
              className="w-full px-4 py-3 rounded focus:outline-none"
              {...register("fastingBS")}
              aria-invalid={errors.fastingBS ? "true" : "false"}
            >
              <option value="">Select Fasting Blood Sugar</option>
              <option value="1">FastingBS &gt; 120 mg/dl</option>
              <option value="0">FastingBS &lt;= 120 mg/dl</option>
            </select>
            <ErrorMessage message={errors?.fastingBS?.message} />
          </div>

          <div>
            <LabelMessage
              name="restingECG"
              message="Resting Electrocardiographic Results"
            />
            <select
              className="w-full px-4 py-3 rounded focus:outline-none"
              {...register("restingECG")}
              aria-invalid={errors.restingECG ? "true" : "false"}
            >
              <option value="">Select Resting ECG Result</option>
              <option value="1">Normal</option>
              <option value="0">LVH: Left Ventricular Hypertrophy</option>
              <option value="2">ST-T wave abnormality</option>
            </select>
            <ErrorMessage message={errors?.restingECG?.message} />
          </div>

          <div>
            <InputField
              label="Maximum Heart Rate Achieved (60 - 202)"
              name="maxHR"
              type="number"
              placeholder="200"
              register={register}
              errorMessage={errors?.maxHR?.message}
            />
            <ErrorMessage message={errors?.maxHR?.message} />
          </div>

          <div>
            <LabelMessage
              name="exerciseAngina"
              message="Exercise-Induced Angina"
            />
            <select
              className="w-full px-4 py-3 rounded focus:outline-none"
              {...register("exerciseAngina")}
              aria-invalid={errors.exerciseAngina ? "true" : "false"}
            >
              <option value="">Select Exercise Angina</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <ErrorMessage message={errors?.exerciseAngina?.message} />
          </div>

          <div>
            <InputField
              label="Oldpeak (0 - 6)"
              name="oldpeak"
              type="number"
              //   step="0.01"
              placeholder="2.1"
              register={register}
              errorMessage={errors?.oldpeak?.message}
            />
            <ErrorMessage message={errors?.oldpeak?.message} />
          </div>

          <div>
            <LabelMessage name="stSlope" message="ST Segment Slope" />
            <select
              className="w-full px-4 py-3 rounded focus:outline-none"
              {...register("stSlope")}
              aria-invalid={errors.stSlope ? "true" : "false"}
            >
              <option value="">Select ST Segment Slope</option>
              <option value="1">Flat</option>
              <option value="2">Upsloping</option>
              <option value="0">Downsloping</option>
            </select>
            <ErrorMessage message={errors?.stSlope?.message} />
          </div>

          <div className="flex justify-center">
            <button
              className="py-3 px-6 border-2 border-gray-600 bg-gray-600 text-white hover:bg-black duration-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;

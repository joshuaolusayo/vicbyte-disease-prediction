import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
  errorMessage?: string;
  label?: string;
  type?: string;
  name: string;
  placeholder: string;
};

const InputField = ({
  register,
  errorMessage,
  label,
  name,
  type = "text",
  placeholder,
}: Props) => {
  return (
    <>
      {label && <LabelMessage name={name} message={label} />}
      <input
        className="w-full px-4 py-3 rounded focus:outline-none"
        {...register(name)}
        aria-invalid={errorMessage ? "true" : "false"}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

type LabelProps = {
  name: string;
  message: string;
};

export const LabelMessage = ({ name, message }: LabelProps) => (
  <label htmlFor={name} className="inline-block mb-2 text-gray-600">
    {message}
  </label>
);

export default InputField;

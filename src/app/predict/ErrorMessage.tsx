type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  return message && <p className="text-sm text-red-500 mt-2">{message}</p>;
};

export default ErrorMessage;

import { InputHTMLAttributes } from "react";

const PercentageInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const handleOnKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");

    e.currentTarget.value = value;

    return e;
  };

  return <input {...props} onKeyUp={handleOnKeyUp} />;
};

export default PercentageInput;

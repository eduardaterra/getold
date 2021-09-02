import { useContext } from "react";
import FormValidationContext from "../contexts/FormValidationContext";

type Masks = {
  handleInputChange: (value: React.FormEvent<HTMLInputElement>) => void;
  monetaryInputMask: (value: React.FormEvent<HTMLInputElement>) => void;
  percentualInputMask: (value: React.FormEvent<HTMLInputElement>) => void;
};

const useMask = (): Masks => {
  const { values, setValues } = useContext(FormValidationContext);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const fieldname = event.currentTarget.getAttribute("name");
    const value = event.currentTarget.value;
    const newValue = {
      ...values,
      [fieldname as string]: Number(
        value.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1.$2")
      ),
    };

    setValues(newValue);
  };

  const monetaryInputMask = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

    e.currentTarget.value = value;

    return e;
  };

  const percentualInputMask = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");

    e.currentTarget.value = value;

    return e;
  };

  return { handleInputChange, monetaryInputMask, percentualInputMask };
};
export default useMask;

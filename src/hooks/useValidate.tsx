import { useContext } from "react";
import FormValidationContext, {
  ClientInfo,
} from "../contexts/FormValidationContext";

export type ErrorsListType = {
  currentAge?: string;
  savedMoney?: string;
  retirementAge?: string;
  monthlyExpenses?: string;
  profitPercentage?: string;
};

type ValidateType = {
  validate: (value: ClientInfo) => void;
};

const useValidate = (): ValidateType => {
  const { setErrorsList, setIsFormReady, setIsFormValid } = useContext(
    FormValidationContext
  );

  const validate = (value: ClientInfo) => {
    const errors: ErrorsListType = {};
    const savedMoney = value.savedMoney === undefined ? 0 : value.savedMoney;
    let isValid = true;
    if (
      value.currentAge <= 0 ||
      value.currentAge >= 100 ||
      value.currentAge === undefined
    ) {
      errors.currentAge = "error";
      isValid = false;
    }
    if (value.currentAge >= value.retirementAge) {
      errors.currentAge = "error";
      errors.retirementAge = "error";
      isValid = false;
    }
    if (value.retirementAge < 0 || value.retirementAge === undefined) {
      errors.retirementAge = "error";
      isValid = false;
    }
    if (savedMoney < 0) {
      errors.savedMoney = "error";
      isValid = false;
    }
    if (value.monthlyExpenses <= 0 || value.monthlyExpenses === undefined) {
      errors.monthlyExpenses = "error";
      isValid = false;
    }
    if (
      value.profitPercentage > 100 ||
      value.profitPercentage <= 0 ||
      value.profitPercentage === undefined
    ) {
      errors.profitPercentage = "error";
      isValid = false;
    }

    setErrorsList(errors);
    setIsFormValid(isValid);
    setIsFormReady(isValid);
  };

  return { validate };
};

export default useValidate;

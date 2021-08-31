import React, { useState } from "react";
import { createContext } from "react";
import { ClientInfo } from "../hooks/useRetirementCalculator";

type validation = {
  handleChange: (value: React.FormEvent<HTMLInputElement>) => void;
  values: ClientInfo;
  setValues: (value: ClientInfo) => void;

  errorsList: errorsListType;
  validate: (value: ClientInfo) => void;
  isFormValid: boolean;
  isFormReady: boolean;
};

type errorsListType = {
  currentAge?: string;
  savedMoney?: string;
  retirementAge?: string;
  monthlyExpenses?: string;
  profitPercentage?: string;
};

const FormValidationContext = createContext({} as validation);

export const FormValidationProvider: React.FC = ({ children }) => {
  const [values, setValues] = useState({} as ClientInfo);
  const [errorsList, setErrorsList] = useState({} as errorsListType);
  const [isFormValid, setIsFormValid] = useState(true);
  let [isFormReady, setIsFormReady] = useState(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
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

  const validate = (value: ClientInfo) => {
    const errors: errorsListType = {};
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

  return (
    <FormValidationContext.Provider
      value={{
        handleChange,
        values,
        setValues,
        errorsList,
        validate,
        isFormValid,
        isFormReady,
      }}
    >
      {children}
    </FormValidationContext.Provider>
  );
};

export default FormValidationContext;

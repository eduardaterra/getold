import React, { useState } from "react";
import { ClientInfo } from "../services/retirementCalculator";

type validation = {
  handleChange: (value: React.FormEvent<HTMLInputElement>) => void;
  values: ClientInfo;
  errorsList: errorsListType;
  validate: (value: ClientInfo) => void;
  formIsValid: boolean;
};

type errorsListType = {
  currentAge?: string;
  savedMoney?: string;
  retirementAge?: string;
  monthlyExpenses?: string;
  profitPercentage?: string;
  contribution?: string;
};

const useFormValidation = (): validation => {
  const [values, setValues] = useState({} as ClientInfo);
  const [errorsList, setErrorsList] = useState({} as errorsListType);
  const [formIsValid, setFormIsValid] = useState(true);

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
    if (value.savedMoney < 0) {
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
    if (value.contribution < 0) {
      errors.contribution = "error";
      isValid = false;
    }

    setErrorsList(errors);
    setFormIsValid(isValid);
  };

  return { handleChange, values, errorsList, validate, formIsValid };
};

export default useFormValidation;

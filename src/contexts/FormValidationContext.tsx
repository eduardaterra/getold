import React, { useState, createContext } from "react";
import { ErrorsListType } from "../hooks/useValidate";

export type ClientInfo = {
  currentAge: number;
  retirementAge: number;
  monthlyExpenses: number;
  profitPercentage: number;
  savedMoney: number | undefined;
};

type validation = {
  values: ClientInfo;
  setValues: (value: ClientInfo) => void;
  errorsList: ErrorsListType;
  setErrorsList: (value: ErrorsListType) => void;
  isFormValid: boolean;
  setIsFormValid: (value: boolean) => void;
  isFormReady: boolean;
  setIsFormReady: (value: boolean) => void;
};

const FormValidationContext = createContext({} as validation);

export const FormValidationProvider: React.FC = ({ children }) => {
  const [values, setValues] = useState({} as ClientInfo);
  const [errorsList, setErrorsList] = useState({} as ErrorsListType);
  const [isFormValid, setIsFormValid] = useState(true);
  const [isFormReady, setIsFormReady] = useState(false);

  return (
    <FormValidationContext.Provider
      value={{
        values,
        setValues,
        errorsList,
        setErrorsList,
        isFormValid,
        setIsFormValid,
        isFormReady,
        setIsFormReady,
      }}
    >
      {children}
    </FormValidationContext.Provider>
  );
};

export default FormValidationContext;

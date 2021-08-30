import { useState, createContext } from "react";

type ClientInfo = {
  currentAge: number;
  savedMoney: number;
  retirementAge: number;
  monthlyExpenses: number;
  profitPercentage: number;
  contribution: number;
};

type RetirementInfo = {
  retirement: ClientInfo;
  setRetirement: (value: ClientInfo) => void;
};

const RetirementContext = createContext({} as RetirementInfo);

export const RetirementProvider: React.FC = ({ children }) => {
  const [retirement, setRetirement] = useState<ClientInfo>({
    currentAge: 0,
    savedMoney: 0,
    retirementAge: 0,
    monthlyExpenses: 0,
    profitPercentage: 0,
    contribution: 0,
  });

  return (
    <RetirementContext.Provider
      value={{
        retirement,
        setRetirement,
      }}
    >
      {children}
    </RetirementContext.Provider>
  );
};

export default RetirementContext;

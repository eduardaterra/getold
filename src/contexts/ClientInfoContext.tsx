import { useState } from "react";
import { createContext } from "react";

export type ClientInfo = {
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

const ClientInfoContext = createContext({} as RetirementInfo);

export const ClientInfoProvider: React.FC = ({ children }) => {
  const [retirement, setRetirement] = useState<ClientInfo>({
    currentAge: 0,
    savedMoney: 0,
    retirementAge: 0,
    monthlyExpenses: 0,
    profitPercentage: 0,
    contribution: 0,
  });

  return (
    <ClientInfoContext.Provider value={{ retirement, setRetirement }}>
      {children}
    </ClientInfoContext.Provider>
  );
};

export default ClientInfoContext;

import { ClientInfo } from "../contexts/FormValidationContext";

type SavedMoneyDurationType = {
  year: number;
  month: number;
  monthExceeded: number;
};

type CalculatedRetirement = {
  savedMoneyDuration: SavedMoneyDurationType;
  savedMoneyNeeded: number;
  monthlySavedMoneyNeeded: number;
  timeUntilRetirement: number;
  savedMoneyMonthlyProfit: number;
};

const useRetirementCalculator = ({
  ...values
}: ClientInfo): CalculatedRetirement => {
  const {
    currentAge,
    savedMoney,
    retirementAge,
    monthlyExpenses,
    profitPercentage,
  } = values;

  const newSavedMoney = savedMoney === undefined ? 0 : savedMoney;

  const monthlyProfitPercentage =
    Math.pow(1 + profitPercentage / 100, 1 / 12) - 1;

  const savedMoneyNeeded = Math.round(
    monthlyExpenses / Number(monthlyProfitPercentage.toFixed(4))
  );

  const savedMoneyDurationCalculator = (
    savedMoney: number,
    monthlyExpenses: number,
    monthlyProfit: number
  ) => {
    let money = savedMoney;
    let countMonth = 0;

    while (money >= 0) {
      money -= monthlyExpenses + money * monthlyProfit;
      countMonth++;
    }

    const monthCalculation = countMonth;
    const yearCalculation = Math.floor(monthCalculation / 12);
    const monthExceededCalculation = monthCalculation - yearCalculation * 12;

    return {
      year: yearCalculation,
      month: monthCalculation,
      monthExceeded: monthExceededCalculation,
    };
  };
  const savedMoneyDuration = savedMoneyDurationCalculator(
    newSavedMoney,
    monthlyExpenses,
    monthlyProfitPercentage
  );

  const savedMoneyMonthlyProfit = newSavedMoney * monthlyProfitPercentage;

  const timeUntilRetirement = retirementAge - currentAge;

  const monthlySavedMoneyNeeded = Math.round(
    ((savedMoneyNeeded - newSavedMoney) /
      ((1 + monthlyProfitPercentage) * timeUntilRetirement) -
      newSavedMoney / ((1 + monthlyProfitPercentage) * timeUntilRetirement)) /
      12
  );

  return {
    savedMoneyDuration,
    savedMoneyNeeded,
    monthlySavedMoneyNeeded,
    timeUntilRetirement,
    savedMoneyMonthlyProfit,
  };
};

export default useRetirementCalculator;

export type ClientInfo = {
  currentAge: number;
  retirementAge: number;
  monthlyExpenses: number;
  profitPercentage: number;
  savedMoney: number | undefined;
};

type CalculatedRetirement = {
  savedMoneyDuration: SavedMoneyDurationType;
  savedMoneyNeeded: number;
  monthlySavedMoneyNeeded: number;
  timeUntilRetirement: number;
};

type SavedMoneyDurationType = {
  year: number;
  month: number;
  monthExceeded: number;
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
    monthlyExpenses / Number(monthlyProfitPercentage.toFixed(3))
  );

  const savedMoneyDurationCalculator = (
    savedMoney: number,
    monthlyExpenses: number
  ) => {
    const months = Math.floor(savedMoney / monthlyExpenses);
    const years = Math.floor(months / 12);
    const monthsExceeded = months - years * 12;

    return {
      year: years,
      month: months,
      monthExceeded: monthsExceeded,
    };
  };

  const savedMoneyDuration = savedMoneyDurationCalculator(
    newSavedMoney,
    monthlyExpenses
  );

  const timeUntilRetirement = retirementAge - currentAge;

  const monthlySavedMoneyNeeded = Math.round(
    (savedMoneyNeeded / ((1 + monthlyProfitPercentage) * timeUntilRetirement) -
      newSavedMoney / ((1 + monthlyProfitPercentage) * timeUntilRetirement)) /
      12
  );

  return {
    savedMoneyDuration,
    savedMoneyNeeded,
    monthlySavedMoneyNeeded,
    timeUntilRetirement,
  };
};

export default useRetirementCalculator;

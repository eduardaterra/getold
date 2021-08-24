export type ClientInfo = {
  currentAge: number;
  savedMoney: number;
  retirementAge: number;
  monthlyExpenses: number;
  profitPercentage: number;
  contribution: number;
};

type CalculatedRetirement = {
  currentSavedMoneyDuration: string | null;
  savedMoneyNeeded: number;
  monthsSavingMoneyNeeded: number;
  timeUntilRetirement: number;
};

const retirementCalculator = ({
  currentAge,
  retirementAge,
  savedMoney,
  monthlyExpenses,
  profitPercentage,
  contribution,
}: ClientInfo): CalculatedRetirement => {
  const monthlyProfitPercentage =
    Math.pow(1 + profitPercentage / 100, 1 / 12) - 1;
  const savedMoneyNeeded =
    monthlyExpenses / Number(monthlyProfitPercentage.toFixed(3));

  let monthsSavingMoneyNeeded = 0;
  while (savedMoney < savedMoneyNeeded) {
    monthsSavingMoneyNeeded++;
    savedMoney +=
      contribution +
      (savedMoney * Number(monthlyProfitPercentage.toFixed(3))) / 100;
  }

  const savedMoneyDurationCalculator = (
    savedMoney: number,
    monthlyExpenses: number
  ) => {
    const months = Math.floor(savedMoney / monthlyExpenses);
    const years = Math.floor(months / 12);
    const monthsExceeded = years % 12;

    return monthlyExpenses > savedMoney
      ? null
      : years > 0
      ? monthsExceeded > 0
        ? `Se você aposentar com a quantia que tem atualmente, conseguirá se manter por ${years} anos e ${
            monthsExceeded > 1
              ? monthsExceeded + " meses"
              : monthsExceeded + " mês"
          }.`
        : `Se você aposentar com a quantia que tem atualmente, conseguirá se manter por ${years} anos.`
      : `Se você aposentar com a quantia que tem atualmente, conseguirá se manter por ${
          months > 1 ? months + " meses" : months + " mês"
        }.`;
  };

  const currentSavedMoneyDuration = savedMoneyDurationCalculator(
    savedMoney,
    monthlyExpenses
  );

  const timeUntilRetirement = retirementAge - currentAge;

  return {
    currentSavedMoneyDuration,
    savedMoneyNeeded,
    monthsSavingMoneyNeeded,
    timeUntilRetirement,
  };
};

export default retirementCalculator;

import { useContext } from "react";
import FormValidationContext from "../../contexts/FormValidationContext";
import useRetirementCalculator from "../../hooks/useRetirementCalculator";
import Calendar from "../../assets/calendar.svg";

const SavedMoneyDuration: React.FC = () => {
  let duration;

  const { values } = useContext(FormValidationContext);

  const { savedMoneyDuration } = useRetirementCalculator({ ...values });

  const { year, month, monthExceeded } = savedMoneyDuration;

  if (year > 1 && monthExceeded > 1) {
    duration = `${year} anos e ${monthExceeded} meses`;
  }
  if (year === 1 && monthExceeded === 1) {
    duration = `${year} ano e ${monthExceeded} mês`;
  }
  if (year > 1 && monthExceeded === 1) {
    duration = `${year} anos e ${monthExceeded} mês`;
  }
  if (year === 1 && monthExceeded > 1) {
    duration = `${year} ano e ${monthExceeded} meses`;
  }
  if (year > 1 && monthExceeded === 0) {
    duration = `${year} anos`;
  }
  if (year === 1 && monthExceeded === 0) {
    duration = `${year} ano`;
  }
  if (year === 0 && month > 1) {
    duration = `${month} meses`;
  }
  if (year === 0 && month === 1) {
    duration = `${month} mês`;
  }

  return (
    <>
      <img src={Calendar} alt="calendário" />
      <p>
        Se você aposentar com a quantia que tem atualmente, conseguirá se manter
        por <strong>{duration}</strong>.
      </p>
      {duration}
    </>
  );
};

export default SavedMoneyDuration;

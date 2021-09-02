import { useContext } from "react";
import styled from "styled-components";
import FormValidationContext from "../../contexts/FormValidationContext";
import useMask from "../../hooks/useMask";
import FieldsetContainer from "./FieldsetContainer";

const RetirementInfoSection = () => {
  const { handleInputChange, monetaryInputMask, percentualInputMask } =
    useMask();

  const { errorsList } = useContext(FormValidationContext);

  return (
    <SectionContainer>
      <h3>Aposentadoria</h3>
      <FieldsetContainer>
        <div>
          <fieldset>
            <label>* idade para aposentar :</label>
            <input
              required
              type="number"
              min="0"
              max="100"
              onChange={handleInputChange}
              name="retirementAge"
              className={errorsList.retirementAge}
            />
          </fieldset>
          <fieldset>
            <label>* gastos mensais desejados :</label>
            <label>R$</label>
            <input
              required
              onChange={handleInputChange}
              name="monthlyExpenses"
              className={errorsList.monthlyExpenses}
              onKeyUp={monetaryInputMask}
            />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <label>* rentabilidade anual estimada :</label>
            <input
              required
              type="number"
              min="0"
              max="100"
              step="0.01"
              onChange={handleInputChange}
              name="profitPercentage"
              className={errorsList.profitPercentage}
              onKeyUp={percentualInputMask}
            />
            <label>%</label>
          </fieldset>
        </div>
      </FieldsetContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  > h3 {
    font: bold italic 1.3rem "Ubuntu", sans-serif;
    color: var(--purple);
    @media (max-width: 758px) {
      font-size: 1rem;
    }
  }
`;

export default RetirementInfoSection;

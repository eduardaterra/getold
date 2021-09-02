import { useContext } from "react";
import styled from "styled-components";
import FormValidationContext from "../../contexts/FormValidationContext";
import useMask from "../../hooks/useMask";
import FieldsetContainer from "./FieldsetContainer";

const CurrentInfoSection: React.FC = () => {
  const { handleInputChange, monetaryInputMask } = useMask();
  const { errorsList } = useContext(FormValidationContext);

  return (
    <SectionContainer>
      <h3>Suas Informações</h3>
      <FieldsetContainer>
        <div>
          <fieldset>
            <label>* idade atual :</label>
            <input
              required
              type="number"
              min="0"
              max="100"
              onChange={handleInputChange}
              name="currentAge"
              className={errorsList.currentAge}
            />
          </fieldset>

          <fieldset>
            <label>valor guardado:</label>
            <label>R$</label>
            <input
              onChange={handleInputChange}
              name="savedMoney"
              className={errorsList.savedMoney}
              onKeyUp={monetaryInputMask}
            />
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

export default CurrentInfoSection;

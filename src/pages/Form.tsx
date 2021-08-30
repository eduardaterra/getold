import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/header/Header";
import MonetaryInput from "../components/form/MonetaryInput";
import PercentageInput from "../components/form/PercentageInput";

import FormValidationContext from "../contexts/FormValidationContext";
import HeaderContext from "../contexts/HeaderContext";

const Form = () => {
  const {
    handleChange,
    errorsList,
    values,
    validate,
    isFormValid,
    isFormReady,
  } = useContext(FormValidationContext);

  const { setShowModal, setSlide, display, setDisplay } =
    useContext(HeaderContext);

  const history = useHistory();

  useEffect(() => {
    setDisplay(false);
  }, []);

  return (
    <>
      <Header
        setShowModal={setShowModal}
        setSlide={setSlide}
        display={display}
      />

      <FormContainer>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            history.push(isFormReady ? "/result" : "/form");
          }}
        >
          <InfoForm>
            <h3>Suas Informações</h3>
            <InputContainer>
              <div>
                <fieldset>
                  <label>* idade atual :</label>
                  <input
                    required
                    type="number"
                    min="0"
                    max="100"
                    onChange={handleChange}
                    name="currentAge"
                    className={errorsList.currentAge}
                  />
                </fieldset>

                <fieldset>
                  <label>valor guardado:</label>
                  <label>R$</label>
                  <MonetaryInput
                    onChange={handleChange}
                    name="savedMoney"
                    className={errorsList.savedMoney}
                  />
                </fieldset>

                <fieldset>
                  <label>aportes mensais:</label>
                  <label>R$</label>
                  <MonetaryInput
                    onChange={handleChange}
                    name="contribution"
                    className={errorsList.contribution}
                  />
                </fieldset>
              </div>
            </InputContainer>
          </InfoForm>
          <InfoForm>
            <h3>Aposentadoria</h3>
            <InputContainer>
              <div>
                <fieldset>
                  <label>* idade para aposentar :</label>
                  <input
                    required
                    type="number"
                    min="0"
                    max="100"
                    onChange={handleChange}
                    name="retirementAge"
                    className={errorsList.retirementAge}
                  />
                </fieldset>
                <fieldset>
                  <label>* gastos mensais desejados :</label>
                  <label>R$</label>
                  <MonetaryInput
                    required
                    onChange={handleChange}
                    name="monthlyExpenses"
                    className={errorsList.monthlyExpenses}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <label>* rentabilidade anual estimada :</label>
                  <PercentageInput
                    required
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    onChange={handleChange}
                    name="profitPercentage"
                    className={errorsList.profitPercentage}
                  />
                  <label>%</label>
                </fieldset>
              </div>
            </InputContainer>
          </InfoForm>
          <span>* valores obrigatórios</span>
          {isFormValid ? null : (
            <ErrorH3>
              Por favor, insira dados válidos nos espaços obrigatórios.
            </ErrorH3>
          )}
          <SendButton
            type="submit"
            value="Submit"
            onClick={() => {
              validate(values);
            }}
          >
            Enviar
          </SendButton>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    background: var(--light-gray);
    max-width: 100vw;
    min-height: 90.3vh;

    > span {
      font: 500 0.7rem "Ubuntu", sans-serif;
    }
    @media (max-width: 1024px) {
      margin-top: -5rem;
      min-height: 100vh;
    }
    @media (max-width: 540px) {
      margin-top: 0;
      padding: 2rem 0;
    }
  }
`;

const InfoForm = styled.div`
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: var(--purple);
  border-radius: 2rem;
  width: 70rem;
  height: 100%;
  gap: 3rem;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    > fieldset {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      > label {
        font: 500 1.2rem "Ubuntu", sans-serif;
      }
      > input {
        border-radius: 3rem;
        height: 2rem;
        border: none;
        padding: 0.1rem;
        font: 500 1rem "Ubuntu", sans-serif;
        text-align: center;
        &::placeholder {
          color: var(--light-gray);
          font: 500 0.3rem "Ubuntu", sans-serif;
        }
        &.error {
          border: 2px solid #ff0000;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    width: 40rem;
    > div {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-width: 758px) {
    padding: 1rem;
    width: 30rem;
    > div {
      > fieldset {
        display: flex;
        align-items: center;
        > label {
          font: 500 0.8rem "Ubuntu", sans-serif;
          display: flex;
          align-items: center;
        }
        > input {
          font-size: 0.8rem;
          height: 2rem;
        }
      }
    }
  }
  @media (max-width: 500px) {
    width: 20rem;
  }
  @media (max-width: 340px) {
    width: 16rem;

    > div {
      > fieldset {
        > input {
          max-width: 7.5rem;
        }
      }
    }
  }
`;

const ErrorH3 = styled.h3`
  font: bold italic 0.8rem "Ubuntu", sans-serif;
  color: #ff0000;
`;

const SendButton = styled.button`
  background: var(--purple);
  border: none;
  border-radius: 3rem;
  color: white;
  font: bold italic 1.4rem "Ubuntu", sans-serif;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background: white;
    color: var(--purple);
    border: 1px solid var(--purple);
  }
  @media (max-width: 1024px) {
  }
`;

export default Form;

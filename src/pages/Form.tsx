import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CurrentInfoSection from "../components/form/CurrentInfoSection";
import RetirementInfoSection from "../components/form/RetirementInfoSection";

import Header from "../components/header/Header";

import FormValidationContext from "../contexts/FormValidationContext";
import HeaderContext from "../contexts/HeaderContext";
import useValidate from "../hooks/useValidate";

const Form = () => {
  const { values, isFormValid, isFormReady } = useContext(
    FormValidationContext
  );
  const { validate } = useValidate();

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
          onSubmit={(e) => {
            e.preventDefault();
            history.push(isFormReady ? "/result" : "/form");
          }}
        >
          <CurrentInfoSection />
          <RetirementInfoSection />
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

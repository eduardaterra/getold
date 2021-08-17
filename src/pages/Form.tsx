import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import MenuModal from "../components/MenuModal";
import MonetaryInput from "../components/MonetaryInput";

import HeaderContext from "../contexts/HeaderContext";

const Form = () => {
  const { showModal, setShowModal, slide, setSlide, display, setDisplay } =
    useContext(HeaderContext);

  useEffect(() => {
    setDisplay(false);
  }, []);

  return (
    <>
      <MenuModal
        showModal={showModal}
        setShowModal={setShowModal}
        slide={slide}
        setSlide={setSlide}
      />
      <Header
        setShowModal={setShowModal}
        setSlide={setSlide}
        display={display}
      />
      <form>
        <FormContainer>
          <InfoForm>
            <h3>Suas Informações</h3>
            <InputContainer>
              <div>
                <div>
                  <label>idade atual:</label>
                  <input type="number" min="0" max="100" />
                </div>

                <div>
                  <label>valor guardado:</label>
                  <label>R$</label>
                  <MonetaryInput />
                </div>
              </div>
            </InputContainer>
          </InfoForm>
          <InfoForm>
            <h3>Aposentadoria</h3>
            <InputContainer>
              <div>
                <div>
                  <label>idade para aposentar:</label>
                  <input type="number" min="0" max="100" />
                </div>
                <div>
                  <label>gastos mensais desejados:</label>
                  <label>R$</label>
                  <MonetaryInput />
                </div>
              </div>
              <div>
                <div>
                  <label>percentual de rentabilidade anual estimada:</label>
                  <input type="number" min="0" max="100" step="0.1" />
                  <label>%</label>
                </div>
              </div>
            </InputContainer>
          </InfoForm>
          <SendButton>Enviar</SendButton>
        </FormContainer>
      </form>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background: var(--light-gray);
  max-width: 100vw;
  min-height: 90.3vh;
`;

const InfoForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  > h3 {
    font: bold italic 1.3rem "Ubuntu", sans-serif;
    color: var(--purple);
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
    > div {
      display: flex;
      gap: 1rem;
      > label {
        font: 500 1.2rem "Ubuntu", sans-serif;
      }
      > input {
        border-radius: 3rem;
        border: none;
        padding: 0.1rem;
        font: 500 1rem "Ubuntu", sans-serif;
        text-align: center;
        &::placeholder {
          color: var(--light-gray);
          font: 500 0.3rem "Ubuntu", sans-serif;
        }
      }
    }
  }
`;

const SendButton = styled.button`
  background: var(--purple);
  border: none;
  border-radius: 3rem;
  margin-left: 62rem;
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
`;

export default Form;

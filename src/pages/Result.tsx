import { useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import ResultScreen from "../components/result/ResultScreen";
import UnsentFormResult from "../components/result/UnsentFormResult";
import FormValidationContext from "../contexts/FormValidationContext";
import HeaderContext from "../contexts/HeaderContext";

const Result: React.FC = () => {
  const { setShowModal, setSlide, display, setDisplay } =
    useContext(HeaderContext);

  const { isFormReady } = useContext(FormValidationContext);

  useEffect(() => {
    setDisplay(false);
  }, []);

  return (
    <>
      <Header
        setShowModal={setShowModal}
        setSlide={setSlide}
        display={display}
      ></Header>
      <ResultContainer>
        {isFormReady ? <ResultScreen /> : <UnsentFormResult />}
      </ResultContainer>
    </>
  );
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  max-width: 100vw;
  min-height: 90.3vh;
  background-color: black;

  @media (max-width: 1024px) {
    min-height: 94.3vh;
  }
  @media (max-width: 930px) {
    gap: 5rem;
  }
`;

export default Result;

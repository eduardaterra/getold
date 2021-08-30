import { useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
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
        {isFormReady ? <h1>form is ready</h1> : <UnsentFormResult />}
      </ResultContainer>
    </>
  );
};

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  min-height: 90.3vh;
  background-color: black;
`;
export default Result;

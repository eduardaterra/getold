import { useEffect, useContext } from "react";
import Header from "../components/Header";
import FormValidationContext from "../contexts/FormValidationContext";
import HeaderContext from "../contexts/HeaderContext";

const Result: React.FC = () => {
  const { setShowModal, setSlide, display, setDisplay } =
    useContext(HeaderContext);

  const { isFormReady } = useContext(FormValidationContext);

  useEffect(() => {
    setDisplay(false);
    console.log(isFormReady);
  }, []);

  return (
    <>
      <Header
        setShowModal={setShowModal}
        setSlide={setSlide}
        display={display}
      ></Header>

      {isFormReady ? <h1>form is ready</h1> : <h1>form is not ready</h1>}
    </>
  );
};

export default Result;

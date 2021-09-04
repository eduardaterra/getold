import { useEffect, useContext } from "react";
import { Element } from "react-scroll";

import Header from "../components/header/Header";
import MenuModal from "../components/header/MenuModal";
import InitialSection from "../components/home-sections/InitialSection";
import AboutSection from "../components/home-sections/AboutSection";
import InstructionsSection from "../components/home-sections/InstructionsSection";

import HeaderContext from "../contexts/HeaderContext";

const Home = () => {
  const { showModal, setShowModal, slide, setSlide, display, setDisplay } =
    useContext(HeaderContext);

  useEffect(() => {
    setDisplay(true);
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
      <Element name="inicio" className="element">
        <InitialSection />
      </Element>
      <Element name="sobre" className="element">
        <AboutSection />
      </Element>
      <Element name="como-utilizar" className="element">
        <InstructionsSection />
      </Element>
    </>
  );
};

export default Home;

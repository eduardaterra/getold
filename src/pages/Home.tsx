import { useState } from "react";
import { Element } from "react-scroll";
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import InitialSection from "../components/InitialSection";
import InstructionsSection from "../components/InstructionsSection";
import MenuModal from "../components/MenuModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [slide, setSlide] = useState("slide-in");

  return (
    <>
      <MenuModal
        showModal={showModal}
        setShowModal={setShowModal}
        slide={slide}
        setSlide={setSlide}
      />
      <Header setShowModal={setShowModal} setSlide={setSlide} />
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

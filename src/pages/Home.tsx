import { useState } from "react";
import Header from "../components/Header";
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
    </>
  );
};

export default Home;

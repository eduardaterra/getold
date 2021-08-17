import { createContext, useState } from "react";

type ContextTypes = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  slide: string;
  setSlide: (value: string) => void;
  display: boolean;
  setDisplay: (value: boolean) => void;
};

const HeaderContext = createContext<ContextTypes>({
  showModal: false,
  setShowModal: () => {},
  slide: "",
  setSlide: () => {},
  display: true,
  setDisplay: () => {},
});

export const HeaderProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [slide, setSlide] = useState("slide-in");
  const [display, setDisplay] = useState(true);

  return (
    <HeaderContext.Provider
      value={{ showModal, setShowModal, slide, setSlide, display, setDisplay }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderContext;

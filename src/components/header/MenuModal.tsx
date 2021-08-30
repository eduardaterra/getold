import { useHistory } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

type propsType = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  slide: string;
  setSlide: (value: string) => void;
};

const MenuModal = (props: propsType) => {
  const { showModal, setShowModal, slide, setSlide } = props;
  const history = useHistory();

  return showModal ? (
    <>
      <MenuContainer slide={slide}>
        <CloseButton
          onClick={() => {
            setSlide("slide-out");
            setTimeout(() => {
              setShowModal(false);
            }, 300);
          }}
        >
          X
        </CloseButton>
        <LinksContainer>
          <ScrollLink
            to="inicio"
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={() => {
              setSlide("slide-out");
              setTimeout(() => {
                setShowModal(false);
              }, 300);
            }}
          >
            início
          </ScrollLink>
          <ScrollLink
            to="sobre"
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={() => {
              setSlide("slide-out");
              setTimeout(() => {
                setShowModal(false);
              }, 300);
            }}
          >
            sobre
          </ScrollLink>
          <ScrollLink
            to="como-utilizar"
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={() => {
              setSlide("slide-out");
              setTimeout(() => {
                setShowModal(false);
              }, 300);
            }}
          >
            como utilizar
          </ScrollLink>
        </LinksContainer>
        <Button
          onClick={() => {
            history.push("/form");
            setSlide("slide-out");
            setTimeout(() => {
              setShowModal(false);
            }, 300);
          }}
        >
          simulador
        </Button>
      </MenuContainer>
    </>
  ) : null;
};

const MenuContainer = styled.div<Pick<propsType, "slide">>`
  background: black;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  z-index: 20;
  min-height: 100vh;
  min-width: 100vw;
  left: 0;
  animation: ${({ slide }) => slide} 0.3s ease-out;

  @keyframes slide-in {
    0% {
      top: -100%;
      opacity: 100%;
    }
    100% {
      top: 0%;
      opacity: 0%;
    }
  }

  @keyframes slide-out {
    0% {
      top: 0%;
      opacity: 0%;
    }
    100% {
      top: -100%;
      opacity: 100%;
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  font: 500 2rem "Ubuntu", sans-serif;
  border: none;
  cursor: pointer;
  color: white;
  display: flex;
  position: absolute;
  transform: translate(40vw, -45vh);

  :hover {
    color: var(--purple);
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font: 500 1.4rem "Ubuntu", sans-serif;
    text-decoration: none;
    cursor: pointer;
    :hover,
    &.active {
      color: var(--purple);
    }
  }
`;

const Button = styled.div`
  background: var(--purple);
  border: none;
  border-radius: 3rem;
  color: black;
  font: 500 1.4rem "Ubuntu", sans-serif;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  :hover {
    background: white;
    color: var(--purple);
  }
`;

export default MenuModal;

import { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link as ScrollLink, animateScroll } from "react-scroll";

import Menu from "../../assets/menu.svg";

import FormValidationContext from "../../contexts/FormValidationContext";
import { ClientInfo } from "../../contexts/FormValidationContext";

type propsType = {
  setShowModal: (value: boolean) => void;
  setSlide: (value: string) => void;
  display: boolean;
};

const Header = ({ setShowModal, setSlide, display }: propsType) => {
  const { setValues } = useContext(FormValidationContext);
  const history = useHistory();

  return (
    <>
      <HeaderContainer display={display}>
        <ScrollLink
          activeClass="active"
          to="/"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onClick={() => {
            animateScroll.scrollToTop();
            history.push("/");
            setValues({} as ClientInfo);
          }}
        >
          get<strong>old</strong>
        </ScrollLink>
        <MobileMenuIcon
          src={Menu}
          display={display}
          onClick={() => {
            setShowModal(true);
            setSlide("slide-in");
          }}
        />

        <MenuContainer display={display}>
          <ScrollLink
            to="inicio"
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
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
          >
            como utilizar
          </ScrollLink>
        </MenuContainer>
        <Button
          display={display}
          onClick={() => {
            history.push("/form");
          }}
        >
          simulador
        </Button>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div<Pick<propsType, "display">>`
  background: black;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: ${({ display }) =>
    display === true ? "space-between" : "center"};
  height: 5rem;
  width: 100%;
  z-index: 1;

  padding: 0 2rem;
  > a {
    font: bold italic 2.5rem "Ubuntu", sans-serif;
    text-decoration: none;
    cursor: pointer;
    color: white;

    > strong {
      color: var(--purple);
    }
  }
  @media (max-width: 1024px) {
    gap: 4rem;
  }
  @media (max-width: 700px) {
    > a {
      font-size: 2.2rem;
    }
  }
`;
const MobileMenuIcon = styled.img<Pick<propsType, "display">>`
  display: none;
  width: 1.8rem;
  @media (max-width: 758px) {
    display: ${({ display }) => (display ? "block" : "none")};
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
  }
`;

const MenuContainer = styled.ul<Pick<propsType, "display">>`
  display: ${({ display }) => (display ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 2rem;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font: 500 1.5rem "Ubuntu", sans-serif;
    text-decoration: none;
    cursor: pointer;
    height: 5rem;
    transition: all 0.1s ease-in-out;
    :hover,
    &.active {
      border-bottom: 3px solid var(--purple);
    }
  }
  @media (max-width: 1024px) {
    > a {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 758px) {
    display: none;
  }
`;
const Button = styled.button<Pick<propsType, "display">>`
  display: ${({ display }) => (display ? "inline" : "none")};
  background: var(--purple);
  border: none;
  border-radius: 3rem;
  color: black;
  font: 500 1.4rem "Ubuntu", sans-serif;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background: white;
    color: var(--purple);
    border: 1px solid var(--purple);
  }
  @media (max-width: 758px) {
    display: none;
  }
`;

export default Header;

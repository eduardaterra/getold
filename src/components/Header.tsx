import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import Menu from "../assets/menu.svg";

type propsType = {
  setShowModal: (value: boolean) => void;
  setSlide: (value: string) => void;
};

const Header = (props: propsType) => {
  const { setShowModal, setSlide } = props;
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          get<strong>old</strong>
        </Link>
        <MobileMenuIcon
          src={Menu}
          onClick={() => {
            setShowModal(true);
            setSlide("slide-in");
          }}
        />
        <MobileMenu>
          <ScrollLink to="inicio">início</ScrollLink>
          <ScrollLink to="sobre">sobre</ScrollLink>
          <ScrollLink to="como-utilizar">como utilizar</ScrollLink>
        </MobileMenu>
        <Button>simulador</Button>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  background: var(--black);
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  z-index: 1;
  padding: 0 2rem;
  > a {
    font: bold italic 2.5rem "Ubuntu", sans-serif;
    text-decoration: none;
    cursor: pointer;

    color: var(--white);
    > strong {
      color: var(--purple);
    }
  }
  @media (max-width: 700px) {
    height: 4.5rem;
    > a {
      font-size: 2.2rem;
    }
  }
`;
const MobileMenuIcon = styled.img`
  display: none;
  width: 1.8rem;
  @media (max-width: 700px) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 2rem;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font: 500 1.4rem "Ubuntu", sans-serif;
    text-decoration: none;
    cursor: pointer;
    height: 5rem;
    :hover,
    &.active {
      border-bottom: 3px solid var(--purple);
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
const Button = styled.button`
  background: var(--purple);
  border: none;
  border-radius: 3rem;
  color: var(--black);
  font: 500 1.4rem "Ubuntu", sans-serif;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  :hover {
    background: var(--white);
    color: var(--purple);
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export default Header;

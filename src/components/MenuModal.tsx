import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

const MenuModal = () => {
  return (
    <>
      <MenuContainer>
        <CloseButton>X</CloseButton>
        <LinksContainer>
          <ScrollLink to="inicio">início</ScrollLink>
          <ScrollLink to="sobre">sobre</ScrollLink>
          <ScrollLink to="como-utilizar">como utilizar</ScrollLink>
        </LinksContainer>
        <Button>simulador</Button>
      </MenuContainer>
    </>
  );
};

const MenuContainer = styled.div`
  background: var(--black);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  z-index: 20;
  min-height: 100vh;
  min-width: 100vw;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  background: transparent;
  font: 500 2rem "Ubuntu", sans-serif;
  border: none;
  cursor: pointer;
  color: var(--white);
  display: flex;
  position: absolute;
  transform: translate(8rem, -16rem);

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
    color: var(--white);
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
  color: var(--black);
  font: 500 1.4rem "Ubuntu", sans-serif;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  :hover {
    background: var(--white);
    color: var(--purple);
  }
`;

export default MenuModal;

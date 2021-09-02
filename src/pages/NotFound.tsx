import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error404 from "../assets/error404.svg";
import Header from "../components/header/Header";
import HeaderContext from "../contexts/HeaderContext";

const NotFound: React.FC = () => {
  const { setShowModal, setSlide, display, setDisplay } =
    useContext(HeaderContext);

  useEffect(() => {
    setDisplay(false);
  }, []);
  return (
    <>
      <Header
        setShowModal={setShowModal}
        setSlide={setSlide}
        display={display}
      />
      <Container>
        <img src={Error404} alt="página não encontrada" />
        <p>
          <strong>Erro 404:</strong> Página não encontrada!
          <br />
          <Link to="/">retornar para home</Link>
        </p>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  min-height: 90.3vh;
  background: black;
  gap: 5rem;

  > img {
    width: 10rem;
  }
  > p {
    font: 500 1.6rem "Ubuntu", sans-serif;
    color: white;
    text-align: center;
    max-width: 75%;
    line-height: 3rem;
    > strong {
      color: var(--purple);
    }
    > a {
      font: 500 1.2rem "Ubuntu", sans-serif;
      color: var(--purple);
    }
  }

  @media (max-width: 1024px) {
    min-height: 94.3vh;
  }

  @media (max-width: 900px) {
    > img {
      width: 8rem;
    }
    > p {
      font-size: 1rem;
      > a {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 330px) {
    > img {
      width: 6rem;
    }
    > p {
      font-size: 0.9rem;
      > a {
        font-size: 0.9rem;
      }
    }
  }
`;

export default NotFound;

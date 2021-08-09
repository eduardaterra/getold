import styled from "styled-components";
import Pig from "../assets/pig.svg";

const AboutSection = () => {
  return (
    <AboutContainer>
      <img src={Pig} alt="pig" />
      <h1>
        Simule sua <strong>Aposentadoria</strong>
      </h1>
      <p>
        A{" "}
        <Logo>
          get<strong>old</strong>
        </Logo>{" "}
        é um Simulador de Aposentadoria rápido que vai te ajudar a ter um valor
        estimado do quanto você precisa <strong>guardar e investir</strong> para
        ter a <strong>renda mensal</strong> desejada sem que seu dinheiro acabe
        por <strong>100 anos</strong>! Lembrando que o mercado sempre está
        sujeito a oscilações e mudanças, então o simulador não é preciso.
        <br />
        <br /> Além disso, também é calculado o quanto você precisa guardar
        mensalmente para chegar lá com base na sua idade atual até a idade
        desejada para se aposentar.
      </p>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  background: black;
  width: 100%;
  height: 90.74vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  > img {
    width: 12rem;
  }
  > h1 {
    font: bold italic 2.5rem "Ubuntu", sans-serif;
    color: white;
    > strong {
      color: var(--purple);
    }
  }
  > p {
    font: 500 1.5rem "Ubuntu", sans-serif;
    color: white;
    text-align: center;
    > strong {
      color: var(--purple);
    }
  }
  @media (max-width: 1024px) {
    height: 94.8vh;

    > p {
      font: 500 1.5rem "Ubuntu", sans-serif;
      color: white;
      > strong {
        color: var(--purple);
      }
    }
  }
  @media (max-width: 758px) {
    padding: 2rem 1rem;
    min-height: 90.3vh;
    > img {
      width: 8rem;
    }
    > p {
      font: 500 1rem "Ubuntu", sans-serif;
    }
    > h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
  @media (max-width: 400px) {
    height: 100%;
  }
`;

const Logo = styled.span`
  font: bold italic 1.5rem "Ubuntu", sans-serif;
  color: white;
  > strong {
    color: var(--purple);
  }
  @media (max-width: 758px) {
    font-size: 1rem;
  }
`;

export default AboutSection;

import styled from "styled-components";
import Seniors from "../assets/seniors.svg";

const InitialSection = () => {
  return (
    <>
      <InitialContainer>
        <InitialTextContainer>
          <h1>Envelhecer não precisa ser um problema.</h1>
          <p>
            Umas das grandes certezas que podemos ter na vida é que estamos
            envelhecendo a cada minuto que passa. Entretanto, isso só é um
            problema quando <strong>não planejamos.</strong> <br />
            <br />
            Pensando nisso, a{" "}
            <Logo>
              get<strong>old</strong>
            </Logo>{" "}
            está com você para te ajudar nessa jornada!
          </p>
        </InitialTextContainer>
        <ImgContainer>
          <img src={Seniors} alt="Seniors" />
        </ImgContainer>
      </InitialContainer>
    </>
  );
};

const InitialContainer = styled.div`
  background: white;
  max-width: 100vw;
  min-height: 90.3vh;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    margin-top: -5rem;
    min-height: 100vh;
    flex-direction: column-reverse;
    padding: 2rem;
    gap: 7rem;
  }
  @media (max-width: 758px) {
    gap: 3rem;
    margin-top: 0rem;
  }
`;

const InitialTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  width: 40rem;
  > h1 {
    font: bold 3rem "Ubuntu", sans-serif;
    color: var(--purple);
  }
  > p {
    font: 500 1.7rem "Ubuntu", sans-serif;
    color: black;
    > strong {
      color: var(--purple);
    }
  }

  @media (max-width: 758px) {
    max-width: 100%;
    > h1 {
      font-size: 2rem;
    }
    > p {
      font-size: 1rem;
    }
  }
`;

const Logo = styled.span`
  font: bold italic 1.7rem "Ubuntu", sans-serif;
  color: black;
  > strong {
    color: var(--purple);
  }
  @media (max-width: 758px) {
    font-size: 1rem;
  }
`;

const ImgContainer = styled.div`
  width: 27rem;
  height: 27rem;
  background: var(--gray);
  border-radius: 100%;
  border: solid 5px var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 17rem;
  }

  @media (max-width: 900px) {
    width: 20rem;
    height: 20rem;
    > img {
      width: 12rem;
    }
  }
  @media (max-width: 758px) {
    width: 10rem;
    height: 10rem;
    > img {
      width: 7rem;
    }
  }
`;

export default InitialSection;

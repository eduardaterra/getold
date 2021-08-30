import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoNotSent from "../../assets/info-not-sent.svg";

const UnsentFormResult: React.FC = () => {
  return (
    <UnsentContainer>
      <img src={InfoNotSent} alt="carta simbolizando informação não enviada" />
      <p>
        Calma aí!
        <br />
        Parece que você não preencheu as{" "}
        <strong>informações necessárias</strong>. Por favor, vá para{" "}
        <Link to="/">home</Link> se quiser saber mais sobre a{" "}
        <Logo>
          get<strong>old</strong>
        </Logo>{" "}
        ou vá direto preencher nosso <Link to="/form">formulário</Link>.
      </p>
    </UnsentContainer>
  );
};
const UnsentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -4rem;
  gap: 5rem;
  > img {
    width: 12rem;
  }
  > p {
    font: 500 1.6rem "Ubuntu", sans-serif;
    color: white;
    text-align: center;
    max-width: 75%;
    line-height: 2rem;
    > strong {
      color: var(--purple);
    }
    > a {
      color: var(--purple);
    }
  }
  @media (max-width: 700px) {
    > img {
      width: 10rem;
    }
    > p {
      font-size: 1.2rem;
      max-width: 85%;
    }
  }
  @media (max-width: 375px) {
    > img {
      width: 8rem;
    }
    > p {
      font-size: 1rem;
    }
  }
`;

const Logo = styled.span`
  font: Bold Italic 1.6rem "Ubuntu", sans-serif;
  color: white;
  > strong {
    color: var(--purple);
  }
  @media (max-width: 700px) {
    font-size: 1.2rem;

    @media (max-width: 375px) {
      font-size: 1rem;
    }
  }
`;
export default UnsentFormResult;

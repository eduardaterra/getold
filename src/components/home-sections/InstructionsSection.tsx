import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InstructionComponent from "./InstructionComponent";

const InstructionsSection = () => {
  const history = useHistory();
  return (
    <InstructionsContainer>
      <TitleContainer>
        <h1>Como Utilizar</h1>
      </TitleContainer>
      <CardsContainer>
        <InstructionComponent position="1º">
          <p>
            Informe sua <strong>idade atual</strong> e{" "}
            <strong>valor guardado</strong> (caso tenha). Essas informações são
            necessárias para calcular o período até sua aposentadoria e quanto
            falta para chegar ao valor necessário. Elas não serão armazenadas em
            lugar algum. Não se preocupe!
          </p>
        </InstructionComponent>
        <InstructionComponent position="2º">
          <p>
            Informe sua <strong>idade para aposentar</strong>,{" "}
            <strong>gastos mensais desejados</strong> e{" "}
            <strong>rentabilidade anual estimada</strong>. Para determinar o
            percentual, recomendamos que considere as informações de acordo com
            seu perfil de investidor e consulte indicadores para ter noção do
            cenário econômico.
          </p>
        </InstructionComponent>
        <InstructionComponent position="3º">
          <p>
            Envie as informações e veja os resultados! Lembrando que os dados
            são <strong>estimativas</strong> e estão sujeitos a grandes
            alterações diante de inúmeros fatores que alteram nossa realidade
            econômica e social!
          </p>
        </InstructionComponent>
      </CardsContainer>
      <Button
        onClick={() => {
          history.push("/form");
        }}
      >
        Simular Agora
      </Button>
    </InstructionsContainer>
  );
};

const InstructionsContainer = styled.div`
  background: white;
  width: 100%;
  height: 90.6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    height: 94.8vh;
  }
  @media (max-width: 970px) {
    height: 100%;
    padding-top: 3rem;
    gap: 0;
  }
`;

const TitleContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: flex-start;

  > h1 {
    font: bold italic 2.5rem "Ubuntu", sans-serif;
    color: var(--purple);
  }
  @media (max-width: 970px) {
    justify-content: center;
    > h1 {
      font-size: 2rem;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8rem;
  @media (max-width: 1400px) {
    gap: 2rem;
    padding: 2rem;
  }
  @media (max-width: 970px) {
    flex-direction: column;
  }
  @media (max-width: 300px) {
    padding: 2rem 2px;
  }
`;

const Button = styled.div`
  margin: 2.5rem;
  background: var(--purple);
  border: none;
  border-radius: 3rem;
  color: white;
  font: 500 1.8rem "Ubuntu", sans-serif;
  width: 26rem;
  height: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 970px) {
    margin-bottom: 2rem;
    width: 16rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
`;

export default InstructionsSection;

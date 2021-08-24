import styled from "styled-components";
import InstructionComponent from "./InstructionComponent";

const InstructionsSection = () => {
  return (
    <InstructionsContainer>
      <h1>Como Utilizar</h1>
      <CardsContainer>
        <InstructionComponent position="1º">
          <p>
            Informe sua <strong>idade</strong> e <strong>valor guardado</strong>
            . Essas informações são necessárias para calcular o período até sua
            aposentadoria e quanto falta para chegar ao valor necessário. Essas
            informações não são armazenadas em lugar algum. Não se preocupe!
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
            econômica!
          </p>
        </InstructionComponent>
      </CardsContainer>
      <Button>Simular Agora</Button>
    </InstructionsContainer>
  );
};

const InstructionsContainer = styled.div`
  background: white;
  width: 100%;
  height: 90.74vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  > h1 {
    font: bold italic 2.5rem "Ubuntu", sans-serif;
    color: var(--purple);
    position: absolute;
    transform: translate(-33.5vw, -21.5vw);
  }

  @media (max-width: 1400px) {
    height: 94.8vh;
    > h1 {
      transform: translate(-26vw, -32.5vw);
    }
  }
  @media (max-width: 970px) {
    height: 100%;
    padding-top: 3rem;
    gap: 0;
    > h1 {
      position: relative;
      transform: none;
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

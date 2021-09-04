import React, { useContext } from "react";
import styled from "styled-components";

import FormValidationContext from "../../contexts/FormValidationContext";
import useRetirementCalculator from "../../hooks/useRetirementCalculator";
import useMask from "../../hooks/useMask";

import Growth from "../../assets/growth.svg";
import Relax from "../../assets/relax.svg";

import SavedMoneyDuration from "./SavedMoneyDuration";

type ContainerProp = {
  justify: string;
};

const ResultScreen: React.FC = () => {
  const { values } = useContext(FormValidationContext);

  const {
    savedMoneyDuration,
    monthlySavedMoneyNeeded,
    savedMoneyNeeded,
    timeUntilRetirement,
    savedMoneyMonthlyProfit,
  } = useRetirementCalculator({ ...values });

  const { year, month, monthExceeded } = savedMoneyDuration;

  const { monetaryMask } = useMask();

  return savedMoneyMonthlyProfit >= values.monthlyExpenses ? (
    <>
      <Container justify="center">
        <h1>Resultados</h1>
      </Container>
      <RetiredContainer>
        <img src={Relax} alt="pessoa relaxando" />
        <p>
          Parece que você já atingiu seu <strong>objetivo</strong>! E ai, ta
          esperando o que para se aposentar?{" "}
        </p>
      </RetiredContainer>
    </>
  ) : (
    <>
      <Container justify="center">
        <h1>Resultados</h1>
      </Container>
      <Container justify="space-between">
        <MoneyNeededContainer>
          <h1>R$ {monetaryMask(savedMoneyNeeded)}</h1>
          <p>é o valor necessário para você se aposentar com tranquilidade!</p>
        </MoneyNeededContainer>
        <TextContainer>
          <h1>Mas não se assuste!</h1>
          <p>
            Você tem <strong>{timeUntilRetirement} anos</strong> para juntar
            essa quantia.
          </p>
        </TextContainer>
      </Container>
      <Container
        justify={
          (year === 0 && month === 0 && monthExceeded === 0) ||
          monthlySavedMoneyNeeded <= 0
            ? "center"
            : "space-between"
        }
      >
        {monthlySavedMoneyNeeded > 0 ? (
          <ImgContainer>
            <img src={Growth} alt="pessoa prosperando gradativamente" />
            <p>
              Juntando{" "}
              <strong>R$ {monetaryMask(monthlySavedMoneyNeeded)}</strong> por
              mês, você vai conseguir chegar lá!
            </p>
          </ImgContainer>
        ) : null}
        {values.savedMoney === undefined ? null : (
          <ImgContainer>
            <SavedMoneyDuration />
          </ImgContainer>
        )}
      </Container>
    </>
  );
};

const RetiredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

const Container = styled.div<Pick<ContainerProp, "justify">>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  align-items: center;
  min-width: 80%;
  > h1 {
    font: bold italic 2.3rem "Ubuntu", sans-serif;
    color: var(--purple);
  }
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  @media (max-width: 930px) {
    flex-direction: column;
    gap: 5rem;
    > h1 {
      font-size: 2.1rem;
      margin-top: 2rem;
    }
  }
  @media (max-width: 500px) {
    > h1 {
      font-size: 1.8rem;
    }
  }
`;

const MoneyNeededContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--purple);
  border-radius: 2rem;
  padding: 2rem;
  gap: 1.5rem;
  width: 30rem;
  > h1 {
    font: 500 3rem "Ubuntu", sans-serif;
    color: white;
  }
  > p {
    font: 500 1.3rem "Ubuntu", sans-serif;
    color: var(--purple);
    text-align: center;
  }

  @media (max-width: 1024px) {
    width: 26rem;
    > h1 {
      font-size: 2.8rem;
    }
    > p {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 500px) {
    width: 16rem;
    padding: 1.5rem;
    > h1 {
      font-size: 2.3rem;
    }
    > p {
      font-size: 0.8rem;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  > h1 {
    font: 500 2.3rem "Ubuntu", sans-serif;
    color: white;
  }
  > p {
    font: 500 1.3rem "Ubuntu", sans-serif;
    color: white;
    > strong {
      color: var(--purple);
    }
  }
  @media (max-width: 1024px) {
    width: 26rem;
    > h1 {
      font-size: 2.1rem;
    }
    > p {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 500px) {
    padding: 1rem;
    width: 17rem;
    > h1 {
      font-size: 1.4rem;
    }
    > p {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 30rem;
  > img {
    width: 8rem;
  }
  > p {
    font: 500 1.2rem "Ubuntu", sans-serif;
    text-align: center;
    color: white;
    > strong {
      color: var(--purple);
    }
  }
  @media (max-width: 1024px) {
    width: 26rem;

    > p {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 930px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 500px) {
    width: 16rem;
    > img {
      width: 6rem;
    }
    > p {
      font-size: 0.8rem;
    }
  }
`;

export default ResultScreen;

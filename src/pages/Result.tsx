import { useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import UnsentFormResult from "../components/result/UnsentFormResult";
import FormValidationContext from "../contexts/FormValidationContext";
import HeaderContext from "../contexts/HeaderContext";
import useRetirementCalculator from "../hooks/useRetirementCalculator";
import Growth from "../assets/growth.svg";
import Calendar from "../assets/calendar.svg";

type ContainerProp = {
  justify: string;
};

const Result: React.FC = () => {
  const { setShowModal, setSlide, display, setDisplay } =
    useContext(HeaderContext);
  const { values, isFormReady } = useContext(FormValidationContext);

  const {
    savedMoneyDuration,
    monthlySavedMoneyNeeded,
    savedMoneyNeeded,
    timeUntilRetirement,
  } = useRetirementCalculator({ ...values });

  const { year, month, monthExceeded } = savedMoneyDuration;

  useEffect(() => {
    setDisplay(false);
  }, []);

  return (
    <>
      <Header
        setShowModal={setShowModal}
        setSlide={setSlide}
        display={display}
      ></Header>
      <ResultContainer>
        {isFormReady ? (
          <>
            <Container justify="space-between">
              <MoneyNeededContainer>
                <h1>R$ {savedMoneyNeeded}</h1>
                <p>
                  é o valor necessário para você se aposentar com tranquilidade!
                </p>
              </MoneyNeededContainer>
              <TextContainer>
                <h1>Mas não se assuste!</h1>
                <p>
                  Você tem <strong>{timeUntilRetirement} anos</strong> para
                  juntar essa quantia.
                </p>
              </TextContainer>
            </Container>
            <Container
              justify={
                year === 0 && month === 0 && monthExceeded === 0
                  ? "center"
                  : "space-between"
              }
            >
              <ImgContainer>
                <img src={Growth} alt="pessoa prosperando gradativamente" />
                <p>
                  Juntando <strong>R$ {monthlySavedMoneyNeeded}</strong> por
                  mês, você vai conseguir chegar lá!
                </p>
              </ImgContainer>
              {year === 0 && month === 0 && monthExceeded === 0 ? null : (
                <ImgContainer>
                  <img src={Calendar} alt="calendário" />
                  {year > 0 ? (
                    monthExceeded > 0 ? (
                      <p>
                        Se você aposentar com a quantia que tem atualmente,
                        conseguirá se manter por{" "}
                        <strong>
                          {year > 1 ? year + " anos" : year + " ano"}
                        </strong>{" "}
                        e{" "}
                        <strong>
                          {monthExceeded > 1
                            ? monthExceeded + " meses"
                            : monthExceeded + " mês"}
                        </strong>
                        .
                      </p>
                    ) : (
                      <p>
                        Se você aposentar com a quantia que tem atualmente,
                        conseguirá se manter por{" "}
                        <strong>
                          {year > 1 ? year + " anos" : year + " ano"}
                        </strong>
                        .
                      </p>
                    )
                  ) : (
                    <p>
                      Se você aposentar com a quantia que tem atualmente,
                      conseguirá se manter por{" "}
                      <strong>
                        {month > 1 ? month + " meses" : month + " mês"}
                      </strong>
                      .
                    </p>
                  )}
                </ImgContainer>
              )}
            </Container>
          </>
        ) : (
          <UnsentFormResult />
        )}
      </ResultContainer>
    </>
  );
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  max-width: 100vw;
  min-height: 90.3vh;
  background-color: black;
`;

const Container = styled.div<Pick<ContainerProp, "justify">>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  align-items: center;
  min-width: 80%;
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
`;
export default Result;

import styled from "styled-components";

type Instruction = {
  position: string;
  children: React.ReactNode;
};

const InstructionComponent: React.FC<Instruction> = ({
  position,
  children,
}) => {
  return (
    <>
      <InstructionContainer>
        <Position>{position}</Position>
        {children}
      </InstructionContainer>
    </>
  );
};

const Position = styled.span`
  color: var(--purple);
  font: bold italic 2rem "Ubuntu", sans-serif;
  position: absolute;
  transform: translateX(-7.5rem);
  @media (max-width: 1400px) {
    transform: translateX(-5.5rem);
    font-size: 1.5rem;
  }
`;

const InstructionContainer = styled.div`
  height: 28rem;
  width: 20rem;
  margin-top: 5rem;
  border: 1.5px solid var(--purple);
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > p {
    margin-top: 6rem;
    font: bold italic 1.2rem "Ubuntu", sans-serif;
    color: black;
    > strong {
      color: var(--purple);
    }
  }
  @media (max-width: 1400px) {
    width: 15rem;
    height: 22rem;
    margin-top: 0;
    > p {
      margin-top: 3rem;
      font: bold italic 1rem "Ubuntu", sans-serif;
    }
  }
`;

export default InstructionComponent;

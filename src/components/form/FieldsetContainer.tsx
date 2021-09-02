import styled from "styled-components";

const FieldsetContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: var(--purple);
  border-radius: 2rem;
  width: 70rem;
  height: 100%;
  gap: 3rem;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    > fieldset {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      > label {
        font: 500 1.2rem "Ubuntu", sans-serif;
      }
      > input {
        border-radius: 3rem;
        height: 2rem;
        border: none;
        padding: 0.1rem;
        font: 500 1rem "Ubuntu", sans-serif;
        text-align: center;
        &::placeholder {
          color: var(--light-gray);
          font: 500 0.3rem "Ubuntu", sans-serif;
        }
        &.error {
          border: 2px solid #ff0000;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    width: 40rem;
    > div {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-width: 758px) {
    padding: 1rem;
    width: 30rem;
    > div {
      > fieldset {
        display: flex;
        align-items: center;
        > label {
          font: 500 0.8rem "Ubuntu", sans-serif;
          display: flex;
          align-items: center;
        }
        > input {
          font-size: 0.8rem;
          height: 2rem;
        }
      }
    }
  }
  @media (max-width: 500px) {
    width: 20rem;
  }
  @media (max-width: 340px) {
    width: 16rem;

    > div {
      > fieldset {
        > input {
          max-width: 7.5rem;
        }
      }
    }
  }
`;

export default FieldsetContainer;

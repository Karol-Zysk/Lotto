import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  color: rgba(255, 255, 255, 0.9);

  /* border: 1px solid red; */
  text-align: left;
`;

export const CalculationsTitle = styled.p`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 80%;
  border: 1px solid blue;
  display: flex;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 2rem;
  /* border: 1px solid red; */
`;
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem;
  padding-left: 4rem;
  /* border: 1px solid red; */
`;

export const InputsWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;
export const ResultsWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

export const Input = styled.input`
  width: 3rem;
  height: 3rem;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 8px;
`;

export const InputsText = styled.p`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
`;
export const TextWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const HitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

export const DrawWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-bottom: 2.5rem;
`;

export const Button = styled.button`
  width: auto;
  border-radius: 15px;
  background-color: yellow;
  white-space: nowrap;
  padding: 10px 22px;
  color: blue;
  font-size: 16px;
  outline: none;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
    background-color: blue;
    border: 3px solid white;
  }
`;

export const BtnErrorWrapper = styled.div`
  width: 70%;
  display: flex;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ErrorMsgWrapper = styled.div`
  width: 70%;
  display: flex;

  justify-content: center;
`;

export const ErrorTxt = styled.p`
  font-size: 1rem;
  color: red;
`;

export const Num = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  font-weight: 400;
  font-family: "Orbitron", sans-serif;
`;
export const Result = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  font-family: "Orbitron", sans-serif;
`;

export const Astrix = styled.p`
  margin-top: auto;
`;

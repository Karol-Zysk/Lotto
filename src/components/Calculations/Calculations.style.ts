import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  text-align: left;
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  border: 1px solid blue;
  display: flex;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem;
  /* border: 1px solid red; */
`;
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 2rem;
  padding-left: 4rem;
  /* border: 1px solid red; */
`;

export const InputsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-self: center;
  align-self: center;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 8px;
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

  align-items: center;
`;

export const Button = styled.button`
  width: 50%;
  border-radius: 15px;
  background-color: yellow;
  white-space: nowrap;
  padding: 10px 22px;
  color: blue;
  font-size: 16px;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
    background-color: blue;
    border: 2px solid white;
  }
`;

export const BtnErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid red;
`;
export const BtnWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;
export const ErrorMsgWrapper = styled.div`
  width: 60%;
  display: flex;
  border: 1px solid red;

  justify-content: center;
`;

export const ErrorTxt = styled.p`
  font-size: 1rem;
  color: red;
`;

export const Num = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  font-family: "Orbitron", sans-serif;
`;
export const Result = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-family: "Orbitron", sans-serif;
`;

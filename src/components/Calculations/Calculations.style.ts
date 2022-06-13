import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  border: 1px solid red;
  text-align: left;
`;

export const Wrapper = styled.div`
  width: 60%;
  border: 1px solid blue;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 35px;
  height: 35px;
  font-size: 1rem;
  text-align: center;
`;

export const HitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const DrawWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

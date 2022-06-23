import styled from "styled-components";
import { CgArrowDownO } from "react-icons/cg";
import { Link } from "react-scroll";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: auto;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  color: rgba(255, 240, 0);
  text-align: left;
  z-index: 0;
`;

export const Shape1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(100% 0%, 55% 0%, 100% 39%);
  background-color: yellow;
  z-index: -1;
`;
export const Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 20%, -40% 0%, 53% 100%, 0% 100%);
  background-color: yellow;
  z-index: -1;
`;

export const CalculationsTitle = styled.p`
  font-size: 2.3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 0px 2px black;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 70%;
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
  width: 100%;
  padding: 2rem;
  padding-left: 4rem;
`;

export const ResultsAndArrow = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  color: white;

  /* border: 1px solid red; */
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  padding-top: 3rem;
  text-shadow: 2px 0px 2px black;

  align-items: center;
  color: yellow;
`;

export const LinkRS = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ArrowIcon = styled(CgArrowDownO)`
  font-size: 3rem;
  transition: 100ms ease-in-out;
  cursor: pointer;
  margin-bottom: 1.2rem;
  &:hover {
    transition: 100ms ease-in-out;
    transform: scale(1.1);
  }
`;

export const InputsWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2rem;
`;
export const ResultsWrapper = styled.div`
  margin-bottom: 2.2rem;
  color: yellow;
  text-shadow: 2px 0px 2px black;
`;

export const Input = styled.input`
  width: 2.5rem;
  height: 2.7rem;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 8px;
`;

export const InputsText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 0px 2px black;
`;
export const ResultsText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1rem;
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
  width: 80%;
  margin-bottom: 2.5rem;
`;

export const Button = styled.button`
  width: auto;
  border-radius: 15px;
  background-color: yellow;
  white-space: nowrap;
  padding: 10px 22px;
  color: blue;
  font-size: 1rem;
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
  width: 100%;
  display: flex;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ErrorMsgWrapper = styled.div`
  width: 90%;
  display: flex;

  justify-content: center;
`;

export const ErrorTxt = styled.p`
  font-size: 1rem;
  color: red;
`;

export const ArrowText = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const Num = styled.span`
  font-size: 1.3rem;
  margin-left: 0.5rem;
  font-weight: 400;
  font-family: "Orbitron", sans-serif;
`;
export const Result = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
`;

export const Astrix = styled.p`
  margin-top: auto;
`;

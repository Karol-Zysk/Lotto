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
  @media (max-width: 768px) {
    /* padding-top: 7rem; */

    min-height: 100vh;
    max-height: auto;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    clip-path: polygon(0 0, 44% 0, 100% 15%, 100% 60%, 0 40%);
  }
`;
export const SmallShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  background-color: yellow;
  z-index: -1;
  @media (max-width: 768px) {
    display: block;
    clip-path: circle(4% at 90% 4%);
  }
`;

export const CalculationsTitle = styled.p`
  font-size: 2.1rem;
  margin-bottom: 1rem;
  text-shadow: 2px 0px 2px black;
  font-weight: bold;
  @media (max-width: 1180px) {
    font-size: 1.8rem;
  }
  @media (max-width: 960px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    color: blue;
    margin-top: 5rem;
    text-shadow: 2px 0px 2px white;
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  @media (max-width: 1458px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
  @media (max-width: 400px) {
    padding: 0.5rem;
  }
`;
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  padding-left: 4rem;
  @media (max-width: 1384px) {
    padding: 2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }
  @media (max-width: 400px) {
    padding: 0.5rem;
  }
`;

export const ResultsAndArrow = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  padding: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 400px) {
    padding-top: 0;
    margin-bottom: 0;
  }
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
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
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
  @media (max-width: 768px) {
    width: 70%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const ResultsWrapper = styled.div`
  margin-bottom: 2.2rem;
  color: yellow;
  text-shadow: 2px 0px 2px black;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.8rem;
  }
`;

export const Input = styled.input`
  width: 2.5rem;
  height: 2.7rem;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 2.2rem;
    height: 2.3rem;
    font-size: 0.9rem;
  }
`;

export const InputsText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 2px 0px 2px black;
  @media (max-width: 1180px) {
    font-size: 1.6rem;
  }
  @media (max-width: 960px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0;
    color: blue;
    text-shadow: 2px 0px 2px white;
  }
`;
export const ResultsText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (max-width: 1180px) {
    font-size: 1.6rem;
  }
  @media (max-width: 960px) {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
  }
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
  width: 100%;
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
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
  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 0.8rem;
    height: min-content;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
    background-color: blue;
    border: 3px solid yellow;
  }
`;
export const Button2 = styled.button`
  width: auto;
  border-radius: 15px;
  background-color: yellow;
  white-space: nowrap;
  padding: 10px 22px;
  color: blue;
  font-size: 1rem;
  outline: none;
  border: 3px solid blue;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 0.8rem;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
    background-color: blue;
    border: 3px solid yellow;
  }
`;

export const BtnErrorWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: auto;
    align-items: flex-end;
    height: 10%;
    margin-bottom: 1rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

export const BtnWrapper2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
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
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Num = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  font-weight: 400;
  font-family: "Orbitron", sans-serif;
  @media (max-width: 768px) {
    margin-left: 0.2rem;
    font-size: 1.1rem;
  }
`;
export const Result = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  @media (max-width: 768px) {
    margin-left: 0.2rem;
    font-size: 1rem;
  }
`;

export const Astrix = styled.p`
  margin-top: auto;
`;

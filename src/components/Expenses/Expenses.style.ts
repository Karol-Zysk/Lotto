import styled from "styled-components";
import { CgAsterisk } from "react-icons/cg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
  position: relative;
  color: blue;
  justify-content: center;
  text-align: left;
  z-index: 0;
  text-shadow: 2px 0px 1px white;
  @media (max-width: 768px) {
    /* padding-top: 7rem; */

    height: 100vh;
    max-height: 100%;
  }
`;

export const Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(100% 0%, 53% 0%, 100% 48%);
  background-color: blue;
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Shape1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 20%, -40% 0%, 53% 100%, 0% 100%);
  background-color: blue;
  z-index: -1;
  @media (max-width: 768px) {
    background-color: blue;
    clip-path: circle(20.7% at 0 100%);
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1304px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const GainsAndLoses = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 90%;
    height: 90%;
  }
`;

export const Assumptions = styled.div`
  padding: 1rem;
  margin-top: auto;

  text-shadow: 2px 0px 1px black;

  @media (max-width: 768px) {
    padding: 0rem;
  }
`;
export const AssumptionsText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const AssumptionsTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const BigText = styled.div`
  font-size: 3rem;
  width: 80%;
  font-weight: bold;
  justify-self: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 1304px) {
    font-size: 2.7rem;
    width: 90%;
  }
  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 1.8rem;
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;
export const MoreText = styled.div`
  font-size: 1rem;
  width: 50%;
  justify-content: space-around;
  margin-bottom: 0.5rem;
  display: flex;

  @media (max-width: 986px) {
  }
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  width: 70%;
  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
    width: 90%;
  }
  @media (max-width: 468px) {
    margin-bottom: 0rem;
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 1.3rem;
    @media (max-width: 486px) {
      margin-bottom: 0.5rem;
    }
  }
`;
export const Text = styled.p`
  margin-bottom: 0.5rem;
`;

export const BiggerText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const ButtonBlue = styled.button`
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
  margin-bottom: 2rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
    background-color: blue;
    border: 3px solid yellow;
  }
`;

export const AsteriskIcon = styled(CgAsterisk)`
  cursor: pointer;
  margin-left: -1rem;
  transition: ease-in-out 100ms;
  &:hover {
    transition: ease-in-out 100ms;
    transform: scale(1.05);
  }
`;

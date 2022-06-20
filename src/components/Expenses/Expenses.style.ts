import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
`;

export const GainsAndLoses = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 5rem;
  align-items: center;
  flex-direction: column;
`;

export const Assumptions = styled.div`
  padding: 1rem;
  margin-top: auto;
`;
export const AssumptionsText = styled.p`
  font-size: 0.7rem;
`;
export const AssumptionsTitle = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const BigText = styled.div`
  font-size: 4rem;
  width: 80%;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;
export const MoreText = styled.div`
  font-size: 1.1rem;
  width: 80%;
  justify-content: space-around;
  margin-bottom: 0.5rem;
  display: flex;
  
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;
export const Text = styled.p`
  margin-bottom: 0.5rem;
  
`;

export const BiggerText = styled.p`
  font-size: 1.2rem;
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
  font-size: 16px;
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

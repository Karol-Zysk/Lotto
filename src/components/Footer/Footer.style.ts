import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 15vh;
  border-top: 3px solid yellow;
  width: 100%;
  background-color: blue;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  @media (max-width: 1100px) {
    padding: 0.8rem 1.2rem;
  }
  @media (max-width: 768px) {
    padding: 0.8rem 0.8rem;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
  @media (max-width: 1100px) {
    height: 80%;
  }
  @media (max-width: 768px) {
    height: 60%;
  }
  @media (max-width: 526px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  text-shadow: 3px 0px 3px black;
  color: yellow;
  font-weight: bold;
  margin-left: 1.5rem;
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 526px) {
    margin-left: 0;
  }
`;
export const Author = styled.p`
  font-size: 1.2rem;
  text-shadow: 3px 0px 3px black;
  color: yellow;
  font-weight: bold;
  margin-left: 1.5rem;
  @media (max-width: 1100px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    margin-left: 0.7rem;
    font-size: 0.9rem;
  }
`;

export const Copyright = styled.span`
  text-align: center;
  font-size: 1.8rem;
  text-shadow: 3px 0px 3px black;
  color: yellow;
  font-weight: bold;
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

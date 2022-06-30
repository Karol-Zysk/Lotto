import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: blue;
  display: flex;
  z-index: 0;
  @media (max-width: 768px) {
    padding-bottom: 4rem;
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  height: 70%;
  margin-top: 90px;
  @media (max-width: 1480px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25vh;
  }
`;

export const Shape1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(100% 0%, 55% 0%, 55% 100%, 100% 100%);
  background-color: yellow;
  z-index: -1;
  @media (max-width: 768px) {
    clip-path: circle(15% at 0 0);
  }
`;

export const Shape2 = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0 88%, 0% 100%, 44% 100%);
    background-color: yellow;
    z-index: -1;
  }
`;

export const ContentWrapper = styled.div`
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 55%;
  color: yellow;
  text-shadow: 2px 0px 2px black;
  padding: 1rem 2rem 1rem 1rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 1rem 0.5rem;
  }
`;

export const Title = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  @media (max-width: 1180px) {
    font-size: 1.3rem;
  }
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.15rem;
  }
`;

export const Desc = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.7rem;
  @media (max-width: 1180px) {
    font-size: 1rem;
  }
  @media (max-width: 960px) {
    font-size: 0.9rem;
  }
  @media (max-width: 960px) {
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    font-size: 0.85rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 45%;
  justify-content: flex-end;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  /* margin-left: 4rem; */
  width: 65%;
`;

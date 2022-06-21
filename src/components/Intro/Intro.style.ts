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
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  height: 70%;
  margin-top: 90px;
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
`;

export const ContentWrapper = styled.div`
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 55%;
  color: yellow;
  text-shadow: 2px 0px 2px black;
`;

export const Title = styled.p`
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export const ImageWrapper = styled.div`
  width: 45%;
  justify-content: flex-end;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 3rem;
  width: 70%;
`;

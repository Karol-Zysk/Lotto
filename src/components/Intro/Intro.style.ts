import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: blue;
  display: flex;
  z-index: 0;
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
  align-items: center;
  width: 55%;
`;

export const ImageWrapper = styled.div`
  width: 45%;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 2rem;
  width: 75%;
`;

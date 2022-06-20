import React from "react";
import { Container, ContentWrapper, Image, ImageWrapper, Shape1 } from "./Intro.style";
import happy from "../../images/happy.png";

const Intro = () => {
  return (
    <Container>
      <ContentWrapper>Content</ContentWrapper>
      <ImageWrapper>
      <Image src={happy} alt="ball" />
      </ImageWrapper>
      <Shape1 />
    </Container>
  );
};

export default Intro;

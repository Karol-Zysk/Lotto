import React from "react";
import {
  Container,
  ContentWrapper,
  Desc,
  Image,
  ImageWrapper,
  Shape1,
  Title,
  Wrapper,
} from "./Intro.style";
import balls from "../../images/balls.png";

const Intro = () => {
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <Title>
            <b>Lotto</b> (do 1975 Toto-Lotek, do 2009 Duży Lotek)
          </Title>{" "}
          <Desc>
            Najstarsza, a zarazem najpopularniejsza w Polsce gra liczbowa.
            Polega na wytypowaniu wyników losowania 6 liczb z zakresu od 1 do 49
          </Desc>
          <Title>Lotto to szansa ale też ryzyko</Title>
          <Desc>
            Na tej stronie możesz bez ryzyka spróbować swoich szans w
            dziesiątkach losowań. Sprawdź czy przyniosło Ci to więcej
          </Desc>
        </ContentWrapper>
        <ImageWrapper>
          <Image src={balls} alt="ball" />
        </ImageWrapper>
      </Wrapper>
      <Shape1 />
    </Container>
  );
};

export default Intro;

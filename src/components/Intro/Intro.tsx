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
import Arrow from "../Calculations/Parts/Arrow";

const Intro = () => {
  return (
    <Container id="intro">
      <Wrapper>
        <ContentWrapper>
          <div>
            <Title>
              <b>Lotto</b> (do 1975 Toto-Lotek, do 2009 Duży Lotek).
            </Title>{" "}
            <Desc>
              Najstarsza, a zarazem najpopularniejsza w Polsce gra liczbowa.
              Polega na wytypowaniu wyników losowania 6 liczb z zakresu od 1 do
              49.
            </Desc>
            <Title>Lotto to szansa ale też ryzyko.</Title>
            <Desc>
              Na tej stronie możesz bez ryzyka spróbować swoich szans w
              dziesiątkach losowań. Sprawdź za ile losowań Twoje liczby
              przyniosą Ci <b>szóstkę</b>.
            </Desc>
          </div>
          <Arrow path="info" text="Jak to działa?" />
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

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
} from "./Infoo.style";
import think from "../../images/think.png";
import Arrow from "../Calculations/Parts/Arrow";

const Info = () => {
  return (
    <Container id="info">
      <Wrapper>
        <ContentWrapper>
          <div>
            <Title>
              <b>Jak to działa?</b>
            </Title>{" "}
            <Desc>
              Aplikacja generuje losową kombinację 6 liczb z zakresu 1-49.
              Następnie porównuje ją z podaną przez nas kombinacją.
            </Desc>
            {/* <Title>Lotto to szansa ale też ryzyko.</Title> */}
            <Desc>
              Podobnie w przypadku większej ilości losowań generowana jest
              założona liczba kombinacji, a następnie porównywana z naszą
              szóstką.
            </Desc>
            <Desc>Każde losowanie jest od siebie niezależne.</Desc>
            <Desc>
              Nie został ustawiony limit liczby losowań ponieważ jest to zależne
              od możliwości komputera. Mój świetnie sobie radzi przy 10mln
              losowań jednocześnie jednak 20mln stanowi już wyzwanie.
            </Desc>
          </div>
          <Arrow path="calculator" text="Zagraj!" />
        </ContentWrapper>
        <ImageWrapper>
          <Image src={think} alt="ball" />
        </ImageWrapper>
      </Wrapper>
      <Shape1 />
    </Container>
  );
};

export default Info;

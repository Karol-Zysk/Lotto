import React from "react";
import {
  Author,
  Copyright,
  FooterContainer,
  Image,
  LogoContainer,
  Text,
} from "./Footer.style";
import lotto from "../../images/balls.png";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Image src={lotto} />
        <Text>Lotto Symulator</Text>
      </LogoContainer>
      <Author>
        Karol Zyśk <Copyright dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
        2022
      </Author>
    </FooterContainer>
  );
};

export default Footer;

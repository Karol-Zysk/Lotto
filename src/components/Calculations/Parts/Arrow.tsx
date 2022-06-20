import React from "react";
import {
  LinkRS,
  ArrowIcon,
  ArrowText,
  IconWrapper,
} from "../Calculations.style";

const Arrow = () => {
  return (
    <IconWrapper>
      <ArrowText>
        <LinkRS to="expenses" smooth={true} duration={500}>
          <ArrowIcon />
        </LinkRS>
        Podsumowanie
      </ArrowText>
    </IconWrapper>
  );
};

export default Arrow;

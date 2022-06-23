import React from "react";
import { ArrowType } from "../../../../type";
import {
  LinkRS,
  ArrowIcon,
  ArrowText,
  IconWrapper,
} from "../Calculations.style";

const Arrow: React.FC<ArrowType> = ({ path, text }) => {
  return (
    <IconWrapper>
      <ArrowText>
        <LinkRS to={path} smooth={true} duration={500}>
          <ArrowIcon />
        </LinkRS>
        {text}
      </ArrowText>
    </IconWrapper>
  );
};

export default Arrow;

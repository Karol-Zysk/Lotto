import React from "react";
import {
  Icon,
  CloseIcon,
  Container,
  SidebarLink,
  Menu,
  Wraper,
  BtnWrapper,
  Btn,
} from "./Sidebar.style";
import { SidebarProps } from "../../../type";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Wraper>
        <Menu>
          <SidebarLink to="about" onClick={toggle}>
            Informacje
          </SidebarLink>

          <SidebarLink to="calculator" onClick={toggle}>
            Kalkulator
          </SidebarLink>

          <SidebarLink to="like" onClick={toggle}>
            Zostaw Łapkę
          </SidebarLink>
        </Menu>
        <BtnWrapper>
          <Btn to="/signin" onClick={toggle}>
            Contact
          </Btn>
        </BtnWrapper>
      </Wraper>
    </Container>
  );
};

export default Sidebar;

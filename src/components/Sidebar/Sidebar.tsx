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
            About
          </SidebarLink>

          <SidebarLink to="culture" onClick={toggle}>
            Culture
          </SidebarLink>

          <SidebarLink to="forest" onClick={toggle}>
            Primeval Forest
          </SidebarLink>

          <SidebarLink to="discover" onClick={toggle}>
            Discover
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

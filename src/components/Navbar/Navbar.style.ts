import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

type StyledProps = {
  scrollNav: boolean;
};

export const Nav = styled.div<StyledProps>`
  background: ${({ scrollNav }) => (scrollNav ? "blue" : "transparent")};
  border-bottom: ${({ scrollNav }) =>
    scrollNav ? "3px solid yellow" : "3px solid transparent"};

  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 800ms ease-in-out;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  @media (max-width: 1480px) {
    padding: 0 20px;
  }
  max-width: 100%;
`;

export const LogoNavLink = styled(LinkScroll)`
  color: yellow;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 2px 0px 2px black;
  transition: all 200ms ease-in-out;
  @media (max-width: 1480px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  &.active {
    filter: brightness(1);
    transform: scale(1.07);
    transition: all 200ms ease-in-out;
  }
`;

export const MobileIcon = styled.div<StyledProps>`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: ${({ scrollNav }) => (scrollNav ? "yellow" : "blue")};

    text-shadow: 1px 1px 1px black;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  text-shadow: 2px 0px 1px black;
  display: flex;
  align-items: center;
  width: 70%;
  font-weight: bold;
  list-style: none;
  text-align: center;
  @media (max-width: 1480px) {
    justify-content: space-around;
    padding-right: 20%;
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  height: 80px;
  margin-right: 3vw;
  @media screen and (max-width: 1480px) {
    margin-right: 1vw;
  }
`;
export const NavLink = styled(LinkScroll)`
  color: yellow;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  font-size: 1.1rem;
  filter: brightness(0.9);
  cursor: pointer;
  height: 100%;
  transition: all 200ms ease-in-out;
  border-bottom: 3px solid transparent;
  &.active {
    filter: brightness(1);
    transform: scale(1.07);
    transition: all 200ms ease-in-out;
  }
  &:hover {
    transform: scale(1.05);
    transition: all 200ms ease-in-out;
  }
  @media (max-width: 1480px) {
    font-size: 1rem;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background-color: blue;
  white-space: nowrap;
  padding: 10px 22px;
  color: yellow;
  font-size: 16px;
  outline: none;
  border: 3px solid yellow;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: blue;
    background-color: yellow;
    border: 3px solid blue;
  }
`;

import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

type StyledProps = {
  scrollNav: boolean;
};

export const Nav = styled.div<StyledProps>`
  background: ${({ scrollNav }) => (scrollNav ? "blue" : "transparent")};
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
  max-width: 1100px;
`;

export const Logo = styled(LinkRouter)`
  color: yellow;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: yellow;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  height: 80px;
`;
export const NavLink = styled(LinkScroll)`
  color: yellow;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  height: 100%;
  transition: all 200ms ease-in-out;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 3px solid white;
    transition: all 200ms ease-in-out;
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
  background-color: yellow;
  white-space: nowrap;
  padding: 10px 22px;
  color: blue;
  font-size: 16px;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    background-color: orange;
    border: 2px solid white;
  }
`;
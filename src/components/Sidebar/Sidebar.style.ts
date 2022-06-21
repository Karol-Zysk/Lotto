import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

type StyledProps = {
  isOpen: boolean;
};

export const Container = styled.aside<StyledProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: blue;
  display: grid;
  align-items: center;
  left: 0;
  transition: all 300ms ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: yellow;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  outline: none;
`;

export const Wraper = styled.div`
  color: yellow;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  text-shadow: 2px 0px 2px black;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: yellow;
  cursor: pointer;
  &:hover {
    color: yellow;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled(LinkRouter)`
  border-radius: 50px;
  background: yellow;
  white-space: nowrap;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  color: blue;
  outline: none;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
    background: blue;
    border: 3px solid white;
  }
`;

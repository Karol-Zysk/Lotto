import { useState, useEffect } from "react";
import {
  Nav,
  Container,
  MobileIcon,
  Menu,
  Item,
  NavLink,
  NavBtn,
  BtnLink,
  LogoNavLink,
} from "./Navbar.style";
import { FaBars } from "react-icons/fa";
import { NavbarProps } from "../../../type";

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <Container>
          <LogoNavLink to="intro" smooth={true} duration={500} spy={true}>
            Lotto Symulator
          </LogoNavLink>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Menu>
            <Item>
              <NavLink to="info" smooth={true} duration={500} spy={true}>
                Informacje
              </NavLink>
            </Item>

            <Item>
              <NavLink
                to="calculator"
                smooth={true}
                duration={500}
                spy={true}
                offset={-40}
              >
                Kalkulator
              </NavLink>
            </Item>
            <Item>
              <NavLink
                to="like"
                smooth={true}
                duration={500}
                spy={true}
                offset={20}
              >
                Zostaw Łapkę
              </NavLink>
            </Item>
          </Menu>
          <NavBtn>
            <BtnLink to="contact">Kontakt</BtnLink>
          </NavBtn>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;

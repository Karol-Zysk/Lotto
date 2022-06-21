import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  Nav,
  Container,
  Logo,
  MobileIcon,
  Menu,
  Item,
  NavLink,
  NavBtn,
  BtnLink,
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <Container>
          <Logo to="/" onClick={toggleHome}>
            Lotto Symulator
          </Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Menu>
            <Item>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Informacje
              </NavLink>
            </Item>

            
            <Item>
              <NavLink
                to="calculator"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
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
                offset={-80}
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

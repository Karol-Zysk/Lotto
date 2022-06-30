import { useState } from "react";
import Calculations from "../components/Calculations/Calculations";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import Intro from "../components/Intro/Intro";
import Like from "../components/Like/Like";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Intro />
      <Info />
      <Calculations />
      <Like />
      <Footer />
    </>
  );
};

export default Main;

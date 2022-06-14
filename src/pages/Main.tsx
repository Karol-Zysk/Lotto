import { useState } from "react";
import Calculations from "../components/Calculations/Calculations";
import Expenses from "../components/Expenses/Expenses";
// import Intro from "../components/Intro/Intro";
// import Navbar from "../components/Navbar/Navbar";
// import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    //   <Navbar toggle={toggle} />
    //   <Sidebar isOpen={isOpen} toggle={toggle} />
    //   <Intro />
    <>
      <Calculations />
      <Expenses />
    </>
  );
};

export default Main;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Main from "./pages/Main";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

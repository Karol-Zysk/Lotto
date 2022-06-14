
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
// import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Main />} />
        {/* <Route path="/contact"  element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
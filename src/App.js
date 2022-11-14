//import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Business from "./Component/Business";
import Compliances from "./Component/Compliances";
import Contact from "./Component/Contact";
import Audit from "./Component/Audit";
import Outsource from "./Component/Outsource";
import Financial from "./Component/Financial";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Business" element={<Business></Business>}></Route>
          <Route
            path="/Compliances"
            element={<Compliances></Compliances>}
          ></Route>
          <Route path="/Audit" element={<Audit></Audit>}></Route>
          <Route path="/Outsource" element={<Outsource></Outsource>}></Route>
          <Route path="/Financial" element={<Financial />}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
      {/* <Home/> */}
      {/* <About /> */}
      {/* <Business /> */}
      {/* <Compliances /> */}
      {/* <Contact/> */}
      {/* <Audit /> */}
      {/* <Outsource /> */}
      {/* <Financial /> */}
    </div>
  );
}

export default App;

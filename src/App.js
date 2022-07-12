
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/elements/Header/Header";
import Footer from "./components/elements/Footer/Footer";

function App() {
  return (
    <Router basename="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

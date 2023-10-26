import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Layout/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

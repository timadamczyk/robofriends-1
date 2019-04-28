import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tachyons from "tachyons";
import Header from "./components/Header";
import Projects from "./components//Projects/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
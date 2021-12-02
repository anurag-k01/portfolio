import logo from "./logo.svg";
import "./App.css";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./components/ContactPage/Contact";
import Project from "./components/ProjectPage/Project";
import Skills from "./components/SkillsPage/Skills";
import Github from "./components/Github/Github";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/github">
            <Github />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

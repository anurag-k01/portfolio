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
          <Route exact path="/github">
            <Github />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/projects">
            <Project />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
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

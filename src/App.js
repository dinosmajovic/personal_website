import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './Containers/AboutPage';
import ContactPage from './Containers/ContactPage';
import NotFoundPage from './Containers/NotFoundPage';
import ProjectsPage from './Containers/ProjectsPage';
import SkillsPage from './Containers/SkillsPage';

class App extends Component {
  render() {
    return ( 
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;

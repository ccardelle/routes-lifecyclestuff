import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import {projects as Projects} from './components/Projects';
import ProjectDetails from './components/ProjectDetails';

import { Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {

  // componentWillMount() {
  //   console.log('component will mount')
  // }

  componentDidMount() {
    console.log('component did mount')
  }

  render() {
    return (
      <Fragment>
        <h2>Lifecycle & Routing</h2>
        <Navbar />

        <Switch>
          <Route exact path='/' render={() => <Home user="niko" loggedIn={true}/>} />
          <Route  path='/about' component={About} />
          <Route  path='/contact' render={() => <Contact weather="beautiful" />} />
          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />

        </Switch>

        {/* <Home />
        <About /> */}
      </Fragment>
    )
  }

}

export default App;

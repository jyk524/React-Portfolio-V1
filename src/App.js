import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Button, Card, CardText } from 'react-mdl';
import Main from './components/main'

class App extends Component {
  render () {
    return (
      // Scrolling Navbar
      <div class="mdl-layout mdl-js-layout">
        <header  class="mdl-layout__header header-color mdl-layout__header--scroll">
          <div class="mdl-layout__header-row">
            {/* <!-- Title --> */}
            <span class="mdl-layout-title">James Y. Kim</span>
            {/* <!-- Add spacer, to align navigation to the right --> */}
            <div class="mdl-layout-spacer"></div>
            {/* <!-- Navigation --> */}
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="/resume">Resume</a>
              <a class="mdl-navigation__link" href="/aboutme">About Me</a>
              <a class="mdl-navigation__link" href="/projects">Projects</a>
              <a class="mdl-navigation__link" href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">James Y. Kim</span>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="/resume">Resume</a>
            <a class="mdl-navigation__link" href="/aboutme">About Me</a>
            <a class="mdl-navigation__link" href="/projects">Projects</a>
            <a class="mdl-navigation__link" href="/contact">Contact</a>
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content">
            <Main />
          </div>
        </main>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Button, Card, CardText } from 'react-mdl';


function App() {
  return (
  //  Uses a header that scrolls with the text, rather than staying locked at the top 
<div class="mdl-layout mdl-js-layout">
  <header class="mdl-layout__header mdl-layout__header--scroll">
    <div class="mdl-layout__header-row">
      {/* Title */}
      <span class="mdl-layout-title">Title</span>
      {/*  Add spacer, to align navigation to the right  */}
      <div class="mdl-layout-spacer"></div>
      {/*  Navigation  */}
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
      {/* <!-- Your content goes here --> */}
    </div>
  </main>
</div>
  );
}

export default App;

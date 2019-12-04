import React, { Component } from 'react';
import './header.css';
import logo from '../LogoMakr_54VoFq.png';

class Header extends Component {
  render() {
    return (
      <div> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;

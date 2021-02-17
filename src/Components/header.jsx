import React, { Component } from 'react';
import logo from "../assets/logo.png";
import "../style/header.css";

class Header extends Component {
  render() {
    return (
      <section className="header">
        <img src={ logo } alt={ 'logo-folio'}/>
        <nav>
          <a href="#stacks">Stacks</a>
          <a href="#projects">Projects</a>
          <a href="#about-me">About-me</a>
        </nav>
      </section>
      
    )
  }
}

export default Header;
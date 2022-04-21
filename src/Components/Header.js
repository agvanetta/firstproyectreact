import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';


export class Header extends Component {
  render() {
    return (
      <header className="Header">
      <FontAwesomeIcon className="iconMenu" icon={faBars} />
      <h1 className="Titulo">  {this.props.title}</h1>
      <FontAwesomeIcon className="iconMenu" icon={faLightbulb} />
      </header>
    )
  }
}



export default Header
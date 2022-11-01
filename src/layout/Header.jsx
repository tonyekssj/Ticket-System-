import React, { Component } from 'react';
import logovware from "../images/logo-vware.png";
import {Link} from "react-router-dom"

import './Header.css';

export default function Header() {
  return(
    <nav className='HeaderItems'>
        <h1 className="header-logo"><img src={logovware}></img></h1>
        <ul className='header-menu'>
        <Link className="header-links" to={"/"}>Inicio</Link>
        </ul>
      </nav>
  )
}

import React, { Component } from 'react';
import logovware from "../images/logo-vware.png";
import {Link, useMatch, useResolvedPath} from "react-router-dom"

import './Header.css';

export default function Header() {
  return(
    <nav className='HeaderItems'>
        <h1 className="header-logo"><img src={logovware}></img></h1>
        <ul className='header-menu'>
        <CustomLink className="header-links" to={"/"}>Inicio</CustomLink>
        </ul>
      </nav>
  )
}

function CustomLink ({to,children,...props}){
  const resolvePath = useResolvedPath(to)
  const isActive= useMatch ({path: resolvePath.pathname, end:true})

  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to}{...props}>
        {children}
      </Link>
    </li>
  )
}
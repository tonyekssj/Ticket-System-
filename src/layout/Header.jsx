import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import {Button} from "../components/Button";
import logovware from "../images/logo-vware.png";

import './Header.css';


class Header extends Component{
  state = {clicked : false}
  
  handleClick = () => {
    this.setState ({ clicked: !this.state.clicked})
  }

  render(){
    return(
      <nav className='HeaderItems'>
        <h1 className="header-logo"><img src={logovware}></img></h1>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

        </div>
        <ul className='header-menu'>
            {MenuItems.map((item, index) =>{
              return(
                <li key = {index}>
                  <a className={item.cName} href={item.url}>
                  {item.tittle}
                  </a>      
                </li>
              )
            })}
        </ul>
      <Button onClick={this.handleClick}>Nosotros</Button>
      </nav>
    )
  }
}

export default Header;
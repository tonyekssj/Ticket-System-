import React, { Component } from 'react';
import {Button} from "../components/Button";
import {Link, useMatch, useResolvedPath} from "react-router-dom"


import './Footer.css'
export default function Footer() {
    return(

    <div className='footer'>
      <hr/>
      <div className='terminos__footer'>
        <p>Copyright © 2022 VWare Solutions | Todos los derechos reservados · Política de Privacidad · Aviso Legal · Cookies</p>
        <br/>
        <CustomLink className="nosotros"to={"/nosotros"} >Nosotros</CustomLink>
        
      </div>

      <div className='redes__footer'>
        <a href='https://www.facebook.com'>
          <i class="fa-brands fa-square-facebook fa-2x" href></i>
        </a>

        <a href='https://www.linkein.com'>
          <i class="fa-brands fa-linkedin fa-2x"></i>
        </a>

        <a href='https://www.youtube.com'>
          <i class="fa-brands fa-youtube fa-2x"></i>
        </a>

      </div>

    </div>
   
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
  
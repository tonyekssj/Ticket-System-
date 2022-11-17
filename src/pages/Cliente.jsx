import React from "react"
import photo from "../images/empty.png";
import'../layout/UsersBox.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export const Cliente =() =>{

    return(
        <div >
            <ul className="customer-box">
                <ul className="crear"><img src={photo} height="100" width="100"/><h1>Crear Ticket</h1> <CustomLink className="clienteCrear"to={"/clienteCrear"} ><button className="btn-grey" >Crear Ticket</button></CustomLink></ul>
                <ul className="ver"><img src={photo} height="100" width="100"/><h1>Ver Ticket</h1><CustomLink className="clienteVer"to={"/clienteVer"} ><button className="btn-grey">Ver Ticket</button></CustomLink></ul>
                <ul className="modificar" href='#'><img src={photo} height="100" width="100"/><h1>Modificar Datos</h1><CustomLink className="clienteModificar"to={"/clienteModificar"} ><button className="btn-grey">Modificar Ticket</button></CustomLink></ul>
            </ul>
        </div>
    )
}

export default Cliente;

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
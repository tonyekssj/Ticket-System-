import React from "react"
import '../layout/UsersBox.css';
import '../layout/DataBoxes.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export const ClienteCrear =() =>{

    return(
        <div className="basic-box">
            <h2>Crear Ticket</h2>
            <br />
            <input 
                type="text" 
                id="titulo"
                placeholder="Título"
            />
            <br />
            <br />
            <input 
            list="priorities" 
            name="myPriorities"
            placeholder="Prioridad"
            />
            <datalist id="priorities">
                <option value="Alta"></option>
                <option value="Media"></option>
                <option value="Baja"></option>
            </datalist>
            <br />
            <br />
            <textarea className="last-box" 
                id="descripcion"
                placeholder="Descripción"
            />
            <br />
            <br />
            <CustomLink className="Cliente"to={"/"} ><button className="btn-pink">Crear Ticket</button></CustomLink>
        </div>
    )
}

export default ClienteCrear;

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
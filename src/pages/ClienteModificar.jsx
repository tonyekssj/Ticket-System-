import React from "react"
import '../layout/UsersBox.css';
import '../layout/DataBoxes.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export const ClienteCrear =() =>{

    return(
        <div className="basic-box">
            <h2>Modificar datos personales</h2>
            <br />
            <input 
                type="text" 
                id="nombre"
                placeholder="Nombre"
            />
            <br />
            <br />
            <input 
                type="email" 
                id="correo"
                placeholder="Correo"
            />
            <br />
            <br />
            <input 
                type="password" 
                id="contraseña actual"
                placeholder="Contraseña actual"
            />
            <br />
            <br />
            <input 
                type="password" 
                id="contraseña"
                placeholder="Nueva contraseña"
            />
            <br />
            <br />
            <input 
                type="password" 
                id="confirmar"
                placeholder="Confirmar contraseña"
            />
            <br />
            <br />
            <CustomLink className="Cliente"to={"/"} ><button className="btn-blue">Crear Ticket</button></CustomLink>
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
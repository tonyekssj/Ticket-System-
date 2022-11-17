import React from "react"
import '../layout/UsersBox.css';
import '../layout/DataBoxes.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export const ClienteVer =() =>{

    return(
        <div className="basic-box">
            <h2>Ver Ticket</h2>
            <br />
            <input 
                type="text" 
                id="ID Ticket"
                placeholder="ID Ticket"
            />
            <br />
            <br />
            <CustomLink className="Cliente"to={"/"} ><button className="btn-green">Ver Ticket</button></CustomLink>
        </div>
    )
}

export default ClienteVer;

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
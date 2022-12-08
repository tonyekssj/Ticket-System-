import {Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import Nosotros from "../pages/Nosotros";
import Cliente from "../pages/Cliente";
import Usuario from "../pages/Usuario";
import Administrador from "../pages/Administrador";
import ClienteCrear from "../pages/ClienteCrear";
import ClienteVer from "../pages/ClienteVer";
import ClienteModificar from "../pages/ClienteModificar";

export default function Rutas (){
    return(
    <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/nosotros" element = {<Nosotros/>}/>
        <Route path="/clienteCrear" element = {<ClienteCrear/>}/>
        <Route path="/clienteVer" element = {<ClienteVer/>}/>
        <Route path="/clienteModificar" element = {<ClienteModificar/>}/>
    </Routes>
    )

}
import {Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import Nosotros from "../pages/Nosotros";

export default function Rutas (){
    return(
    <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/nosotros" element = {<Nosotros/>}/>
    </Routes>
    )

}
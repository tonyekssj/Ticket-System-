import {Route, Routes} from "react-router-dom"
import Nosotros from "../pages/Nosotros";

export default function Rutas (){
    return(
    <Routes>
        <Route path="/nosotros" element = {<Nosotros/>}/>
    </Routes>
    )

}
import React from "react"
import'./Nosotros.css';


export const Nosotros =() =>{
    return(  
    <body>
        <div className="box-nosotros">
        <p className="nosotros-titulo">Nosotros</p>
        <p className="texto-nosotros">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut vestibulum est. In hac habitasse platea dictumst. Ut nec augue auctor, aliquet sem at, porta nisi. Nulla facilisis quis arcu sit amet condimentum. Nullam eu auctor ante. Suspendisse faucibus libero sed tristique dictum. Donec sit amet ligula accumsan, pharetra est facilisis, efficitur lectus. Integer ullamcorper bibendum enim id maximus. Maecenas laoreet sem in mi vestibulum, at bibendum dolor fermentum. Phasellus vestibulum ante ac sapien eleifend vulputate. Nulla quis elit ut leo pretium fringilla quis non massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <br/>
        <br/>
    
        <table className="table-nosotros">
            <tr>
                <td className="nosotros-primero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut vestibulum est. In hac habitasse platea dictumst. Ut nec augue auctor, aliquet sem at, porta nisi. Nulla facilisis quis arcu sit amet condimentum.</td>
                <td className="nosotros-primero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut vestibulum est. In hac habitasse platea dictumst. Ut nec augue auctor, aliquet sem at, porta nisi. Nulla facilisis quis arcu sit amet condimentum.</td>
                <td className="nosotros-primero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut vestibulum est. In hac habitasse platea dictumst. Ut nec augue auctor, aliquet sem at, porta nisi. Nulla facilisis quis arcu sit amet condimentum.</td>
            </tr>
        </table>
        </div>

       
        
    </body>
 
    )
}

export default Nosotros;
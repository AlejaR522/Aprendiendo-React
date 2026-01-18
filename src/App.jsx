
// Para que esto funcione debes importar la carpeta donde se almacena ahora, el codigo que reutilizaste, para ello, lo tienes que borrar de la carpeta principal, donde lo tenias.
import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App ( ){ 

    const [name, setName] = useState ('Aleja Ruiz')
    //name:valor, setName:estado

    console.log('render with name: ', name)
    
    return (

//         <>       
//         <TwitterFollowCard 
//         formatUserName={formatUserName} 
//         userName="unavatar.io" name="Alejandra Ruiz"/>
//         {/* Tambien pasar los parametros que vas a enviar para que se muestren en tu pagina, como el username, y el name*/}


//         <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk" name="Elon Musk"/>
//         {/* Esta seria otra forma de hacerlo, y rederiza mas elementos, solo que ahora será llamado en TwitterFollo.. como Children(un elemento que envuelve a otros), en vez de UserName
//             <h1> Miguel <h1/>
//             <h2> Hi <h2/>
//         <TwitterFollowCard/> */}
//         <TwitterFollowCard/>

//         <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Angel"/>
//         <TwitterFollowCard/>

//         <TwitterFollowCard formatUserName={formatUserName} userName="vxnder" name="Vanderhart"/>
//         <TwitterFollowCard/>

//         </>
//     )
// }

    <section className="App">       
        <TwitterFollowCard userName={name}>
            Aleja Ruiz
        </TwitterFollowCard>

        <TwitterFollowCard userName="elonmusk">
            Pablo Hernandez
        </TwitterFollowCard>

        <TwitterFollowCard userName="midudev">
            Miguel Angel
        </TwitterFollowCard>
        
        <button className= "changeNameButton" onClick= {() => setName('pedromichel')}>
            Cambio Nombre
        </button>

    </section>
    )
}

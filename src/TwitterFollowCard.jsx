import { useState } from 'react' 
//* Así reusamos codigo con react, sin embargo es importante pasarle lo que queremos que se pase en ({}). 
export function TwitterFollowCard ({ children, userName}){
    const [isFollowing, setIsFollowing] = useState(false)
    
    console.log('[TwitterFollowCard] render with userName: ', userName)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (

//     <article className='tw-followCard'>
//         <header className='tw-followCard-header'>
//             <img 
//             className='tw-followCard-avatar'
//             alt="Avatar"
//             src= {`https://unavatar.io/${userName}`} //* Puedes pasar Strings, sin embargo para las expresiones, tienes que pasarlas dentro de llaves, para que evalue la expresion
//              />
//             <div className="tw-followCard-info">
//                 <strong>{name}</strong>
//                 <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span> 
//                 {/* Se necesita pasarle el parametro directamente donde se usará, como aquí {userName} */}
//             </div>
//         </header>
//         <aside>
//             <button className= {buttonClassName} onClick={ handelClick }> 
//                 {text}
//             </button>
//         </aside>
//     </article>
//     )
// }

 <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt="Avatar"
            src= {`https://unavatar.io/${userName}`} //* Puedes pasar Strings, sin embargo para las expresiones, tienes que pasarlas dentro de llaves, para que evalue la expresion
             />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">{userName}</span> 
                {/* Se necesita pasarle el parametro directamente donde se usará, como aquí {userName} */}
            </div>
        </header>
        <aside>
            <button className= {buttonClassName} onClick={ handleClick }> 
                {text}
            </button>
        </aside>
    </article>
    )
}
 
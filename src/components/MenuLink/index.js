import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function MenuLink( {children, to} ){
    const [corFonte, setCorFonte] = useState('');

    useEffect(() => {
        const cor = getComputedStyle(document.documentElement).getPropertyValue('--cor-fonte-principal')
        setCorFonte(cor)
    }, [])


      return (
        <NavLink to={to} style={({isActive}) => {

            return{
                textDecoration: isActive ? "underline" : "none",
                fontSize: "1.25rem",
                lineHeight:"1.5rem",
                color: corFonte
            }
        }
        }>
        {children}
    </NavLink>
    )
}


export default MenuLink
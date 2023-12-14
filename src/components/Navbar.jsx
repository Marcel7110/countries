import light from '/light.svg'
import dark from '/dark.svg'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = ({theme,setTheme}) => {
    useEffect(() => {
        document.querySelector('body').style.backgroundColor = theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'
        localStorage.setItem('CntrsTh', theme)
    },[theme])

    return ( 
        <>
        <nav>
            <h2>Where in the world?</h2>
            <button onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>
                <img src={theme === 'light' ? light : dark} alt=""/>
                <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
        </nav>
        <Outlet/>
        </>
    );
}
 
export default Navbar;
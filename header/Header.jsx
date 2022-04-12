import React from 'react';
import {NavLink} from "react-router-dom";
import {BiBasket} from "react-icons/bi";
import Navbar from "../Bar/NavBar";
import useTheme from "../hooks/useTheme";

function Header(props){
    const {isDark,setIsDark} = useTheme()



    return(
        <header className="App-header">
            <img src="https://cdn.worldvectorlogo.com/logos/logo-pink.svg" className="logo"/>
            <div className="links">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/shop">
                    Shop
                </NavLink>

                <NavLink to="/women">
                    Women
                </NavLink>
                <NavLink to="/men">
                    Men
                </NavLink>
                <button className='btn-theme' onClick={() => setIsDark(!isDark)}>Change Theme</button>

            </div>
            <div className="icons">
                <a href="#">
                    <BiBasket/>
                </a>
                <a href="#">
                    <Navbar/>
                </a>

            </div>
        </header>
    )
}

export default Header
import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.header}>

            {/*add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink to='/junior'>Junior</NavLink>
            <NavLink to='/junior-plus'>Junior+</NavLink>

        </div>
    )
}

export default Header

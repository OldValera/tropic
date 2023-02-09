import React from 'react'
import Button from '../../UI/Button/Button.js'
import classes from './nav.module.scss'

const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li onClick={menuToggle} >
                    <a href='/' >Locations</a>
                </li>
                <li onClick={menuToggle} >
                    <a href='/' >Pricing</a>
                </li>
                <li onClick={menuToggle} >
                    <a href='/' >Learn More</a>
                </li>
            </ul>
            <Button className={classes.booknow} onClick={menuToggle}>Book now</Button>
        </nav>
    )
}

export default Nav

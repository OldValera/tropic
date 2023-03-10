import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button.js'
import classes from './nav.module.scss'

const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li onClick={menuToggle} >
                    <Link to='/locations' >Locations</Link>
                </li>
                <li onClick={menuToggle} >
                    <Link to='/pricing' >Pricing</Link>
                </li>
                <li onClick={menuToggle} >
                    <Link to='/learnmore' >Learn More</Link>
                </li>
            </ul>
            <Link to="/booknow">
                <Button className={classes.booknow} onClick={menuToggle}>Book now</Button>
            </Link>

        </nav>
    )
}

export default Nav

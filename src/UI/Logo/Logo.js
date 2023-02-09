import React from 'react'
import classes from './logo.module.scss'
import LeaveSVG from '../../assets/LeafSVG.js';
const Logo = () => {
    return (
        <a href='/' className={classes.logo} >
            <LeaveSVG fillcolor={"white"} />
            <span>Tropic</span>

        </a>
    )
}

export default Logo

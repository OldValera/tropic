import React, { useState } from 'react'
import classes from './header.module.scss'
import Logo from '../../UI/Logo/Logo.js'
import Nav from '../Nav/Nav.js'
import { CgMenuRight, CgClose } from 'react-icons/cg'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen((p) => !p);
    };

    const menuToggle = !menuOpen ? (
        <CgMenuRight onClick={handleMenuToggle} />
    ) : (
        <CgClose onClick={handleMenuToggle} />
    );

    return (
        <header className={classes.header}>
            <Logo />
            <Nav />
            <div className={classes.header__menu}>
                <div className={classes.header__menu__toggle}>{menuToggle}</div>
                <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
                    <Nav isMenu menuToggle={handleMenuToggle} />
                </aside>
            </div>
        </header>
    )
}

export default Header

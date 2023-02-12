import React from 'react'
import classes from './button.module.scss'

const Button = ({ outline, onClick, children, to }) => {

    return (
        <button onClick={onClick} className={`${classes.button} ${outline ? classes.outline : ''} `}> {children}</button>
    )
}

export default Button

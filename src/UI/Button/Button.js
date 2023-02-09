import React from 'react'
import classes from './button.module.scss'

const Button = ({ outline, onClick, children }) => {
    console.log(children)
    return (
        <button onClick={onClick} className={`${classes.button} ${outline ? classes.outline : ''} `}> {children}</button>
    )
}

export default Button

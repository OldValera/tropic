import React from 'react'
import classes from './hero.module.scss'
import coverVid from './../../assets/cover.mp4'

const Hero = () => {
    return (
        <div className={classes.container}>
            <video muted loop className={classes.video} src={coverVid}></video>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <h1 className={classes.hero__content}></h1>
                </div>
            </div>
        </div>
    )
}

export default Hero

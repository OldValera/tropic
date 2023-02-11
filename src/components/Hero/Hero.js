import React from 'react'
import classes from './hero.module.scss'
import coverVid from './../../assets/cover.mp4'
import Button from './../../UI/Button/Button.js'

const Hero = () => {
    return (
        <div className={classes.container}>
            <video muted loop className={classes.video} src={coverVid}></video>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <h1 className={classes.hero__content__title}>The tropics are waiting</h1>
                    <span className={classes.hero__content__tagline}>Lets us know when youre finished packing</span>
                    <p className={classes.hero__content__description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae itaque ea
                        ducimus, mollitia voluptate laudantium.
                    </p>
                    <div className={classes.hero__content__cta}>
                        <Button>Book now</Button>
                        <Button outline >Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

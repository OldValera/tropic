import React, { Fragment } from 'react'
import classes from './hero.module.scss'
import coverVid from './../../assets/cover.mp4'
import Button from './../../UI/Button/Button.js'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'


const HomePageContent = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>The tropics are waiting</h1>
            <span className={classes.hero__content__tagline}>Lets us know when youre finished packing</span>
            <p className={classes.hero__content__description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae itaque ea
                ducimus, mollitia voluptate laudantium.
            </p>
            <div className={classes.hero__content__cta}>
                <Link to="/booknow">
                    <Button>Book now</Button>
                </Link>
                <Link to="/learnmore">
                    <Button outline >Learn More</Button>
                </Link>
            </div>
        </Fragment>
    )
}

const Hero = ({ isDynmic, children }) => {
    return (
        <div className={classes.container}>
            <video muted loop className={classes.video} src={coverVid}></video>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    {!isDynmic && <HomePageContent />}
                    {isDynmic && <h1 className={classes.hero__content__title}>{children}</h1>}
                </div>
            </div>
        </div>
    )
}

export default Hero

import React, { Fragment } from 'react'
import Hero from '../components/Hero/Hero'
import useScrollToTop from '../hooks/useScrollToTop'

const BookNow = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero isDynmic>Book now</Hero>
        </Fragment>
    )
}

export default BookNow
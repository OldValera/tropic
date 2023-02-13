import React, { Fragment } from 'react'
import Hero from '../components/Hero/Hero'
import Locations from '../components/locations/Locations'
import useScrollToTop from '../hooks/useScrollToTop'

const LocationsPage = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Locations page={true} />
        </Fragment>
    )
}

export default LocationsPage
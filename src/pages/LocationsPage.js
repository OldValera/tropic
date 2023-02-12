import React, { Fragment } from 'react'
import Hero from '../components/Hero/Hero'
import Locations from '../components/locations/Locations'

const LocationsPage = () => {
    return (
        <Fragment>
            <Locations page={true} />
        </Fragment>
    )
}

export default LocationsPage
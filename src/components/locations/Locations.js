import React from 'react'
import classes from './locations.module.scss';

import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";


import BoraBoraJPG from './../../assets/borabora.jpg';
import MaldivesJPG from './../../assets/maldives.jpg'
import CaboSanLucasJPG from './../../assets/cabosanlucas.jpg';
import CroatiaJPG from './../../assets/borabora.jpg';
import GreeceJPG from './../../assets/greece.jpg';
import AlbaniaJPG from './../../assets/borabora.jpg';

const Locations = ({ page }) => {


    const locationData = [
        { id: 1, location: "Bora Bora", isFeatured: true, img: BoraBoraJPG },
        { id: 2, location: "Maldives", isFeatured: true, img: MaldivesJPG },
        { id: 3, location: "Cabo San Lucas", isFeatured: false, img: CaboSanLucasJPG },
        { id: 4, location: "Croatia", isFeatured: false, img: CroatiaJPG },
        { id: 5, location: "Greece", isFeatured: false, img: GreeceJPG },
        { id: 6, location: "Albania", isFeatured: true, img: AlbaniaJPG },
        // { id: 7, location: "Bora Bora", isFeatured: true, img: BoraBoraJPG },
        // { id: 8, location: "Maldives", isFeatured: true, img: MaldivesJPG },
        // { id: 9, location: "Cabo San Lucas", isFeatured: false, img: CaboSanLucasJPG },
    ];

    return (
        <div className={classes.container}>
            <div className={classes.locations}>
                <div className={classes.locations__content}>
                    <h2 className={classes.locations__content__title}>Discover a tropic</h2>
                    <div className={classes.locations__content__gallery}>
                        {
                            locationData.map(({ id, location, isFeatured, img }) => {
                                return (
                                    <div className={classes.gallery__item} key={id} >
                                        <img
                                            className={classes.gallery__item__img}
                                            src={img}
                                            alt={location}
                                        />
                                        <div className={classes.overlay} />
                                        <div className={classes.gallery__item__content}>
                                            <IoLocationOutline />
                                            <h2 className={classes.gallery__item__content__location}>
                                                {location}
                                            </h2>
                                        </div>
                                        {isFeatured && (
                                            <div className={classes.gallery__item__tag}>Featured</div>
                                        )}
                                    </div>
                                )
                            })

                        }
                        {
                            !page && (
                                <div className={classes.locations__content__viewmore}>
                                    <a href='/'>
                                        view more <BsArrowRight />
                                    </a>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations
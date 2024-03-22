import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from '@mui/material';
import Banner from '../assets/banner.jpg';
import Banner2 from '../assets/banner2.webp';
const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Link href="/">
                    <img
                        className="d-block w-100"
                        src={Banner}
                        alt="First slide"
                    />
                </Link>

            </Carousel.Item>
            <Carousel.Item>
                <Link href="/">
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />
                </Link>

            </Carousel.Item>

        </Carousel>
    );
};

export default MyCarousel;

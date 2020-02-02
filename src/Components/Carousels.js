import React from 'react';
import { Carousel } from 'react-bootstrap';


function Carousels(props) {


    return (
        <div>
            <Carousel>
                <Carousel.Item className={props.itemHeight}>
                    <img
                        className="d-block w-100"
                        src={props.img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className={props.itemHeight}>
                    <img
                        className="d-block w-100"
                        src={props.img2}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item className={props.itemHeight}>
                    <img
                        className="d-block w-100"
                        src={props.img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default Carousels;

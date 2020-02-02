import React from 'react';

import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Hero from './Hero'
import styles from './Room.module.css'

function Landing(props) {

    const landing =
        <>
            <Link to={"/about"}>
                <Card className={styles.card}>
                    <div >
                        <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                        <Card.Title><h4>ABOUT</h4></Card.Title>
                    </Card.Body>
                </Card>
            </Link>

            <Link to={"/rooms"}>
                <Card className={styles.card}>
                    <div >
                        <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                        <Card.Title><h4>ROOMS</h4></Card.Title>
                    </Card.Body>
                </Card>
            </Link>

            <Link to={"/restaurant"}>
                <Card className={styles.card}>
                    <div >
                        <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                        <Card.Title><h4>RESTAURANT</h4></Card.Title>
                    </Card.Body>
                </Card>
            </Link>

            <Link to={"/contact"}>
                <Card className={styles.card}>
                    <div >
                        <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                        <Card.Title><h4>CONTACT</h4></Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </>

    return (
        <div >
            <Container>
                {landing}
            </Container>
        </div>
    );

}
export default Landing;

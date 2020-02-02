import React from 'react';
import styles from './Room.module.css'
import { Link } from 'react-router-dom'
import roomsHero from '../images/rooms.jpg'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Hero from './Hero'

function Rooms(props) {


    const rooms = props.states.map(room => (
        <Link to={`/rooms/${room.id}`}>
            <Card className={styles.card}>
                <div className={styles.imgWrap}>
                    <Card.Img variant="top" src={room.photo} />
                </div>
                <Card.Body>
                    <Card.Title><h4 className={styles.name}>{room.name}</h4></Card.Title>
                    <Card.Title><h5 className={styles.price}>Starting from {room.price}/night</h5></Card.Title>
                </Card.Body>
            </Card>
        </Link>
    ))
    return (
        <div >
            <Hero rooms={roomsHero} heading="ROOMS" />
            <Container>
                <div className={styles.cardWrapper}></div>
                {rooms}
            </Container>
        </div>
    );

}
export default Rooms;

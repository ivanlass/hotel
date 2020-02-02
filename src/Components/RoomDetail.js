import React from 'react';
import styles from './RoomDetail.module.css'

import Carousels from './Carousels'
import Features from './Features'
import { Container, Row, Col } from 'react-bootstrap'

import { Icon } from 'react-icons-kit'
import { ic_wifi } from 'react-icons-kit/md/ic_wifi'
import { ic_ac_unit } from 'react-icons-kit/md/ic_ac_unit'
import { ic_phone } from 'react-icons-kit/md/ic_phone'
import { ic_tv } from 'react-icons-kit/md/ic_tv'
import { ic_satellite } from 'react-icons-kit/md/ic_satellite'

let iconColor = "#dec768";
const heading = {
    fontWeight: "300",
    textAlign: "center",
    marginBottom: "30px"
}


function RoomDetail(props) {
    const roomFinder = props.rooms.map(room => (
        room.id == props.match.params.id ?
            <div>
                <div className={styles.carouselsWrap}>
                    <Carousels className={styles.carousels}
                        fade="true"
                        img1={room.img1}
                        img2={room.img2}
                        img3={room.img3}
                        itemHeight={styles.itemHeight} />

                </div>
                <Container className="my-5">
                    <Row >
                        <Col><h1>{room.name}</h1></Col>
                        <Col className="text-right"><h1>{room.price}</h1></Col>
                    </Row>
                    <p className="my-5"><h3 style={heading}>Little description</h3> <span className={styles.heading}>{room.desc}</span></p>
                    <Features {...room} heading="Features" />

                    <div className={styles.inlineIcons}>
                        {room.wifi ?
                            <div className="mx-4 text-center">
                                <h5>WiFi</h5>
                                <div style={{ color: iconColor }}>
                                    <Icon
                                        icon={ic_wifi}
                                        size={64}
                                    />
                                </div>
                            </div>
                            : null}
                        {room.ac ?
                            <div className="mx-4 text-center">
                                <h5>Air Condition</h5>
                                <div style={{ color: iconColor }}>
                                    <Icon
                                        icon={ic_ac_unit}
                                        size={64}
                                    />
                                </div>
                            </div>
                            : null}
                        {room.tv ?
                            <div className="mx-4 text-center">
                                <h5>TV</h5>
                                <div style={{ color: iconColor }}>
                                    <Icon
                                        icon={ic_tv}
                                        size={64}
                                    />
                                </div>
                            </div>
                            : null}
                        {room.phone ?
                            <div className="mx-4 text-center">
                                <h5>Phone</h5>
                                <div style={{ color: iconColor }}>
                                    <Icon
                                        icon={ic_phone}
                                        size={64}
                                    />
                                </div>
                            </div>
                            : null}
                        {room.satellite ?
                            <div className="mx-4 text-center">
                                <h5>Sattelite TV</h5>
                                <div style={{ color: iconColor }}>
                                    <Icon
                                        icon={ic_satellite}
                                        size={64}
                                    />
                                </div>
                            </div>
                            : null}
                    </div>
                </Container>
            </div>
            : null

    ))

    return (
        <div>
            {roomFinder}


        </div>
    );
}

export default RoomDetail;

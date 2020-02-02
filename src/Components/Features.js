import React from 'react';
import { Row, Col } from 'react-bootstrap'


const style = {
    color: "black"
}

const thin = {
    fontWeight: "300"
}

const border = {
    background: "#fafafa",
    margin: "70px 0px",
    padding: "5px 20px",
    textAlign: "center"
}

const heading = {
    fontWeight: "300",
    textAlign: "center",
    marginBottom: "30px"
}




function Features(props) {


    return (
        <div style={border}>
            <h3 style={heading}>{props.heading}</h3>
            <Row >
                <Col>
                    <p><span style={style}>Room size:</span> <span style={thin}>{props.roomSize} squares</span> </p>
                    <p><span style={style}>Smoking:</span> <span style={thin}>{props.smoking}</span></p>
                </Col>
                <Col>
                    <p><span style={style}>Room service:</span> <span style={thin}>{props.roomService}</span> </p>
                    <p><span style={style}>Wake Up Call:</span> <span style={thin}>{props.wakeUpCall}</span></p>
                </Col>
            </Row>
        </div>
    );
}

export default Features;

import React from 'react';
import booking from '../images/booking.png'
import { Icon } from 'react-icons-kit'
import { ic_phone } from 'react-icons-kit/md/ic_phone'
import { ic_smartphone } from 'react-icons-kit/md/ic_smartphone'

const divStyle = {
    height: "50vh"
}

function Contact() {


    return (
        <div>
            <div style={divStyle}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.2679370774708!2d18.325401283204652!3d45.01404620550889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3649255d87e11dc!2sHotel+Euro!5e0!3m2!1shr!2sba!4v1564696082540!5m2!1shr!2sba" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
            </div>
            <a href="https://www.booking.com/hotel/ba/euro.hr.html" target="_blank">
                <img src={booking} alt="booking"></img>
            </a>
            <a type="phone" href="tel:387 31 762 900">
                <div style={{ color: "grey" }}>
                    <Icon
                        icon={ic_phone}
                        size={64}
                    />
                </div>
                387 31 762 900
            </a>

            <a type="phone" href="tel:387 63 360 300">
                <div style={{ color: "grey" }}>
                    <Icon
                        icon={ic_smartphone}
                        size={64}
                    />
                </div>
                +387 63 360 300
            </a>
        </div>
    );
}

export default Contact;

import React from 'react';
import Hero from './Hero'
import { Container, Jumbotron } from 'react-bootstrap';
import imgHotel from '../images/hotel.jpg'

const style = {
    lineHeight: "1.7"
}



function About() {
    return (
        <div>
            <Hero
                rooms={imgHotel} heading="ABOUT US" height="70vh" />

            <Container className="my-5" >
                <h4 style={style}>Hotel Euro svečano je otvoren 24.3.2001.godine. <br></br>Nalazi se na sjeveru Bosne i Hercegovine ,nedaleko od granice s Republikom Hrvatskom. Smješten je u samom centru grada, neposredno uz cestu Sl.Brod, Bos.Brod, Šamac, Doboj, Sarajevo. Hotel se stalno razvija i napreduje,o čemu govori činjenica da je 2008. godine dobio ugostiteljsku Zlatnu krunu, nagradu za najbolji hotel s 3 zvjezdice u Bosni i Hercegovini.
    Hotel je nekoliko puta proširivan i sada,osim glavne sale za 600 osoba koja je prigodna za sva veća slavlja,ima i nekoliko manjih sala.Također,hotel posjeduje i veliko parkiralište i vlastitu terasu koja pruža izuzetan pogled na centar Odžaka.Sjedište je svih važnijih događanja u Odžaku,ali i okolici te pruža idealnu priliku za boravak i odmor.
Vlasnik i direktor hotela je gospodin Marko Knežević koji je u poduzetničkim vodama već puna dva desetljeća.Kako hotel neprestano napreduje i poboljšava se u svim segmentima,za očekivati je još puno dobrih poslovnih rezultata.</h4>
            </Container>
        </div>
    );
}

export default About;

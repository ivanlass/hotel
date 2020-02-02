import React from 'react';
import style from './Hero.module.css'
import styles from './Restaurant.module.css'
import Hero from './Hero'
import Carousels from './Carousels'
import { Container } from 'react-bootstrap';
import restaurantImg from '../images/restaurant.jpg'

// img svadbene sale
import imgRed1 from '../images/sale/crvena.jpg'
import imgRed2 from '../images/sale/crvena2.jpg'
import imgPurple1 from '../images/sale/ljubicasta.jpg'
import imgPurple2 from '../images/sale/ljubicasta1.jpg'
import imgBlue1 from '../images/sale/plava.jpg'
import imgBlue2 from '../images/sale/plava2.jpg'
import imgGreen1 from '../images/sale/zelena.jpg'
import imgGreen2 from '../images/sale/zelena1.jpg'


function Restaurant(props) {


    return (
        <>
            <div className={style.heroWrapper}>
                <Hero rooms={restaurantImg} heading="RESTAURANT" />
                <h1 className={style.heading}>{props.heading}</h1>
            </div>
            <Container className="my-5">
                <p>Odlučili ste se vjenčati,prije svega Vam čestitamo,te Vam želimo predstaviti ponude koje nudimo.
        U planiranju Vašeg savršenog dana uključit ćemo Vaše želje,ideje kako naše iskustvo i kvalitetu.
        U našem hotelu Euro nudimo Vam nekoliko dvorana,ovisno o broju uzvanika,pripremili smo za Vas nekoliko menija,koje prema Vašim željama nadopunjavamo.Bilo bi nam zadovoljstvo za Vas organizirati savršeno vjenčanje.
        Nezaboravna vjenčanja i prekrasne svadbene svečanosti su naša specijalnost.Hotel Euro ima dugu tradiciju organizacije vjenčanja.


        Dan vjenčanja jedan je od najsretnijih i najljepših dana u životu.Otkrijte nam svoje želje i pobrinut ćemo se da vaš dan vjenčanja bude zaista nezaboravan i takav kakav ste oduvijek željeli.
        U ugodnom ambijentu s profesionalnim osobljem,vrhunskom gastronomskom i drugom ponudom za vjenčanje savjetovat ćemo vam kod izbora odgovarajuće lokacije za vaše vjenčanje,zajedno ćemo izabrati svadbeni meni,pripremiti scenariji i pobrinut se za cjelokupan tijek i izvedbu događaja.
        Osnovna ponuda vjenčanja uključuje:svatovski jelovnik,dekoracije i navlake na stolicama,soba za mladence za prvu bračnu noć,pjenušac,voće i cvijeće u sobi za mladence,posluga doručka u sobi prvog bračnog jutra,savjetovanje prilikom odabira i posluga svatovske torte,svečano postavljanje stolova za svatove , te popust za smještaj svatova.
Dodatna ponuda usluga:tematsko vjenčanje i vjenčanje po narudžbi,fotografiranje i snimanje obreda i slavlja s mogućnosti hitne izrade foto-albuma i snimke,vatromet i light-show,glazbeni izvođači,pozivnice i ostale vjenčane tiskanice,meni kartica za svadbenu večeru, i sve drugo čime bismo mogli ispuniti Vaše želje...U sklopu Hotela Euro postoji više prostora za organizaciju vjenčanja,a možemo ugostiti do 600 gostiju.</p>

                <h1 className="my-5">SVADBENE SVEČANOSTI</h1>
                <p>Odlučili ste se vjenčati,prije svega Vam čestitamo,te Vam želimo predstaviti ponude koje nudimo.
    U planiranju Vašeg savršenog dana uključit ćemo Vaše želje,ideje kako naše iskustvo i kvalitetu.
    U našem hotelu Euro nudimo Vam nekoliko dvorana,ovisno o broju uzvanika,pripremili smo za Vas nekoliko menija,koje prema Vašim željama nadopunjavamo.Bilo bi nam zadovoljstvo za Vas organizirati savršeno vjenčanje.
    Nezaboravna vjenčanja i prekrasne svadbene svečanosti su naša specijalnost.Hotel Euro ima dugu tradiciju organizacije vjenčanja.


    Dan vjenčanja jedan je od najsretnijih i najljepših dana u životu.Otkrijte nam svoje želje i pobrinut ćemo se da vaš dan vjenčanja bude zaista nezaboravan i takav kakav ste oduvijek željeli.
    U ugodnom ambijentu s profesionalnim osobljem,vrhunskom gastronomskom i drugom ponudom za vjenčanje savjetovat ćemo vam kod izbora odgovarajuće lokacije za vaše vjenčanje,zajedno ćemo izabrati svadbeni meni,pripremiti scenariji i pobrinut se za cjelokupan tijek i izvedbu događaja.
    Osnovna ponuda vjenčanja uključuje:svatovski jelovnik,dekoracije i navlake na stolicama,soba za mladence za prvu bračnu noć,pjenušac,voće i cvijeće u sobi za mladence,posluga doručka u sobi prvog bračnog jutra,savjetovanje prilikom odabira i posluga svatovske torte,svečano postavljanje stolova za svatove , te popust za smještaj svatova.
Dodatna ponuda usluga:tematsko vjenčanje i vjenčanje po narudžbi,fotografiranje i snimanje obreda i slavlja s mogućnosti hitne izrade foto-albuma i snimke,vatromet i light-show,glazbeni izvođači,pozivnice i ostale vjenčane tiskanice,meni kartica za svadbenu večeru, i sve drugo čime bismo mogli ispuniti Vaše želje...U sklopu Hotela Euro postoji više prostora za organizaciju vjenčanja,a možemo ugostiti do 600 gostiju.</p>
                <div className={styles.spacings}>
                    <h1 className="my-5 text-center">Plava sala</h1>
                    <Carousels
                        img1={imgBlue1}
                        img2={imgBlue2}
                        img3={imgBlue1}
                    />
                </div>

                <div className={styles.spacings}>
                    <h1 className="my-5 text-center">Crvena sala</h1>
                    <Carousels
                        img1={imgRed1}
                        img2={imgRed2}
                        img3={imgRed1}
                    />
                </div>

                <div className={styles.spacings}>
                    <h1 className="my-5 text-center">Zelena sala</h1>
                    <Carousels
                        img1={imgGreen1}
                        img2={imgGreen2}
                        img3={imgGreen1}
                    />
                </div>

                <div className={styles.spacings}>
                    <h1 className="my-5 text-center">Ljubičasta sala</h1>
                    <Carousels
                        img1={imgPurple1}
                        img2={imgPurple2}
                        img3={imgPurple1}
                    />
                </div>

            </Container>
        </>
    );
}

export default Restaurant;

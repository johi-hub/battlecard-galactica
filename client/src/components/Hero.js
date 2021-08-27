import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BattleshipOne from '../images/battleship-1.png';
import BattleshipTwo from '../images/battleship-2.png';
import BattleshipThree from '../images/battleship-3.png';
import BattleshipFour from '../images/battleship-4.png';
import '../scss/sections/_hero.scss';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom'


const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #000;
`;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh;
padding: 3rem calc((100vw - 1300px) /2);

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}

`;

const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0 2rem;

h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
}
`;

const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
border-radius: 4px;
cursor: pointer;
background: transparent;
color: #fff;
`;

const Image = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
max-width: 250px;
max-height: 250px;
`;

const ColumnRight = styled.div`
display: flex;
justify content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
}

${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
}

${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
}

${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
}
`;

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <Section >
    <Particles id="particles-js"
                params={
                {"particles":{"number":{"value":178,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"","width":110,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":1126.873126873127,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
            }    
        />
            <Container>
                <ColumnLeft>
                    <motion.h1
                        className="title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome to <span className="battlecardgalactica">Battlecard Galactica</span>
                    </motion.h1>
                    <motion.p
                        className="description"
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >
                        A spoiler-safe fan page
                    </motion.p>
                    <Link to="/homepage">
                    <Button
                        className='button'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 0.95,
                            backgroundColor: '#8884FF',
                            border: 0,
                            color: '#000'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    >
                        So Say We All
                        </Button>
                        </Link>
                </ColumnLeft>
                <ColumnRight>
                    <Image
                        src={BattleshipOne}
                        alt='battleship'
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: -250, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={BattleshipTwo}
                        alt='battleship'
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: -350, right: 0, top: -200, bottom: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={BattleshipThree}
                        alt='battleship'
                        whileTap={{ scale: 0.8 }}
                        drag={true}
                        dragConstraints={{ left: -250, right: 250, top: 0, bottom: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={BattleshipFour}
                        alt='battleship'
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: -250, right: 50, top: -250, bottom: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                </ColumnRight>
                </Container>
                
        </Section>
    );
};

export default Hero;

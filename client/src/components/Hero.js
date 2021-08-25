import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BattleshipOne from '../images/battleship-1.png';
import BattleshipTwo from '../images/battleship-2.png';
import BattleshipThree from '../images/battleship-3.png';
import BattleshipFour from '../images/battleship-4.png';

const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
lign-items: center;
background: #131313
`;

const Container = styled.div`
display: grid;
gride-template-columns: 1fr 1fr;
height: 100vh;
padding: 3rem calc((100vw - 13000px) /2);

@media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

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
const Button = styled.div`
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
border-radius: 4px;
outline: none;
cursor: pointer;
background: transparent;
`;

const Image = styled.img`
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
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>Welcome to Space</h1>
                    <p>Journey to the unknown</p>
                    <Button>Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={BattleshipOne} alt='battleship' />
                    <Image src={BattleshipTwo} alt='battleship' />
                    <Image src={BattleshipThree} alt='battleship' />
                     <Image src={BattleshipFour} alt='battleship'/>
                </ColumnRight>
            </Container>
            
        </Section>
    )
};

export default Hero
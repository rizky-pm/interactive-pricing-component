import React from 'react';
import styled from 'styled-components/macro';

import { H1 } from '../elements/Heading';
import { Paragraph } from '../elements/Paragraph';

import backgroundImage from '../images/pattern-circles.svg';

const Container = styled.div`
    position: relative;
    background: url(${backgroundImage}),
        ${(props) => props.theme.colors.lightGrayishBlue};
    background-repeat: no-repeat;
    background-position: 50% 25%;
    background-size: 42.5%;
    height: 25rem;
    padding: 5.9375rem 1.25rem 0 1.25rem;
    border-bottom-left-radius: 12.5rem;
    text-align: center;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        height: 21.875rem;
        background-size: 9.6875rem;
        background-position: 50% 15%;
        padding: 4.0625rem 0;
    }
`;

const Header = () => {
    return (
        <Container>
            <H1>Simple, traffic-based pricing</H1>
            <Paragraph customWidth>
                Sign-up for our 30 day trial. No credit card required.
            </Paragraph>
        </Container>
    );
};

export default Header;

import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    padding: 5px 0;
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    text-align: center;
    color: ${(props) => props.theme.colors.darkDesaturatedBlue};

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        bottom: 2.5%;
    }
`;

const Link = styled.a`
    color: ${(props) => props.theme.colors.grayishBlue};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.colors.darkDesaturatedBlue};
        text-decoration: underline;
    }
`;

const Attribution = () => {
    return (
        <Container>
            Challenge by{' '}
            <Link
                href='https://www.frontendmentor.io?ref=challenge'
                target='_blank'
                rel='noopener noreferrer'
            >
                Frontend Mentor
            </Link>
            . Coded by{' '}
            <Link href='https://github.com/rizky-pm'>Rizky Putra Mahendra</Link>
            🔥
        </Container>
    );
};

export default Attribution;

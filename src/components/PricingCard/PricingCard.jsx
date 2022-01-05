import React from 'react';
import styled from 'styled-components/macro';

import PricingInput from './PricingInput/PricingInput';
import PricingBenefits from './PricingBenefits';

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 30%;
    padding: 0 1.25rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        left: 50%;
        top: 27.5%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        padding: 1.25rem 1.25rem;
    }
`;

const Card = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 0.625rem;
    text-align: center;
    padding: 2.1875rem 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0rem 0.8125rem 1.6875rem -0.3125rem,
        rgba(0, 0, 0, 0.3) 0rem 0.5rem 1rem -0.5rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        width: 33.75rem;
        /* height: 25rem; */
    }
`;

const PricingCard = () => {
    return (
        <Container>
            <Card>
                <PricingInput />
                <PricingBenefits />
            </Card>
        </Container>
    );
};

export default PricingCard;

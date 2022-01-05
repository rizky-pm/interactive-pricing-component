import React from 'react';
import styled from 'styled-components/macro';

import IconCheck from '../../images/icon-check.svg';

import { Paragraph } from '../../elements/Paragraph';
import Button from '../../elements/Button';

const Container = styled.div`
    padding: 1.5625rem 1.5625rem 0 1.5625rem;
    border-top: 0.0625rem solid
        ${(props) => props.theme.colors.lightGrayishBlue};

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const UL = styled.ul`
    list-style: none;
    margin-bottom: 2.5rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        text-align: left;
        margin-bottom: 0;
    }
`;

const LI = styled.li`
    &:not(:last-of-type) {
        margin-bottom: 0.625rem;
    }
`;

const Image = styled.img`
    width: 0.625rem;
    height: 0.625rem;
    margin-right: 0.3125rem;
`;

const PricingBenefits = () => {
    return (
        <Container>
            <UL>
                <LI>
                    <Image src={IconCheck}></Image>
                    <Paragraph>Unlimited websites</Paragraph>
                </LI>
                <LI>
                    <Image src={IconCheck}></Image>
                    <Paragraph>100% data ownership</Paragraph>
                </LI>
                <LI>
                    <Image src={IconCheck}></Image>
                    <Paragraph>Email reports</Paragraph>
                </LI>
            </UL>

            <Button>Start my trial</Button>
        </Container>
    );
};

export default PricingBenefits;

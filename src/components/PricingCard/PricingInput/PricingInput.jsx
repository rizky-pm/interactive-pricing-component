import React, { useState } from 'react';
import styled from 'styled-components/macro';

import calculateDiscount from '../../../Utils/calculateDiscount';
import sliderHandler from '../../../Utils/sliderHandler';

import { H2 } from '../../../elements/Heading';
import { Paragraph } from '../../../elements/Paragraph';

import { SliderContainer, Slider } from './SliderInput';
import {
    SwitchContainer,
    SwitchLabel,
    Switch,
    DiscountTag,
} from './ToggleInput';

const Container = styled.div`
    padding: 1.5625rem 1.25rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        padding: 0 1.5625rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0.625rem 0rem;
        grid-template-areas:
            'pageviews price'
            'slider slider'
            'toggle toggle';
        place-items: center;
        margin-bottom: 1.5625rem;
    }
`;

const PriceContainer = styled.div`
    margin-top: 1.5625rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        display: inline-block;
        color: ${(props) => props.theme.colors.grayishBlue};
        margin-left: 0.625rem;
    }

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: price;
        margin-top: 0;
    }
`;

const Span = styled.span`
    font-size: 2.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.darkDesaturatedBlue};
`;

const PageViewRanges = styled.span``;

const H2Grid = styled(H2)`
    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: pageviews;
    }
`;

const PricingInput = () => {
    const [discount, setDiscount] = useState(false);

    const toggleDiscount = (e) => {
        setDiscount((prev) => !prev);
    };

    return (
        <Container>
            <H2Grid>
                <PageViewRanges className='pageviews'>10K</PageViewRanges>{' '}
                pageviews
            </H2Grid>
            <SliderContainer>
                <Slider
                    onInput={(e) => {
                        sliderHandler(e, discount);
                    }}
                    className='slider'
                />
            </SliderContainer>
            <PriceContainer>
                <Span>
                    $<span className='billing'>8</span>.00
                </Span>
                <Paragraph>/ month</Paragraph>
            </PriceContainer>
            <SwitchContainer>
                <SwitchLabel>Monthly Billing</SwitchLabel>
                <Switch>
                    <input
                        onChange={(e) => {
                            calculateDiscount(discount);
                            toggleDiscount(e);
                        }}
                        type='checkbox'
                    />
                    <span className='slider round'></span>
                </Switch>
                <SwitchLabel>
                    Yearly Billing
                    <DiscountTag>-25%</DiscountTag>
                </SwitchLabel>
            </SwitchContainer>
        </Container>
    );
};

export default PricingInput;

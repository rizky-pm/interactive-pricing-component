import styled from 'styled-components/macro';

import SliderIcon from '../../../images/icon-slider.svg';

export const SliderContainer = styled.div`
    width: 100%;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: slider;
    }
`;

export const Slider = styled.input.attrs({
    type: 'range',
    min: '1',
    max: '100',
    defaultValue: '1',
})`
    width: 100%;
    height: 0.625rem;
    -webkit-appearance: none;
    outline: none;
    border-radius: 1.5625rem;
    background: linear-gradient(
        90deg,
        rgb(165, 243, 235) 1%,
        rgb(214, 214, 214) 1%
    );
    margin-top: 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        margin-top: 0;
    }

    &::-webkit-slider-thumb {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: url(${SliderIcon}),
            ${(props) => props.theme.colors.strongCyan};
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: rgba(165, 243, 235, 0.5) 0rem 0.0625rem 0.125rem,
            rgba(165, 243, 235, 0.5) 0rem 0.125rem 0.25rem,
            rgba(165, 243, 235, 0.5) 0rem 0.25rem 0.5rem,
            rgba(165, 243, 235, 0.5) 0rem 0.5rem 1rem,
            rgba(165, 243, 235, 0.5) 0rem 1rem 2rem,
            rgba(165, 243, 235, 0.5) 0rem 2rem 4rem;
        -webkit-appearance: none;
        transition: all 0.2s ease;

        &:hover {
            background-color: rgb(165, 243, 235);
            cursor: pointer;
        }
    }

    &:active::-webkit-slider-thumb {
        background-color: ${(props) => props.theme.colors.strongCyan};
    }
`;

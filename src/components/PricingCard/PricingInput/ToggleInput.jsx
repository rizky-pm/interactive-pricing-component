import styled from 'styled-components/macro';

export const SwitchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.1875rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: toggle;
        margin-top: 0;
        justify-content: center;
        column-gap: 0.625rem;
        width: 100%;
    }
`;

export const SwitchLabel = styled.p`
    color: ${(props) => props.theme.colors.grayishBlue};
    font-size: 0.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        position: relative;
    }
`;

export const Switch = styled.label`
    position: relative;
    display: flex;
    width: 2.5rem;
    height: 1.25rem;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
            background-color: rgb(16, 213, 194);
        }

        &:focus + .slider {
            box-shadow: 0 0 0.0625rem rgb(16, 213, 194);
        }

        &:checked + .slider:before {
            -webkit-transform: translateX(1.1875rem);
            -ms-transform: translateX(1.1875rem);
            transform: translateX(1.1875rem);
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;

        &:before {
            position: absolute;
            content: '';
            height: 0.875rem;
            width: 0.875rem;
            left: 0.1875rem;
            bottom: 0.1875rem;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
        }

        &.round {
            border-radius: 2.125rem;
        }

        &.round:before {
            border-radius: 50%;
        }
    }
`;

export const DiscountTag = styled.span`
    padding: 0.09375rem 0.625rem;
    border-radius: 0.9375rem;
    margin-left: 0.3125rem;
    background-color: ${(props) => props.theme.colors.lightGrayishRed};
    color: ${(props) => props.theme.colors.lightRed};
    font-size: 0.75rem;
    height: 100%;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        position: absolute;
    }
`;

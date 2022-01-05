import styled from 'styled-components/macro';

export const H1 = styled.h1`
    color: ${(props) => props.theme.colors.darkDesaturatedBlue};
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 10px;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        font-size: 28px;
    }
`;

export const H2 = styled.h2`
    color: ${(props) => props.theme.colors.grayishBlue};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    font-weight: 800;
`;

import styled from 'styled-components/macro';

export const Paragraph = styled.p`
    display: inline-block;
    color: ${(props) => props.theme.colors.grayishBlue};
    line-height: 1.5;
    font-size: 0.9375rem;
    width: ${(props) => (props.customWidth ? '12.5rem' : 'auto')};

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        width: auto;
    }
`;

export const CapitalizeParagraph = styled(Paragraph)`
    text-transform: uppercase;
`;

export const modifierConfig = {
    customWidth: () => `
      width: 12.5rem;
    `,
};

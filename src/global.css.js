import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 93.75%;

    body {
        font-family: 'Manrope', sans-serif;
        background-color: ${(props) => props.theme.colors.veryPaleBlue};
    }
    }
`;

export default GlobalStyles;

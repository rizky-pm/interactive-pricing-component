import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        softCyan: 'hsl(174, 77%, 80%)',
        strongCyan: 'hsl(174, 86%, 45%)',
        lightGrayishRed: 'hsl(14, 92%, 95%)',
        lightRed: 'hsl(15, 100%, 70%)',
        paleBlue: 'hsl(226, 100%, 87%)',
        white: 'hsl(0, 0%, 100%)',
        veryPaleBlue: 'hsl(230, 100%, 99%)',
        lightGrayishBlue: 'hsl(224, 65%, 95%)',
        secondLightGrayishBlue: 'hsl(223, 50%, 87%)',
        grayishBlue: 'hsl(225, 20%, 60%)',
        darkDesaturatedBlue: 'hsl(227, 35%, 25%)',
    },
    breakpoints: {
        xsDevices: 'max-width: 575px',
        sDevices: 'min-width: 576px',
        mDevices: 'min-width: 768px',
        lDevices: 'min-width: 992px',
        xlDevices: 'min-width: 1200px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

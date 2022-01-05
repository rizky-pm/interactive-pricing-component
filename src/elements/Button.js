import styled from 'styled-components';

const Button = styled.button`
    width: 190px;
    height: 50px;
    border-radius: 25px;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.colors.darkDesaturatedBlue};
    color: ${(props) => props.theme.colors.paleBlue};
    font-family: 'Manrope', sans-serif;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: rgba(43, 52, 85, 0.25) 0px 13px 27px -5px,
            rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    &:active {
        transform: translateY(-2.5px);
        box-shadow: rgba(43, 52, 85, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
`;

export default Button;

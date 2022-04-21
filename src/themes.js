import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    body: "#a5c5fe",
    fontColor: "#000",
};

export const darkTheme = {
    body: "#282c34",
    fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.body};
    }


`;
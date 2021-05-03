import { createGlobalStyle } from "styled-components"
import { Variables } from "./Variables"

const GlobalStyles = createGlobalStyle`
    & * {
	margin: 0;
	padding: 0;
	border: 0;
    }

    & html {
        scroll-behavior: smooth;
    }

    & body {
        margin: 0;
        padding: 0;
        background-color: ${Variables.colorBackground};
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: ${Variables.colorWhite};
    }

    & a {
        text-decoration: none;
    }

    /* ScrollBar Styles*/
    ::-webkit-scrollbar {
    width: 8px;
    }

    ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${Variables.colorScrollBarIdle};
    }

    ::-webkit-scrollbar-thumb:hover {
    background: ${Variables.colorScrollBarHover};
    }
    /* End ScrollBar Styles*/

    & ::placeholder {
    opacity: 1; /* Firefox */
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    }
`

export default GlobalStyles

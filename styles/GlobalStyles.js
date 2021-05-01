import { createGlobalStyle } from "styled-components"
import { Variables } from "./Variables"

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: ${Variables.colorBackground};
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color:${Variables.colorWhite};
    }
    a {
        text-decoration: none;
    }
`

export default GlobalStyles

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import devices from "./device";

export const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height:100vh;
        margin:auto 0px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: #fff;
        color: #000;
        @media ${({ theme }) => devices.device.mobile}{
            overflow-y: auto;
        }
        overflow-y:auto
    }
    /* div{
        height:100%;
        width:100%;
    } */
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
`;

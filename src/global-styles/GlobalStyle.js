import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        height: 100vh;
        font-family: 'Lexend Deca', sans-serif;
    }

    .root{
        height: 100%;
    }
`;

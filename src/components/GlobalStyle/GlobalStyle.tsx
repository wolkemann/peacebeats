import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
    font-family: 'Bentham', serif;
    font-family: 'Source Sans Pro', sans-serif;
}

body {
    background-color: beige;
}

main {
    margin: 1rem;
}
`;

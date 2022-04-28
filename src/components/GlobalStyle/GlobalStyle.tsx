import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
:root {
    --filmWindowBorderColor: crimson;
}

html {
    font-family: 'Bentham', serif;
    font-family: 'Source Sans Pro', sans-serif;
}

body {
    background-color: beige;
    
}

#root {

}

main {
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding: 0.5rem;
}
`;

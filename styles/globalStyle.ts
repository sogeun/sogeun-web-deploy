import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    font-size: 62.5%;
    }

    a {
    color: inherit;
    text-decoration: none;
    }
    
    h1 {
        ${({ theme }) => theme.typo.H1_B}
    }

    h2 {
        ${({ theme }) => theme.typo.H2_B}
    }

    h3 {
        ${({ theme }) => theme.typo.H3_B}
    }

    @font-face {
    font-family: NotoSansCJK-KR;
    src: url('/fonts/NotoSansCJK-KR-Bold.otf'); 
    font-weight: 700;
    }

    @font-face {
    font-family: NotoSansCJK-KR;
    src: url('/fonts/NotoSansCJK-KR-Regular.otf');
    font-weight: 400;
    }

    * {
    margin: 0;
    padding: 0;
    font-family: NotoSansCJK-KR, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
    border: none;
    box-sizing: border-box;
    }
`;

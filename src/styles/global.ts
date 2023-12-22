import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;
        --blue-light: #6933FF;
        --text-gray: #363F5F;
        --text-body: #969CB3;
        --text-white: #FFFFFF;
        --background: #363F5F;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop) é a padrão para Desktop
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 65.5%;
        }
    }

    body{
        color: var(--text-white);
        -webkit-font-smoothing: antialiased;
        overflow: hidden;
        letter-spacing: -0.025em;
        background: linear-gradient(-45deg, #E52E4D, #6933FF, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        height: 100vh;
        line-height: 1;

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    }


    body, input, textarea, button {
        font-family: 'Source Sans Pro', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
        content: none;
    }

    @-moz-keyframes header {
        0% {
            -moz-transform: translate3d(0,1em,0);
            -webkit-transform: translate3d(0,1em,0);
            -ms-transform: translate3d(0,1em,0);
            transform: translate3d(0,1em,0);
            opacity: 0;
        }

        100% {
            -moz-transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }

    @-webkit-keyframes header {
        0% {
            -moz-transform: translate3d(0,1em,0);
            -webkit-transform: translate3d(0,1em,0);
            -ms-transform: translate3d(0,1em,0);
            transform: translate3d(0,1em,0);
            opacity: 0;
        }

        100% {
            -moz-transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }

    @-ms-keyframes header {
        0% {
            -moz-transform: translate3d(0,1em,0);
            -webkit-transform: translate3d(0,1em,0);
            -ms-transform: translate3d(0,1em,0);
            transform: translate3d(0,1em,0);
            opacity: 0;
        }

        100% {
            -moz-transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }

    @keyframes header {
        0% {
            -moz-transform: translate3d(0,1em,0);
            -webkit-transform: translate3d(0,1em,0);
            -ms-transform: translate3d(0,1em,0);
            transform: translate3d(0,1em,0);
            opacity: 0;
        }

        100% {
            -moz-transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }

    @-moz-keyframes nav-icons {
        0% {
            -moz-transform: translate3d(0,1em,0);
            -webkit-transform: translate3d(0,1em,0);
            -ms-transform: translate3d(0,1em,0);
            transform: translate3d(0,1em,0);
            opacity: 0;
        }

        100% {
            -moz-transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }

    @-webkit-keyframes nav-icons {
        0% {
            -moz-transform: translate3d(0,1em,0);
            -webkit-transform: translate3d(0,1em,0);
            -ms-transform: translate3d(0,1em,0);
            transform: translate3d(0,1em,0);
            opacity: 0;
        }

        100% {
            -moz-transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }

    @-ms-keyframes nav-icons {
        0% {
            -moz-transform: translate3d(0,1em,0);
            -webkit-transform: translate3d(0,1em,0);
            -ms-transform: translate3d(0,1em,0);
            transform: translate3d(0,1em,0);
            opacity: 0;
        }

        100% {
            -moz-transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }

    @keyframes nav-icons {
        0% {
            -moz-transform: translate3d(0,1em,0);
            -webkit-transform: translate3d(0,1em,0);
            -ms-transform: translate3d(0,1em,0);
            transform: translate3d(0,1em,0);
            opacity: 0;
            }

        100% {
            -moz-transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }
`;

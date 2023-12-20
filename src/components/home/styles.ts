import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

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

    @-ms-keyframes nav {
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

    @keyframes nav {
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

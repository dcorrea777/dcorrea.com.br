import styled from "styled-components";

export const Nav = styled.nav`
    margin: 1.5em 0 0 0;
    li {
        -moz-animation: nav-icons 0.5s ease-in-out forwards;
        -webkit-animation: nav-icons 0.5s ease-in-out forwards;
        -ms-animation: nav-icons 0.5s ease-in-out forwards;
        animation: nav-icons 0.5s ease-in-out forwards;
        -moz-backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);

        display: inline-block;
        opacity: 0;
        position: relative;
        top: 0;
        width: 5.35em;

        a {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-touch-callout: none;
            border: 0;
            display: inline-block;
            color: var(--text-white);

            &:hover {
                opacity: 0.79;
                > svg {
                    font-size: 2em;
                }
            }
        }
    }

    li:nth-child(1) {
        -moz-animation-delay: 2.5s;
        -webkit-animation-delay: 2.5s;
        -ms-animation-delay: 2.5s;
        animation-delay: 2.5s;
    }

    li:nth-child(2) {
        -moz-animation-delay: 2.75s;
        -webkit-animation-delay: 2.75s;
        -ms-animation-delay: 2.75s;
        animation-delay: 2.75s;
    }

    li:nth-child(3) {
        -moz-animation-delay: 3s;
        -webkit-animation-delay: 3s;
        -ms-animation-delay: 3s;
        animation-delay: 3s;
    }

    li:nth-child(4) {
        -moz-animation-delay: 3.25s;
        -webkit-animation-delay: 3.25s;
        -ms-animation-delay: 3.25s;
        animation-delay: 3.25s;
    }

    li:nth-child(5) {
        -moz-animation-delay: 3.5s;
        -webkit-animation-delay: 3.5s;
        -ms-animation-delay: 3.5s;
        animation-delay: 3.5s;
    }

    li:nth-child(6) {
        -moz-animation-delay: 3.75s;
        -webkit-animation-delay: 3.75s;
        -ms-animation-delay: 3.75s;
        animation-delay: 3.75s;
    }

    li:nth-child(7) {
        -moz-animation-delay: 4s;
        -webkit-animation-delay: 4s;
        -ms-animation-delay: 4s;
        animation-delay: 4s;
    }

    li:nth-child(8) {
        -moz-animation-delay: 4.25s;
        -webkit-animation-delay: 4.25s;
        -ms-animation-delay: 4.25s;
        animation-delay: 4.25s;
    }

    li:nth-child(9) {
        -moz-animation-delay: 4.5s;
        -webkit-animation-delay: 4.5s;
        -ms-animation-delay: 4.5s;
        animation-delay: 4.5s;
    }

    li:nth-child(10) {
        -moz-animation-delay: 4.75s;
        -webkit-animation-delay: 4.75s;
        -ms-animation-delay: 4.75s;
        animation-delay: 4.75s;
    } 
`;

import styled from "styled-components";

export const Container = styled.header`
    -moz-animation: header 1s 1.24s forwards;
    -webkit-animation: header 1s 1.24s forwards;
    -ms-animation: header 1s 1.24s forwards;
    animation: header 1s 1.24s forwards;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);

    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
    opacity: 0;
    position: relative;
    top: -1em;
    vertical-align: middle;
    width: 90%;

    h1 {
        font-size: 4.5em;
        font-weight: 900;
        letter-spacing: -0.035em;
        line-height: 1em;
    }

    p {
        font-size: 1.25em;
        margin: 0.75em 0 0.25em 0;
        opacity: 0.75;
    }

    .about {
        width: 30vw;
        text-align: justify;
        line-height: 170%;
    }
    .title {
        width: 30vw;
        text-align: justify;
        line-height: 170%;
    }
`;

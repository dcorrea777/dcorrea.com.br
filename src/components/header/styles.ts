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

        @media (min-width: 1080px) {
            font-size: 4.5em;
        }

        @media (max-width: 720px) {
            font-size: 3.5em;
        }
    }

    p {
        font-size: 1.25rem;
        margin: 0.75em 0 0.25rem 0;
        opacity: 0.75;
    }
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1.5rem 0;

    > img {
        border-radius: 50%;
        width: 120px;
        height: 120px;
    }
`;

export const Text = styled.div`
    text-align: justify;
    line-height: 170%;

    @media (min-width: 1080px) {
        width: 30vw;
    }

    @media (max-width: 720px) {
        width: 90vw;
    }
`;

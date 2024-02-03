import styled from "styled-components";
import Image from "next/image";

export const InfosContainer = styled.div `
    z-index: 1;
    position: absolute;
    top: 55%;
    transform: translate(0, -50%);
    left: 4%;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Title = styled(Image) `
    height: auto;
    width: 100%;
    object-fit: contain;
`;


export const Description = styled.p `
    font-size: 1.2vw;
    text-align: start;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);
    margin: calc(5%) 0;
`;

export const ButtonList = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Button = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2vw;
    font-weight: bold;
    border-radius: calc(0.2vw);
    padding: 0.7vw 1.7vw;
    white-space: nowrap;
    cursor: pointer;

`;

export const PlayButton = styled(Button) `
    color: black;
    background-color: white;
    margin-right: 10px;

    &:hover {
        background-color: lightgray;
    }

    @media screen and (max-width: 500px) {
        margin-right: calc(10px - (100% / 50));
    }
`;

export const MoreButton = styled(Button) `
    color: white;
    background-color: rgb(128, 128, 128, 0.6);

    &:hover {
        background-color: rgb(128, 128, 128, 0.4);
    }
`;

export const IconButton = styled(Image) `
    margin-right: 10px;
    height: auto;
    width: 1.8vw;

`;

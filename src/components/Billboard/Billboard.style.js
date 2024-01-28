import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div `
    position: relative;
    height: calc(56.25vw - (92vw / 11));
    //max-height: 100vh;
    width: 100vw;
`;

const style = `
    position: absolute;
    top: 0;
    left: 0;
    height: 56.25vw;
    width: 100%;
    object-fit: cover;
    object-position: top;
    transition: opacity 3s ease;
`;

const styleInvisible = {
    opacity: '0',
    transition: 'opacity 0.2s ease'
};

const styleVisible = {
    opacity: '1',
    transition: 'opacity 3s ease'
};

export const Video = styled.video`
    ${style}
    ${({ props }) => (props ? styleInvisible : styleVisible)}
`;

export const Img = styled(Image)`
    ${style}
    ${({ props }) => (props ? styleVisible : styleInvisible)}
`;

export const Control = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 55%;
    right: 0;
`;

export const Button = styled.button`
    height: 3vw;
    border: 1px solid white;
    border-radius: 50%;
    margin: 0 1.1vw 0 0;

    &:hover {
        background-color: rgb(211, 211, 211, 0.1);
    }
`;

export const Icon = styled(Image)`
    height: 100%;
    width: 100%;
    padding: calc(3vw / 5);
    border-radius: 0%;
`;

export const Classification = styled.div`
    background-color: rgba(51,51,51,.6);
    border: 3px #dcdcdc;
    border-left-style: solid;
    box-sizing: border-box;
    display: flex;
    font-size: 1.1vw;
    height: 2.4vw;
    padding: .5vw 3.5vw .5vw .8vw;
    display: grid;
    place-items: center;
`;


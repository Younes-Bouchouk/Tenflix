import styled from "styled-components";
import Image from "next/image";

export const SliderContainer = styled.div `
    position: relative;
    top: 0;
    min-height: calc(92vw / 11);
    padding: 0 4%;
    display: flex;
    overflow-x: clip;
    background: linear-gradient(transparent 0%, #141414 50%, #141414);
    margin-bottom: 7vw;
`;

export const SliderItem = styled.div (({slots, move}) => ({
    minWidth: `calc(92vw / ${slots})`,
    //height: '100%',
    padding: '0 0.2vw',
    objectFit: 'contain',
    transform: 'translate(' + move * 92 + 'vw )',
    transition: 'transform 2s ease',
    
}));

export const ImgItem = styled(Image) `
    height: 100%;
    width: 100%;
    border-radius: 2px;
    object-fit: cover

`;

export const SliderButton = styled.button `
    height: 100%;
    width: 3.8vw;
    background-color: rgb(0, 0, 0, 0.5);
    border-radius: 2px;
    position: absolute;
    top: 0;
    
`;

export const LeftButton = styled(SliderButton) `
    left: 0;
    transform: rotate(180deg)
`;

export const RightButton = styled(SliderButton) `
    right: 0;
`;

export const ImgButton = styled(Image) `
    z-index:1;
    height: 100%;
    width: 100%;
    opacity: 0;

    &:hover {
        opacity: 1;
    }
`;
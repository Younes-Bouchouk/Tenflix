import React, { useState, useEffect, useRef } from 'react'
import { SliderContainer, SliderItem, ImgItem, LeftButton, RightButton, ImgButton } from './Slider.style'
import dataset from '@/mock/data';



export default function Slider() {
    
    // Récupère tous les tags pour les cards
    const tagsList = dataset.map(data => data.tag)

    const cards = useRef();
    const [slots, setSlots] = useState(0) // Le nombre de cards dans une frame
    const [frames, setFrames] = useState(0) // Le nombre de frames
    const [moveFrame, setMoveFrame] = useState(0) // Permet de savoit sur quelle frame l'on se trouve
    const [screenSize, setScreenSize] = useState( // La largeur de la fenêtre
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        // Calcul le nombre frame par rapport au nombre de cards et de slots 
        cards.current && setFrames((Math.ceil(cards.current.children.length / slots) - 1))
    }, [slots]);

    useEffect(() => {

        if (typeof window !== 'undefined') {
            // Permet d'attribuer un certain nombre de slots en fonction de la largeur de l'écran
            const updateSlots = () => {
                const currentWidth = window.innerWidth
                
                if (currentWidth < 800){
                    setSlots(3)
                } else if (currentWidth < 1100){
                    setSlots(4)
                } else if (currentWidth < 1400){
                    setSlots(5)
                } else {
                    setSlots(6)
                }
                setScreenSize(currentWidth);
            };

            updateSlots()

            // Ajouter un écouteur d'événement pour l'événement de redimensionnement
            window.addEventListener('resize', updateSlots);

            // Nettoyer l'écouteur d'événement lors du démontage du composant
            return () => {
                window.removeEventListener('resize', updateSlots);
            };
        }
    }, []);

    const slideLeft = () => {
        setMoveFrame(moveFrame + 1);
    }

    const slideRight = () => {
        setMoveFrame(moveFrame - 1);
        console.log(moveFrame-1 , '|', frames)
    }

    return (
            <SliderContainer ref={cards}>
            <h1 style={{position:'absolute', top:'-2vw', fontSize:'1.5vw', fontWeight:'normale'}}>Animes à ne pas manquer</h1>
                {tagsList.map(tag =>
                    <SliderItem slots={slots} move={moveFrame} key={tag}>
                        <ImgItem src={'/assets/cards/'+tag+'.jpg'} width={500} height={500} alt={tag} />
                    </SliderItem>
                )}

                {moveFrame < 0 && (
                    <LeftButton className='slideBtn left' onClick={slideLeft}>
                        <ImgButton src={'/icons/slideCards-icon.png'} width={500} height={500} alt='slideL' />
                    </LeftButton>
                )}

                {moveFrame > frames * -1 && (
                    <RightButton className='slideBtn right' onClick={slideRight}>
                        <ImgButton src={'/icons/slideCards-icon.png'} width={500} height={500} alt='slideR' />
                    </RightButton>
                )}

            </SliderContainer>
    )
}

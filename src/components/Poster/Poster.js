import React, {useState, useRef, useEffect} from 'react'
import play from '../../assets/icons/play-icon.svg'
import mute from '../../assets/icons/mute.svg'
import unmute from '../../assets/icons/unmute.svg'
import replay from '../../assets/icons/replay.svg'

import { Button, Classification, Control, Icon, Img, PosterContainer, Video } from './Poster.style'

export default function Poster() {

    // Vérifier si la vidéo est mute
    const [videoMute, setVideoMute] = useState(true)

    // Permet de mute/unmute la vidéo
    const handleVideoMute = () => {
        if (videoMute){
            setVideoMute(false)
        } else {
            setVideoMute(true)
        }
    }

    // Vérifier si la vidéo est finis
    const [videoEnd, setVideoEnd] = useState(false)

    // Permet de changer le status de la vidéo lorqu'elle se termine
    const handleVideoEnd = () => {
        setVideoEnd(true)
    };

    // Applique un référence à la balise vidéo
    const videoRef = useRef(null);

    // Permet de relancer la vidéo
    const startVideo = () => {
        setVideoEnd(false);
    
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    } 

return (
        <PosterContainer>

            <Img
                props={videoEnd}  
                fill 
                src='/image-jjk.png'
                alt='image'
            />
            <Video  
                props={videoEnd}                  
                controls
                ref={videoRef}
                autoPlay
                muted={videoMute}
                onEnded={handleVideoEnd} 
                src='/movie.mp4' 
            /> 

            <Control>
                <Button onClick={videoEnd ? startVideo : handleVideoMute}>
                    <Icon src={videoEnd ? replay : videoMute ? mute : unmute} alt='image'/>
                </Button>
                <Classification>+7</Classification>
            </Control>
 
        </PosterContainer>
    )
}

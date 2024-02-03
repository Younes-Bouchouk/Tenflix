
import React, { useState, useRef, useEffect } from 'react'
import mute from '@/../public/icons/mute.svg'
import unmute from '@/../public/icons/unmute.svg'
import replay from '@/../public/icons/replay.svg'



import { Button, Classification, Control, Icon, Img, Container, Video } from './Billboard.style'
import Infos from './Infos'



export default function Billboard() {

    const [tag,setTag] = useState(null)

    useEffect(() => {
        const tagList = ['snk', 'jjk', 'vls']
        const random = Math.floor(Math.random() * tagList.length)
        setTag(tagList[random])
    },[])

    // Vérifier si la vidéo est mute
    const [videoMute, setVideoMute] = useState(true)
    // Vérifier si la vidéo est finis
    const [videoEnd, setVideoEnd] = useState(false)
    // Applique un référence à la balise vidéo
    const videoRef = useRef(null);    

    // Permet de mute/unmute la vidéo
    const handleVideoMute = () => {
        if (videoMute) {
            setVideoMute(false)
        } else {
            setVideoMute(true)
        }
    }

    // Permet de changer le status de la vidéo lorqu'elle se termine
    const handleVideoEnd = () => {
        setVideoEnd(true)
    };

    // Permet de relancer la vidéo
    const startVideo = () => {
        setVideoEnd(false);

        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }

    return (
        <Container>


            <Img
                props={videoEnd}
                width={500}
                height={500}
                src={'/assets/posters/'+tag+'.png'}
                alt='image'
            />

            <Video
                //controls
                props={videoEnd}
                ref={videoRef}
                autoPlay
                muted={videoMute}
                onEnded={handleVideoEnd}
                src={'/assets/videos/'+tag+'.mp4'}
                alt='video'
            />

            <Control>
                <Button onClick={videoEnd ? startVideo : handleVideoMute}>
                    <Icon src={videoEnd ? replay : videoMute ? mute : unmute} alt='image' />
                </Button>
                <Classification>+7</Classification>
            </Control>

            <Infos tag={tag} />




        </Container>
    )
}

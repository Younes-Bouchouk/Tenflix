import React from 'react'
import { InfosContainer, Title, Description, ButtonList, PlayButton, MoreButton, IconButton } from './Infos.style'
import img from '@/assets/animeLogo/logo-jjk.png'
import play from '@/assets/icons/play-icon.svg'
import more from '@/assets/icons/moreInfos-icon.svg'

export default function Infos() {
    return (
        <>
            <InfosContainer>
                <Title src={img} />

                <Description>
                    JJK c'est cool en vrai
                </Description>

                <ButtonList>
                    <PlayButton>
                        <IconButton src={play} />
                        Lecture
                    </PlayButton>
                    
                    <MoreButton>
                    <IconButton src={more}/>
                        Plus d'infos
                    </MoreButton>
                </ButtonList>

            </InfosContainer>
        </>
    )
}

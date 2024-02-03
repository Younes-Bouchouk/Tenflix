import React, {useEffect, useState} from 'react'
import { InfosContainer, Title, Description, ButtonList, PlayButton, MoreButton, IconButton } from './Infos.style'
import img from '@/../public/assets/titles/jjk.png'
import play from '@/../public/icons/play-icon.svg'
import more from '@/../public/icons/moreInfos-icon.svg'
import dataset from '@/mock/data'


export default function Infos({tag}) {

    // Récupérer dans le dataset la description qui correspond au tag
    const desc = dataset.filter(data => data.tag == tag).map(value => value.description)


    return (
        <>
            <InfosContainer>
                {/* {titleUrl && (<Title src={titleUrl} width={500} height={500} />)} */}
                <Title src={'/assets/titles/'+tag+'.png'} width={500} height={500} alt='title' />
                <Description>
                    {desc}
                </Description>

                <ButtonList>
                    <PlayButton>
                        <IconButton src={play} alt='image'/>
                        Lecture
                    </PlayButton>
                    
                    <MoreButton>
                    <IconButton src={more} alt='image'/>
                        Plus d'infos
                    </MoreButton>
                </ButtonList>

            </InfosContainer>
        </>
    )
}

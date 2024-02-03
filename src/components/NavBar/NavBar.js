import React, { useState, useEffect } from 'react';
import logogo from '@/../public/tenflix.svg'
import search from '@/../public/icons/search-icon.svg'
import notif from '@/../public/icons/notif-icon.svg'
import pdp from '@/../public/assets/pdp.png'
import { NavContainer, Logo, NavList, NavItem, RightMenu, NavIcon, UserMenu, UserLogo, OpenMenu } from './NavBar.style';

const Navbar = () => {
    

    const [scroll, setScroll] = useState(0)

    const changeBackground = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)
      })


    return (
        <NavContainer scroll={scroll}>

            <NavList>
                <Logo id='logo' src={logogo} alt="Logo" />

                <NavItem href={'/'}>Accueil</NavItem>
                <NavItem href={'/'}>Séries</NavItem>
                <NavItem href={'/'}>Films</NavItem>
                <NavItem href={'/'}>Nouveauté les plus regardées</NavItem>
                <NavItem href={'/'}>Ma liste</NavItem>
                <NavItem href={'/'}>Explorer par langue</NavItem>
            </NavList>


            <RightMenu>
                <NavIcon id='search' src={search} alt="icon" />
                <NavIcon id='notif' src={notif} alt="icon" />        

                <UserMenu id='profil'>
                    <UserLogo src={pdp} alt='Profil' />
                    <OpenMenu />
                </UserMenu>
            </RightMenu>
        </NavContainer>
    );
}

export default Navbar;


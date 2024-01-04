import React, { useState, useEffect } from 'react';
import logogo from '../../assets/tenflix.svg'
import search from '../../assets/icons/search-icon.svg'
import notif from '../../assets/icons/notif-icon.svg'
import pdp from '../../assets/eren-pdp.png'
import { NavContainer, Logo, NavList, NavItem, RightMenu, NavIcon, UserMenu, UserLogo, OpenMenu } from './NavBar.style';

const Navbar = () => {

    const [scroll, setScroll] = useState(false)


    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)
      })


    return (
        <NavContainer scroll={scroll}>

            <NavList>
                <Logo id='logo' src={logogo} alt="" />

                <NavItem href={'/'}>Accueil</NavItem>
                <NavItem href={'/'}>Séries</NavItem>
                <NavItem href={'/'}>Films</NavItem>
                <NavItem href={'/'}>Nouveauté les plus regardées</NavItem>
                <NavItem href={'/'}>Ma liste</NavItem>
                <NavItem href={'/'}>Explorer par langue</NavItem>
            </NavList>


            <RightMenu>
                <NavIcon id='search' src={search} alt="" />
                <NavIcon id='notif' src={notif} alt="" />        

                <UserMenu id='profil'>
                    <UserLogo src={pdp} alt='Profil' />
                    <OpenMenu />
                </UserMenu>
            </RightMenu>
        </NavContainer>
    );
}

export default Navbar;


import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const NavContainer = styled.div(({scroll}) => ({
    zIndex: '1',
    backgroundColor: scroll ? '#141414' : 'transparent',
    backgroundImage : scroll && 'linear-gradient( #080808, rgba(255,255,255,0))',
    position: 'fixed',
    height: '68px',
    width: '100vw',
    padding: '0 4%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'background-color 0.5s'
}))

export const Logo = styled(Image)`
    height: 25px;
    width: auto;
    margin-right: 25px;
`;

export const NavList = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavItem = styled(Link)`
    font-size: 14px;
    margin-left: 20px;
    align-self: center; // Quand la fenêtre se rétrécit
    text-align: center; // Pareil
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);

    &:hover {
        color: lightgrey;
        transition: color 0.5s ease;
    }
`;

export const RightMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(Image)`
    height: 22px;
    width: 22px;
    margin-right: 15px;
`;

export const UserMenu = styled.div`
    position: relative;
    height: 32px;
    width: 52px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover span {
        transform: translateX(-50%) rotate(180deg);
    }
`;

export const UserLogo = styled(Image)`
    height: 100%;
    width: 32px;
    border-radius: 2px;
`;

export const OpenMenu = styled.span`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    transform: translate( -50%, 25%);
    transition: 0.3s ease;
`;







// }) `
//     position: fixed;
//     z-index: 1; 
//     height: 68px;
//     width: 100vw;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 0 4%;
// `;
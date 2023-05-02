import styled from "styled-components";
import { Link } from "react-router-dom";
import {RiMenu5Fill} from 'react-icons/ri';

export const NavBarContainer = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    max-width: 100%;
    height: 60px;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;

    @media (max-width: 600px){
        justify-content: end;
    }
`;

export const IconList = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
    align-items: start;

    @media (max-width: 900px){
        width: 30%
    }

    @media (max-width: 600px){
        display: none;
    }
`

export const Alessandra = styled(Link)`
    font-family: "GlacialBold";
    font-size: 1rem;
    text-decoration: none;
    padding-right: 5px;
    color: white;
`;

export const MenuIcon = styled(RiMenu5Fill)`
    color: #FBFAF9;
    transform: scale(2);
    cursor: pointer;
`;


export const DropdownList = styled.div`
    position: absolute;
    list-style: none;
    display: flex;
    flex-direction: column;
    top: 60px;
    right: 3%;
    margin: 0;
    padding: 0;
    width: fit-content;
    background-color: white;
    border-radius: 10px;
    z-index: 1;
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    font-family: 'HKBold';
    font-size: medium;
    padding: 10px;
    color: black;
    text-align: end;
`;

export const IconLink = styled(Link)`
    color: white;
`
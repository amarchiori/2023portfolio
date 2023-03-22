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
`;

export const IconList = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 830px){
        width: auto;
    }
`

export const Alessandra = styled(Link)`
    font-family: "oxtail";
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    padding-right: 5px;
`;

export const MenuIcon = styled(RiMenu5Fill)`
    color: #E84855;
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
    background-color: #000000;
    z-index: 1;
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    font-family: 'Franklin Gothic Condensed';
    font-weight: 400;
    font-size: medium;
    padding: 10px;
    color: white;
    text-align: end;
`;

export const IconLink = styled(Link)`
    color: black;
`
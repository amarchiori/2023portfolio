import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: #000000;
    position: sticky;
    width: 100%;
    max-width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
`
export const Contact = styled(Link)`
    color: white;
    font-weight: 400;
    letter-spacing: .5px;
    text-decoration: none;
`

export const SocialIcons = styled(Link)`
    display: flex;
    width: 10%;
    justify-content: space-around;
`

export const IconLink = styled(Link)`
    color: #E84855;
`
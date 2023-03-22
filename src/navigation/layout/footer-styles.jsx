import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: rgb(27, 27, 27);
    position: sticky;
    width: 100%;
    max-width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
`

export const SocialIcons = styled(Link)`
    display: flex;
    width: 10%;
    justify-content: space-around;

    @media (max-width: 740px) {
      width: 25%;
    }
`

export const IconLink = styled(Link)`
    color: #E84855;
`
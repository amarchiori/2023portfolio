import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectContainer = styled.div`
    padding: 100px 0px;
    width: 100vw;
    max-width: 100vw;

    @media (max-width: 768px){
        padding-left: 10px;
        padding-right: 10px;
    }

`

export const ProjectSnapshot = styled.div`
    display: flex;
    align-items: center;
    max-width: 650px;
    padding: 50px 30px 50px 20px;
    width: 80vw;
    margin: auto;
    margin-bottom: 100px;
    color: white;

    background: rgba( 255, 255, 255, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px ); 
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    img{
        max-width: 280px;
        width: 28vw;
        height: 300px;
        object-fit: contain;
        margin-right: 30px;
        margin-left: -60px;
        border-radius: inherit;
        background-color: white;
        box-shadow: 0 60px 40px rgba(104, 104, 104, 0.4);
    }

    @media (max-width: 740px) {
        flex-direction: column;
        text-align: center;
        padding: 30px;
        width: 100%;
        max-width: 100%;

        img {
            margin: -100px 0px 30px 0px;
            width: 100%;
            max-width: 1000px;
        }
    }
`

export const ProjectContents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
`
export const ShortDescription = styled.p`
    font-family: franklin-gothic-condensed;
    margin-bottom: 30px;
`

export const ProjectLink = styled(Link)`
    text-decoration: none;
    font-family: franklin-gothic-condensed;
    font-weight: 600;
    background-color: #FFD3DB;
    color: #dddddd;
    padding: 10px 20px;
    border-radius: 40px;
    margin: 5px;
`
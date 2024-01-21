import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeadMain = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 0px;

    hr {
        border-color: #1f1e1f;
        height: 1px;
        width: 33%;
        flex-shrink: 1;
    }

`

export const MainTitle = styled.p`
    font-family: "Hackney";
    font-size: 3rem;
    text-transform: uppercase;
    color: #048A81;
`

export const MainContainer = styled.div`
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
    color: #1f1e1f;


    img{
        max-width: 280px;
        width: 28vw;
        height: 300px;
        object-fit: contain;
        margin-right: 30px;
        margin-left: -60px;
        border-radius: inherit;
        background-color: white;
        box-shadow: 0 40px 40px rgba(217, 217, 217, 0.7);
    }

    @media (max-width: 740px) {
        flex-direction: column;
        text-align: center;
        padding: 30px;
        width: 100%;
        max-width: 100%;
        margin-top: 50px;

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
    font-family: "HKRegular";
    margin-bottom: 30px;
`

export const ProjectLink = styled(Link)`
    text-decoration: none;
    font-family: "HKLight";
    background-color: #CBF3F0;
    color: black;
    padding: 10px 20px;
    border-radius: 40px;
    margin: 5px;
`
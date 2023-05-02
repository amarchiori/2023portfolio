import styled from "styled-components";

export const ProjWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 100px 40px;

    @media (max-width: 768px){
        padding: 100px 20px;
    }
`

export const Title = styled.span`
    font-family: oxtail;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    grid-column: span 4 / span 4;

    @media (max-width: 768px){
        font-size: 2rem;
    }
`

export const ToolsUsed = styled.div`
    display: flex;
    grid-column: span 4 / span 4;
    justify-content: center;

    svg{
        transform: scale(2.5);
        color: #FFD3DB;
        margin: 10px 20px;
    }
`

export const Scope = styled.div`
    font-family: franklin-gothic-condensed;
    border: 1.5px solid #FFD3DB;
    border-radius: 20px;
    grid-column: span 4 / span 4;
    margin: 50px 0px;
    padding: 25px;
    display: flex;
    column-gap: 10px;
    flex-direction: row;
    justify-content: space-around;

    span{
        display: block;
        text-transform: uppercase;
        padding-bottom: 1rem;
        font-weight: 600;
        font-size: 1.5rem;
        color: #e6e6e6
    }

    p{
        width: 33%;
        text-align: center;
        color: #d5d5d5;
    }

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;

        p{
            width: 80%;
        }
    }
`

export const ProjImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 50px;
    padding: 50px 0px;
    grid-column: span 4 / span 4;

    div {
       width: 50%;
       padding: 20px;
       display: flex;
       justify-content: center;
       flex: 1 1 100px;

       img {
        max-width: 100%;
       }
    }

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;

        div {
            width: 95%;
            max-width: 100%;
        }
    }
    
`

export const MockupImage = styled.div`
    grid-column: span 4 / span 4;
    display: flex;
    justify-content: center;
`
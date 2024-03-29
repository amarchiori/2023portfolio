import styled from "styled-components";

export const HeadWork = styled.div`
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

export const WorkTitle = styled.p`
    font-family: "Hackney";
    font-size: 3rem;
    text-transform: uppercase;
    color: #048A81;
`

export const WorkContainer = styled.div`
    width: 80vw;
    margin: auto;
    margin-bottom: 100px;
    padding: 60px 50px ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #1f1e1f;
    align-items: start;

    @media (max-width: 740px) {
      padding: 30px 25px ;
      flex-direction: column;
    }
`

export const WorkSection = styled.div`
    width: 40%;
    padding: 0px 0px 15px 0px;

    ul {
        font-family: "HKRegular";
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 1px;
        list-style-type: none;
        
        li {
            position: relative;
            padding-left: 20px; /* add padding to make room for the bullet */
            &:before {
                content: '';
                display: inline-block;
                position: absolute;
                top: 6px;
                left: 0;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #00916E;
            } 
        }
    } 

    @media (max-width: 740px) {
      width: 100%;
    }
`

export const WorkName = styled.h3`
    font-family: "Glacial";
    font-size: 1.3rem;
    text-transform: uppercase;
`
export const TimeFrame = styled.h6`
        font-family: "HKRegular";
        font-size: 14px;
        letter-spacing: 1px;
        margin: 0px;
`
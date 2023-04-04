import styled from "styled-components";

export const WorkContainer = styled.div`
    width: 80vw;
    margin: auto;
    margin-bottom: 100px;
    padding: 60px 50px ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    color: white;
    align-items: start;

    background: rgba( 255, 255, 255, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media (max-width: 740px) {
      padding: 30px 25px ;
      flex-direction: column;
    }
`

export const WorkSection = styled.div`
    width: 40%;
    padding: 0px 0px 15px 0px;

    ul {
        font-family: franklin-gothic-condensed;
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
                background-color: #ffcb48; /* change blue to the desired color */
            } 
        }
    } 

    @media (max-width: 740px) {
      width: 100%;
    }
`

export const WorkName = styled.h3`
    font-family: oxtail;
    font-size: 1.3rem;
    text-transform: uppercase;
`
export const TimeFrame = styled.h6`
        font-family: franklin-gothic-condensed;
        font-size: 14px;
        letter-spacing: 1px;
        margin: 0px;
`
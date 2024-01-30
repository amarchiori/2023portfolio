import styled from "styled-components";

export const CertContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 45vh;
    margin: 0px;
    padding: 20px 0px;

    @media (max-width: 740px) {
        justify-content: space-evenly;
    }
`

export const CertItem = styled.img`
    display: flex;
    justify-content: center;
    max-width: 30%;
    height: auto;
    object-fit: contain;
    padding: 10px 0px;

`
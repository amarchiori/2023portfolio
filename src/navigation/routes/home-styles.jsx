import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HomePage = styled.div`
  padding: 20px 40px;
  max-width: 100%;
  background-image: linear-gradient(to top, #ffb199 0%, #ff0844 100%);

  @media (max-width: 740px) {
    display: block;
    margin: 0px;
    padding-top: 60px ;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;

  @media (max-width: 900px) {
    height: 50vh;
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }
  
`

export const Intro = styled.h1`
  font-family: "Hackney";
  color: white;
  font-size: 4em;
  letter-spacing: 1.5px;
  /* height: 75%;  */
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;

  @media (max-width: 900px) {
    font-size: 2.2rem;
  }

  @media (max-width: 740px) {
    font-size: 3rem;
    height: 100%;
    justify-content: center;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
    height: 100%;
    justify-content: center;
  }
`

export const TopSocialIcons = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
   
  @media (max-width: 740px) {
    margin: 0px;
    align-self: center;
  }
`

export const TopIconLink = styled(Link)`
    color: white;
    padding-top: 20px;
    font-size: 1.4rem;

    @media (max-width: 900px) {
      font-size: 1.4rem;
  }
`
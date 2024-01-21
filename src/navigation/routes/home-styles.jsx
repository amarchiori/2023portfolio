import styled from 'styled-components';

export const HomePage = styled.div`
  padding: 20px 40px;
  max-width: 100%;
  background-image: linear-gradient(to top, #ffb199 0%, #ff0844 100%);

  @media (max-width: 740px) {
    display: block;
    margin: 0px;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 100%;
    max-width: 100%;
  }
  
`

export const Intro = styled.h1`
  font-family: "Hackney";
  color: white;
  font-size: 4em;
  letter-spacing: 1.5px;
  height: 75%;
  display: flex;
  place-items: center;
  text-align: center;
  margin: auto;

  @media (max-width: 740px) {
    font-size: 1.2em;
  }
`
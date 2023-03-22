import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 80vw;
    margin: auto;
    margin-bottom: 100px;
    padding: 60px 50px ;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;

    background: rgba( 255, 255, 255, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const AboutName = styled.h1`
  font-size: 50px;
  margin: 0;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  margin: 16px 0;
  font-family: franklin-gothic-condensed;
  letter-spacing: 1px;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: franklin-gothic-condensed;
  letter-spacing: .1em;
`

export const SkillSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`

export const SkillName = styled.p`
  font-size: 16px;
  margin: 8px 0;
`;

export const ProgressBar = styled.div`
  height: 5px;
  width: 100%;
  background-color: #e8e8e8;
  border-radius: 10px;
`;

export const Progress = styled.div`
  height: 5px;
  border-radius: 10px;
  width: ${props => props.percentage}%;
  transition: width 1s ease-out;
  background: linear-gradient(to right, #ff0004, #ffb700);
`;
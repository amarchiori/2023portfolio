import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 80vw;
    margin: auto;
    margin-bottom: 100px;
    padding: 60px 50px ;
    display: flex;
    flex-direction: column;
    color: #1f1e1f;
    align-items: center;

    @media (max-width: 740px) {
      padding: 30px 25px ;
    }
`

export const AboutName = styled.h1`
  font-size: 44px;
  margin: 0;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-weight: 400;

  @media (max-width: 740px) {
    font-size: 30px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  margin: 16px 0;
  font-family: "HKRegular";
  letter-spacing: 1px;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: "HKRegular";
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
  background: linear-gradient(to right,#FFD3DB, #ff5757);
`;
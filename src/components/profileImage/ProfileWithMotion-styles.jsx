import styled, {keyframes} from 'styled-components';

const moveCircle = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 380px;
  height: 380px;
  background-color: transparent;
  animation: ${moveCircle} 4s infinite;
  
  @media (max-width: 900px) {
    width: 330px;
    height: 330px;
  }

  @media (max-width: 740px) {
    width: 230px;
    height: 230px;
  }
`;

export const ProfilePicture = styled.div`
  position: relative;
  
`;

export const Circle1 = styled(Circle)`
  top: -20px;
  left: -15px;
  border: 4px solid #CBF3F0; 
`;

export const ProfileWithCircles = styled.div`
  position: relative;
  width: 40%;

  @media (max-width: 900px) {
    position: relative;
    display: flex;
    margin: auto;
  }

  @media (max-width: 740px) {
    position: relative;
    display: flex;
    justify-items: center;
    bottom: 80px;
  }

  @media (max-width: 500px) {
    position: relative;
    display: flex;
    justify-items: center;
    bottom: -60px;
    width: 50%;
    margin: auto;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 350px;
  height: 350px;

  @media (max-width: 900px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 740px) {
    width: 200px;
    height: 200px;
  }
`;

export const CirclesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
`;
import Layout from '../../navigation/layout/layout'
import { 
  ProjWrapper, Title, ToolsUsed, Scope, MockupImage
} from "./projects-layout-styles";

import { SiAdobeaftereffects } from 'react-icons/si';

import Poster from '../../assets/PaulRandPoster.jpeg';

function Animation() {

  const animationStyle = {
    padding: "10px",
  };

  return (
    <Layout>
    <ProjWrapper>
        <Title>Paul Rand Animated Poster</Title>
        <ToolsUsed>
          <SiAdobeaftereffects/>
        </ToolsUsed>
        <Scope>
          <p>
            <span>Overview</span>
            This project was an exercise in learning and adapting to new skills, as well as understanding the process of creating a motion graphic. I have never done anything like this before and had to learn how to use after effects, animate, and make sure that everything was lined up correctly. 
          </p>
          <p>
            <span>Challenges</span>
            Animation is not my strong suit. The biggest challenge for me was making sure everything flowed together and didn't look too choppy. I've created a couple of other animation projects in college but this one was the toughest to execute with so many moving parts.
          </p>
          <p>
            <span>Approach</span>
            Have fun. I'll always continue to learn random skills in the design world. Sketch by sketch, then frame by frame, I pushed myself to animate this short poster.
          </p>
        </Scope>
        <MockupImage>
          <iframe 
            src="https://player.vimeo.com/video/292965945?h=f1b8675bc0" 
            width="640" 
            height="360" 
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen
            title='AnimationAd'
          ></iframe>
        </MockupImage>
        <MockupImage>
          <img
            src={Poster}
            alt="RandPoster"
            height={400}
            style={animationStyle}
          />
        </MockupImage>
    </ProjWrapper>
  </Layout>
  )
}

export default Animation
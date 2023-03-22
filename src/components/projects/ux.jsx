import Layout from '../../navigation/layout/layout'
import { 
  ProjWrapper, Title, ToolsUsed, Scope, ProjImages, MockupImage
} from "./projects-layout-styles";

import {SiAdobeindesign, SiAdobexd, SiAdobephotoshop, SiAdobefonts} from 'react-icons/si';

import AttivitaMockup from '../../assets/Attivitamockup.png';
import AttivitaImg1 from '../../assets/AttivitaImg1.png';
import AttivitaImg2 from '../../assets/AttivitaImg2.png';
import AttivitaImg3 from '../../assets/AttivitaImg3.png';
import AttivitaImg4 from '../../assets/AttivitaImg4.png';

function UX() {

  const containerStyle = {
    backgroundColor: 'white',
  };


  return (
    <Layout>
        <ProjWrapper>
            <Title>Attivita App</Title>
            <ToolsUsed>
              <SiAdobeindesign/>
              <SiAdobexd/>
              <SiAdobephotoshop/>
              <SiAdobefonts/>
            </ToolsUsed>
            <Scope>
              <p>
                <span>Overview</span>
                A prototype design for an activity app. The Italian word Attività in english is Activity. A fun playful app search for nearby activities to do in your spare time.
              </p>
              <p>
                <span>Challenges</span>
                User experience was my top priority for this project. By understanding the user, understanding why this use would be on my app, I could create a smooth roadmap for them. THe biggest challenge was not to overcomplicated and overwhelm the screen with too many colors, actions, and information for the user. 
              </p>
              <p>
                <span>Approach</span>
                Below are screeshots from my original case study, outlining my exact process. Field Research included asking the right questions to then create a specific user/persona to "test" my app. Design Process included many sketches and eventually wireframing to outline a road map for the various paths a user could follow. My favorite part of the process for any project is the moodboard of colors, fonts, and logo. 
              </p>
            </Scope>
            <ProjImages>
              <div>
                <img 
                  src={AttivitaImg1} 
                  alt="LogoImage" 
                  height="100%"
                />
              </div>
              <div>
                <img 
                  src={AttivitaImg2} 
                  alt="CookbookImg" 
                  height="100%"
                />
              </div>
              <div>
                <img 
                  src={AttivitaImg3} 
                  alt="CookbookImg" 
                  height="100%"
                />
              </div>
              <div >
                <img
                  src={AttivitaImg4}
                  alt="AttivitaMockup"
                  style={containerStyle}
                />
              </div>
            </ProjImages>
            <MockupImage>
              <img
                src={AttivitaMockup}
                alt="AttivitaMockup"
                width="50%"
              />
            </MockupImage>
        </ProjWrapper>
    </Layout>
  )
}

export default UX;
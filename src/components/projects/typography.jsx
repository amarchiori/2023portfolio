import Layout from '../../navigation/layout/layout'
import { 
  ProjWrapper, Title, ToolsUsed, Scope, ProjImages, MockupImage
} from "./projects-layout-styles";

import {SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop, SiAdobefonts} from 'react-icons/si';

import MonographMockup from '../../assets/MonographMockup.jpg';
import PMNImg1 from '../../assets/PMNImg1.png';
import PMNImg2 from '../../assets/PMNImg2.png';
import PMNImg3 from '../../assets/PMNImg3.png';
import PMNImg4 from '../../assets/PMNImg4.png';


function Typography() {
  return (
    <Layout>
        <ProjWrapper>
            <Title>PMN Caecilia Monograph</Title>
            <ToolsUsed>
              <SiAdobeindesign/>
              <SiAdobeillustrator/>
              <SiAdobephotoshop/>
              <SiAdobefonts/>
            </ToolsUsed>
            <Scope>
              <p>
                <span>Overview</span>
                The aim of this monograph is to present the history and utility of a typeface entitled PMN Caecilia. It contains a brief introduction to the history of the typeface and its usage throughout time. I have also added my own glyphs (new characters in a font) to fully grasp the stucture. These have been implemented throughout the text.
              </p>
              <p>
                <span>Challenges</span>
                The linework for the fontface was tricky to grasp. I had to look closely and critique my new glyphs back and forth to compare with the original fontface. The rounded curves were the hardest to mimick in Illustrator. More than anything, making sure the new glyph had to be seemless in a paragraph with the rest of the font.
              </p>
              <p>
                <span>Approach</span>
                Research, research, research. Writing about the author of PMN Caecilia and understanding the concept behind the font was the easy part. Presenting and executing the font in a different manner was more challenging. I had to make sure to get across the anatomy, functionality, and influence of the font. Lasty, using Adobe InDesign, I combined the writing and visual references to created a structured monograph. 
              </p>
            </Scope>
            <ProjImages>
              <div>
              <img 
                  src={PMNImg1} 
                  alt="LogoImage" 
                  height="100%"
                />
              </div>
              <div>
                <img 
                  src={PMNImg2} 
                  alt="CookbookImg" 
                  height="100%"
                />
              </div>
              <div>
                <img 
                  src={PMNImg3} 
                  alt="CookbookImg" 
                  height="100%"
                />
              </div>
              <div>
                <img 
                  src={PMNImg4} 
                  alt="CookbookImg" 
                  height="100%"
                />
              </div>
            </ProjImages>
            <MockupImage>
              <img
                src={MonographMockup}
                alt="PurePlateMockup"
                width="100%"
              />
            </MockupImage>
        </ProjWrapper>
    </Layout>
  )
}

export default Typography
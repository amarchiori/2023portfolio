import About from "../../components/about/about";
import { HeadMain, MainTitle, MainContainer, ProjectSnapshot, ProjectLink, ProjectContents, ShortDescription } from "./main-styles";

import PurePlateMockup from '../../assets/PurePlateMockup.jpg';
import AttivitaMockup from '../../assets/Attivitamockup.png';
import MonographMockup from '../../assets/MonographMockup.jpg';
import PosterImg from '../../assets/PaulRandPoster.jpeg';
import Work from "../../components/work/work";
import Certs from "../../components/certs/certs";

function MainDisplay() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  
  return (
    <MainContainer>
      <About/>
      <Certs/>
      <Work/>
      <HeadMain>
            <hr/>
                <MainTitle>
                    Projects
                </MainTitle>
            <hr/>
      </HeadMain>
      <ProjectSnapshot>
        <img src={PurePlateMockup} alt="PurePlateMockup"/>
        <ProjectContents>
          <h1>Pure Plate Cookbook</h1>
          <ShortDescription>
          Pure Plate is a cookbook app that allows you to create your own recipe, with ingredients, directions, and a picture. The design started back in 2017 by using Adobe InDesign and Adobe XD. I created a cookbook design and a Brand Book for a ficticious company and used them to start to build out the Pure Plate app. By combining typography, design, and web development skills, this is my most exciting app I've worked on. Feel free to add your own recipe!          </ShortDescription>
          <div>
            <ProjectLink to="https://github.com/amarchiori/pure-plate">Code</ProjectLink>
            <ProjectLink to="https://pure-plate.vercel.app/">Live</ProjectLink>
            <ProjectLink to='/frontend' onClick={handleClick} >Case Study</ProjectLink>
          </div>
        </ProjectContents>
      </ProjectSnapshot>
      <ProjectSnapshot>
        <img src={AttivitaMockup} alt="AttivitaMockup"/>
        <div>
          <h1>Attivita App</h1>
          <ShortDescription> A prototype design for an activity app. The Italian word Attività in english is Activity. A fun playful app search for nearby activities to do in your spare time.
          </ShortDescription>
          <div>
            <ProjectLink to="https://xd.adobe.com/view/c62ef9fe-b401-4f90-ae2f-d30c56857fc7-937d">Prototype</ProjectLink>
            <ProjectLink to='/uxui' onClick={handleClick}>Case Study</ProjectLink>
          </div>
        </div>
      </ProjectSnapshot>
      <ProjectSnapshot>
        <img src={MonographMockup} alt="MonographMockup" height="100%"/>
        <div>
          <h1>PNM Caecilia Monograph</h1>
          <ShortDescription>The aim of this monograph is to present the history and utility of a typeface entitled PMN Caecilia. It contains a brief introduction to the history of the typeface and its usage throughout time. I have also added my own glyphs (new characters in a font) to fully grasp the stucture. These have been implemented throughout the text. </ShortDescription>
          <div>
            <ProjectLink to="https://www.behance.net/gallery/73909469/Monograph">Live</ProjectLink>
            <ProjectLink to='/typography' onClick={handleClick} >Case Study</ProjectLink>
          </div>
        </div>
      </ProjectSnapshot>
      <ProjectSnapshot>
        <img src={PosterImg} alt="RandPosterImg"/>
        <div>
          <h1>Animated Poster</h1>
          <ShortDescription>This project was an exercise in learning and adapting to new skills, as well as understanding the process of creating a motion graphic. I have never done anything like this before and had to learn how to use after effects, animate, and make sure that everything was lined up correctly. The biggest challenge for me was making sure everything flowed together.</ShortDescription>
          <div>
            <ProjectLink to='/animation' onClick={handleClick} >Case Study</ProjectLink>
          </div>
        </div>
      </ProjectSnapshot>
    </MainContainer>
  )
}

export default MainDisplay;
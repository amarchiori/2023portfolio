import Layout from '../../navigation/layout/layout'
import { 
  ProjWrapper, Title, ToolsUsed, Scope, ProjImages, MockupImage
} from "./projects-layout-styles"

import {TbBrandNextjs} from 'react-icons/tb' ;
import {SiFirebase, SiTailwindcss} from 'react-icons/si';
import {DiFirebase} from 'react-icons/di'

import PurePlateMockUp from '../../assets/PurePlateMockup.jpg'
import cookbookImg from '../../assets/cookbookImg.jpg'
import LogoImage from '../../assets/LogoImage.jpg'


function Frontend() {
  return (
    <Layout>
        <ProjWrapper>
            <Title>Pure Plate Cookbook</Title>
            <ToolsUsed>
              <TbBrandNextjs />
              <SiFirebase />
              <DiFirebase />
              <SiTailwindcss />
            </ToolsUsed>
            <Scope>
              <p>
                <span>Overview</span>
                Pure Plate is a cookbook app that allows you to create your own recipe, with ingredients, directions, and a picture. The design started back in 2017 by using Adobe InDesign and Adobe XD. I created a cookbook design and a Brand Book for a ficticious company and used them to start to build out the Pure Plate app. By combining typography, design, and web development skills, this project encompasses all my strengths. Feel free to add your own recipe!
              </p>
              <p>
                <span>Challenges</span>
                Working with a new framework. I understand React.js and had to transfer my knowledge to using Next.js. One of the biggest challenges I encountered was using Images. Nextjs has their own optimization and I had to take those parameters into account. 
              </p>
              <p>
                <span>Approach</span>
                By creating a wireframing, I could visualize a path for coding. I started with building out the database from Firebase then created authentication for sign in and sign up. Added in ContextAPI to handle state management, and little by little I designed the UI. Lastly, made sure all of the CRUD functions worked and added User Favorites and User Recipes lists to their profile. 
              </p>
            </Scope>
            <ProjImages>
              <div>
              <img 
                  src={LogoImage} 
                  alt="LogoImage" 
                  height="100%"
                />
              </div>
              <div>
                <img 
                  src={cookbookImg} 
                  alt="CookbookImg" 
                  height="100%"
                />
              </div>
            </ProjImages>
            <MockupImage>
              <img
                src={PurePlateMockUp}
                alt="PurePlateMockup"
                width="100%"
              />
            </MockupImage>
        </ProjWrapper>
    </Layout>
  )
}

export default Frontend
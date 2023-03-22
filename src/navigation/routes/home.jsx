import Layout from "../layout/layout";
import { HomePage, Intro, IntroContainer } from "./home-styles";
import ProfileWithMotion from "../../components/profileImage/ProfileWithMotion";
import TypeIt from "typeit-react";
import ProjectsSnapshot from "./projects-snapshot";


function Home() {
  return (
    <Layout>
        <HomePage>
        <IntroContainer>     
            <Intro>
            <TypeIt
                options={{
                strings: ["Graphic Designer", "Frontend Developer", "Artist"],
                speed: 75,
                loop: false,
                }}
            />
            </Intro>
            <ProfileWithMotion/>
        </IntroContainer>
        </HomePage>
        <ProjectsSnapshot />
    </Layout>
  )
}

export default Home
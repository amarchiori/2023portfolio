import Layout from "../layout/layout";
import { HomePage, Intro, IntroContainer } from "./home-styles";
import ProfileWithMotion from "../../components/profileImage/ProfileWithMotion";
import TypeIt from "typeit-react";
import MainDisplay from "./main";


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
        <MainDisplay />
    </Layout>
  )
}

export default Home
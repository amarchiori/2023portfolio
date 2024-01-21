import Layout from "../layout/layout";
import { HomePage, Intro, IntroContainer, TopIconLink, TopSocialIcons } from "./home-styles";
import ProfileWithMotion from "../../components/profileImage/ProfileWithMotion";
import TypeIt from "typeit-react";
import MainDisplay from "./main";
import { FaGithub, FaLinkedinIn, FaSalesforce } from "react-icons/fa";


function Home() {
  return (
    <Layout>
        <HomePage>
        <IntroContainer>     
            <Intro>
            <TypeIt
                options={{
                strings: ["Web Designer", "Salesforce Associate", "Tech Enthusiast"],
                speed: 75,
                loop: false,
                cursor: false,
                }}
            />
            <TopSocialIcons>
              <TopIconLink to='https://www.linkedin.com/in/alessandra-marchiori/'>
                <FaLinkedinIn/>
              </TopIconLink>
              <TopIconLink to='https://www.salesforce.com/trailblazer/alessandramarchiori'>
                <FaSalesforce/>
              </TopIconLink>
              <TopIconLink to='https://github.com/amarchiori'>
                <FaGithub/>
              </TopIconLink>
            </TopSocialIcons>
            </Intro>
            <ProfileWithMotion/>
        </IntroContainer>
        </HomePage>
        <MainDisplay />
    </Layout>
  )
}

export default Home
import ButtonMailto from '../../components/mailtoButton'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { RiBehanceFill } from 'react-icons/ri'
import { FooterContainer, SocialIcons, IconLink} from "./footer-styles"


function Footer() {
  return (
    <FooterContainer>
        <ButtonMailto label="Contact" mailto="mailto:amarchiori.web@gmail.com"/>
        <SocialIcons>
            <IconLink to='https://www.linkedin.com/in/alessandra-marchiori/'>
              <FaLinkedinIn/>
            </IconLink>
            <IconLink to='https://github.com/amarchiori'> 
              <FaGithub /> 
            </IconLink>
            <IconLink to='https://www.behance.net/alessm96'>
              <RiBehanceFill />
            </IconLink>     
        </SocialIcons>
    </FooterContainer>
  )
}

export default Footer
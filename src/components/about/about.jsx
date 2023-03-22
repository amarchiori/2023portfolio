import { 
  AboutContainer, 
  AboutName, 
  AboutDescription, 
  SkillContainer,
  SkillSection, 
  SkillName, 
  ProgressBar, 
  Progress
} from "./about-styles"

const About = () => {
  const DesignSkills = [    
    { name: 'InDesign', percentage: 75 },   
    { name: 'Photogrpahy', percentage: 75 }, 
    { name: 'Branding', percentage: 45 },
    { name: 'UX', percentage: 85 },    
    { name: 'UI', percentage: 80 },    
    { name: 'Typography', percentage: 90 },    
    { name: 'Illustrator', percentage: 55 }, 
  ];

  const FrontEndSkills = [    
    { name: 'HTML', percentage: 80 },    
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 70 },    
    { name: 'ReactJS', percentage: 70 },    
    { name: 'SQL', percentage: 55 }, 
    { name: 'Firebase', percentage: 60 }, 
    { name: 'TailwindCSS', percentage: 70 },   
  ];


  return (
    <AboutContainer>
        <AboutName>Alessandra Marchiori</AboutName>
        <AboutDescription>Design consultant with 3 years of experience at ShelfGenie with strong communication skills. Proven ability to create user-friendly and intuitive UI/ UX designs for web applications. Seeking a position as a Frontend Developer to leverage experience and skills to create engaging and innovative digital solutions.</AboutDescription>
        <SkillContainer >
          <SkillSection>
            {DesignSkills.map(skill => (
              <div key={skill.name}>
                <SkillName>{skill.name}</SkillName>
                <ProgressBar>
                  <Progress percentage={skill.percentage} />
                </ProgressBar>
              </div>
            ))}
          </SkillSection>
          <SkillSection>
            {FrontEndSkills.map(skill => (
              <div key={skill.name}>
                <SkillName>{skill.name}</SkillName>
                <ProgressBar>
                  <Progress percentage={skill.percentage} />
                </ProgressBar>
              </div>
            ))}
          </SkillSection>
        </SkillContainer> 
    </AboutContainer>
  )
}

export default About
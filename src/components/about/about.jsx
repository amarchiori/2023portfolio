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
    { name: 'JavaScript', percentage: 60 },    
    { name: 'ReactJS', percentage: 60 },    
    { name: 'SQL', percentage: 35 }, 
    { name: 'Firebase', percentage: 40 }, 
    { name: 'TailwindCSS', percentage: 60 },   
  ];


  return (
    <AboutContainer>
        <AboutName>Alessandra Marchiori Acoba</AboutName>
        <AboutDescription>BFA in Graphic Design and have experience with UI/UX design. I am highly motivated with years of experience in customer service and e-commerce administration. I've successfully managed a team of 3 while also doing admin work for an e-commerce company. Became an associate to manager of a cake boutique within 1 year. I am currently working as a self-employed design sales consultant for the past 3 years, presenting persuasive presentations using 3D CAD software. I am proficient in React and learning Next.js and always striving to learn new skills.</AboutDescription>
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
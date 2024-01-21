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
  const SoftSkills = [    
    { name: 'Customer Service', percentage: 90 },   
    { name: 'Communication', percentage: 95 }, 
    { name: 'Time Management', percentage: 85 },
    { name: 'Project Efficiency', percentage: 85 },    
    { name: 'Problem Solving', percentage: 80 },    
    { name: 'Sales Presentation', percentage: 70 },    
    { name: 'Multi-taksing', percentage: 70 }, 
  ];

  const TechSkills = [    
    { name: 'Salesforce', percentage: 75 },    
    { name: 'HTML/CSS', percentage: 80 },
    { name: 'Web Development', percentage: 60 },    
    { name: 'SQL', percentage: 35 },    
    { name: 'Data Analysis', percentage: 35 }, 
    { name: 'Adobe Creative Suite', percentage: 80 }, 
    { name: 'UX/UI', percentage: 60 },   
  ];


  return (
    <AboutContainer>
        <AboutName>Alessandra Marchiori Acoba</AboutName>
        <AboutDescription>BFA in Graphic Design Passionate about leveraging technology to drive business success, I am a detail-oriented and Certified Salesforce Associate with a proven track record as a Sales Representative for the past 3 years. My commitment to delivering exceptional customer service has been a key driver in exceeding sales targets.</AboutDescription>
        <SkillContainer >
          <SkillSection>
            {SoftSkills.map(skill => (
              <div key={skill.name}>
                <SkillName>{skill.name}</SkillName>
                <ProgressBar>
                  <Progress percentage={skill.percentage} />
                </ProgressBar>
              </div>
            ))}
          </SkillSection>
          <SkillSection>
            {TechSkills.map(skill => (
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
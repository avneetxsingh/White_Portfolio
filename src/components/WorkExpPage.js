import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { lightTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

import subway from '../assets/company/subway.png';
import ut from '../assets/company/ut.png';
import softage from '../assets/company/softage.png';
import kpit from '../assets/company/kpit.png';
import headstarter from '../assets/company/headstarter.png';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 99vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

const ExperienceContainer = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 1rem;
  width: 100%;
  margin: 0rem 0;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.3s ease;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: 1rem;
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  ul, p {
    margin-left: 1rem;
  }
`;

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: lightTheme.body,
          color: lightTheme.text,
          border: `2px solid ${lightTheme.text}`,
          transition: 'all 0.3s ease',
          fontFamily: 'Ubuntu Mono, monospace'
        }}
        contentArrowStyle={{ borderRight: `7px solid ${lightTheme.text}` }}
        location={experience.location}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <img
              src={experience.icon}
              alt={experience.company_name}
              style={{ width: '60%', height: '60%', objectFit: 'contain' }}
            />
          </div>
        }
      >
        <Main>
          <Title>{experience.title}</Title>
          <Description>
            <strong style={{ display: 'flex', justifyContent: 'center' }}>{experience.company_name}</strong>
            <p style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ fontWeight: 'bold' }}>{experience.location}</span>
              {/* <span style={{ fontWeight: 'bold' }}>{experience.date}</span> */}
            </p>
          </Description>
          <Description>
            <ul>
              {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`}>{point}</li>
              ))}
            </ul>
          </Description>
        </Main>
      </VerticalTimelineElement>
    );
  };  

const experiences = [
  
{
    title: "IT Support Specialist (Level 2)",
    company_name: "The University of Toledo College of Engineering",
    icon: ut,
    iconBg: "rgba(0, 0, 0, 0.15)",
    location: "Toledo, OH",
    date: "October 2023 – Present",
    points: [
      "Provide technical support to over 500+ university members by installing and configuring desktops and laptops, ensuring compliance with cybersecurity, and licensing agreements.",
      "Provided comprehensive technical support to faculty, staff, and students, ensuring the smooth operation of the College of Engineering's IT infrastructure.",
      "Streamlined high-volume IT ticket queue, reducing resolution time, and enhancing overall user satisfaction.",
      "Installation and maintenance of computer systems, prioritizing licensing compliance and ensuring the reliability and security of the College of Engineering's technical infrastructure.",
    ],
},

{
  title: " Software Developer Intern",
  company_name: "KPIT Technologies Limited",  
  icon: kpit,
  iconBg: "rgba(0, 0, 0, 0.50)",
  location: "Novi, MI",
  date: "May 2024 – August 2024",
  points: [
    "Gained in-depth understanding of OEM bootloader specifications for impact analysis on security features. Implemented robust security enhancements to strengthen system integrity (confidentiality maintained).",
    "Independently delivered 3 complex data integration & report automation systems in Python (pandas, GUI) under tight deadlines and ongoing client interaction.",
    "Collaborated with cross-functional teams to develop and implement new features, resulting in a 20% increase in system efficiency.",
    "Leveraged pandas and other libraries to effectively clean, transform, and analyze large datasets. Created insightful visualizations (e.g., charts, graphs) for clear communication of complex data.",
  ]
},
{
  title: "Software Engineering Fellow",
  company_name: "Headstarter AI",
  icon: headstarter,
  iconBg: "rgba(0, 0, 0, 0.50)",
  location: "Remote",
  date: "July 2024 – September 2024",
  points: [
    "Built 5+ Al apps and APIs using NextJS, OpenAl, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users",
    "Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns",
    "Collaborated with product managers, designers, and engineers to deliver high-quality products",
    "Implemented unit tests and integration tests for 100% code coverage and 0% bugs in production",
  ]
},

{
  title: "Web Developer Intern",
  company_name: "Softage Information Technology Limited",
  icon: softage,
  iconBg: "rgba(0, 0, 0, 0.15)",
  location: "Gurugram, India",
  date: "June 2023 – July 2023",
  points: [
    "Developing and maintaining web applications using HTML and other related technologies.",
    "Collaborated cross-functionally with engineering teams, contributing to a remarkable 30% reduction in system downtime and a subsequent boost in overall productivity.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
  ],
},

{
  title: "Student Manager",
  company_name: "Chartwells Higher Education Services",
  icon: subway,
  iconBg: "rgba(0, 0, 0, 0.15)",
  location: "Toledo, OH",
  date: "September 2022 – September 2023",
  points: [
    "Provided outstanding customer service with a profound understanding of menu items, resulting in a consistently high 4 out of 5 satisfaction rating.",
    "Facilitated the smooth onboarding of new team members by offering comprehensive training and explanations, ensuring a 50% reduction in onboarding time.",
    "Demonstrated effective collaboration within the team, fostering a positive and customer-focused environment.",
    "Successfully balanced managerial responsibilities with a hands-on approach to customer service.",
  ],
},
];

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />

        <ExperienceContainer>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </ExperienceContainer>

        <BigTitle text="EXPERIENCE" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;

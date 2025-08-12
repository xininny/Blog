import {
  SectionWrapper,
  HeaderSection,
  Title,
  DownloadButton,
  StyledCVSection,
  SectionTitle,
  DescriptionList,
  TechStackContainer,
  TechStack,
  TechBadge,
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillList,
  SkillTag,
  CertificationGrid,
  CertificationCard,
  CertificationName,
  CertificationIssuer,
  CertificationDate,
  CredentialId,
  PlaceholderText,
  EducationGrid,
  EducationCard,
  EducationHeader,
  DegreeTitle,
  InstitutionName,
  EducationPeriod,
  MajorInfo,
  BasicInfoSection,
  BasicInfoGrid,
  InfoItem,
  InfoLabel,
  PersonName,
  ContactInfo,
  ExperienceGrid,
  ExperienceCard,
  ExperienceCardHeader,
  ExperienceTitle,
  ExperienceCompany,
  ExperienceDetails,
  ProjectsGrid,
  ProjectCard,
  ProjectHeader,
  ProjectTitleSection,
  ProjectLogo,
  ProjectTitle,
  ProjectYear,
  ProjectRole,
  ProjectDescription,
  ProjectLinks,
  ProjectLink,
} from "./CVSection.styles"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
}

interface Project {
  year: string
  title: string
  role: string
  description: string
  technologies: string[]
  logo?: string
  github?: string
  webStore?: string
}

interface Education {
  degree: string
  institution: string
  // location: string
  period: string
  major: string
  // description?: string
}

interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  link?: string
}

const CVSection: React.FC = () => {
  const experience: Experience[] = [
    {
      title: "Undergraduate Research Intern",
      company: "SecAI Lab, Sungkyunkwan University",
      location: "Seoul, South Korea",
      period: "July 2024 - March 2025",
      description: [],
      technologies: [],
    },
  ]

  const education: Education[] = [
    {
      degree: "Master",
      institution: "Sungkyunkwan University",
      period: "2025 - 2027",
      major: "Computer Science and Engineering (SecAI Lab)",
    },
    {
      degree: "Bachelor",
      institution: "The Catholic University of Korea",
      period: "2021 - 2025",
      major: "Computer Science and Information Engineering",
    },
  ]

  const projects: Project[] = [
    {
      year: "2024",
      title: "QR Reader & Generator",
      role: "Frontend",
      description:
        "Simple chrome extension for generating and decoding QR codes.",
      technologies: ["HTML", "CSS"],
      logo: "/image/projects/qr-reader-generator-logo.png",
      webStore:
        "https://chromewebstore.google.com/detail/qr-reader-generator/ijpcbkmfaeepjimbaadgiafalbakolmg",
      github: "https://github.com/xininny/QR-Reader-Generator",
    },
    {
      year: "2024",
      title: "SecQR",
      role: "Frontend & Backend",
      description:
        "Chrome extension for QR scanning and malicious URL detection.",
      technologies: ["HTML", "CSS", "Flask"],
      logo: "/image/projects/secqr-logo.png",
      github: "https://github.com/xininny/SecQR",
    },
    {
      year: "2024",
      title: "Share-it",
      role: "Frontend",
      description:
        "Campus item rental website accessible to students via school email.",
      technologies: ["React", "JavaScript"],
      logo: "/image/projects/share-it-logo.png",
      github: "https://github.com/xininny/Share-it-frontend",
    },

    {
      year: "2023",
      title: "GaRiDa",
      role: "Frontend & Backend",
      description: "Personal information masking app for safe SNS usage.",
      technologies: ["Flutter", "Python", "FastAPI", "Docker"],
      logo: "/image/projects/garida-logo.png",
      github: "https://github.com/orgs/i4-AI-for-Security/repositories",
    },
  ]

  const certifications: Certification[] = [
    // Add certifications as needed
  ]

  const skills = {
    Programming: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    Frontend: ["React", "Next.js", "HTML/CSS", "Emotion", "Styled Components"],
    Backend: ["Node.js", "REST APIs", "Database Design"],
    "Tools & Platforms": ["Git", "VS Code", "Notion API", "Vercel", "GitHub"],
    Research: ["Academic Writing", "Data Analysis", "Literature Review"],
  }

  return (
    <SectionWrapper>
      <HeaderSection>
        <Title>CV</Title>
        <DownloadButton
          href="/cv2.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF
        </DownloadButton>
      </HeaderSection>

      {/* Basic Information Section */}
      <BasicInfoSection>
        <BasicInfoGrid>
          <PersonName>Mijin Jeon</PersonName>
          <InfoItem>
            <InfoLabel>Current:</InfoLabel>
            <span>Master's Student</span>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Email:</InfoLabel>
            <span>xininny AT gmail.com</span>
          </InfoItem>
        </BasicInfoGrid>
      </BasicInfoSection>

      {/* Education Section */}
      <StyledCVSection>
        <SectionTitle>Education</SectionTitle>
        {education.length > 0 ? (
          <EducationGrid>
            {education.map((edu, index) => (
              <EducationCard key={index}>
                <EducationHeader>
                  <DegreeTitle>{edu.degree}</DegreeTitle>
                  <InstitutionName>{edu.institution}</InstitutionName>
                  <EducationPeriod>{edu.period}</EducationPeriod>
                </EducationHeader>
                <MajorInfo>{edu.major}</MajorInfo>
              </EducationCard>
            ))}
          </EducationGrid>
        ) : (
          <PlaceholderText>
            Education information will be added here.
          </PlaceholderText>
        )}
      </StyledCVSection>

      {/* Experience Section */}
      <StyledCVSection>
        <SectionTitle>Experience</SectionTitle>
        {experience.length > 0 ? (
          <ExperienceGrid>
            {experience.map((exp, index) => (
              <ExperienceCard key={index}>
                <ExperienceCardHeader>
                  <ExperienceTitle>{exp.title}</ExperienceTitle>
                  <ExperienceCompany>{exp.company}</ExperienceCompany>
                  <ExperienceDetails>
                    <span>{exp.location}</span>
                  </ExperienceDetails>
                  <ExperienceDetails>
                    <span>{exp.period}</span>
                  </ExperienceDetails>
                </ExperienceCardHeader>
                {exp.description.length > 0 && (
                  <DescriptionList>
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </DescriptionList>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <TechStack>
                    {exp.technologies.map((tech, idx) => (
                      <TechBadge key={idx}>{tech}</TechBadge>
                    ))}
                  </TechStack>
                )}
              </ExperienceCard>
            ))}
          </ExperienceGrid>
        ) : (
          <PlaceholderText>
            Experience information will be added here.
          </PlaceholderText>
        )}
      </StyledCVSection>

      {/* Projects Section */}
      <StyledCVSection>
        <SectionTitle>Projects</SectionTitle>
        {projects.length > 0 ? (
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectHeader>
                  <ProjectTitleSection>
                    {project.logo && (
                      <ProjectLogo
                        src={project.logo}
                        alt={`${project.title} logo`}
                      />
                    )}
                    <ProjectTitle>{project.title}</ProjectTitle>
                  </ProjectTitleSection>
                  <ProjectYear>{project.year}</ProjectYear>
                </ProjectHeader>
                <ProjectRole>{project.role}</ProjectRole>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStackContainer>
                  <TechStack>
                    {project.technologies.map((tech, idx) => (
                      <TechBadge key={idx}>{tech}</TechBadge>
                    ))}
                  </TechStack>
                  {(project.webStore || project.github) && (
                    <ProjectLinks>
                      {project.webStore && (
                        <ProjectLink
                          href={project.webStore}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Chrome Store
                        </ProjectLink>
                      )}
                      {project.github && (
                        <ProjectLink
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  )}
                </TechStackContainer>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        ) : (
          <PlaceholderText>
            Projects information will be added here.
          </PlaceholderText>
        )}
      </StyledCVSection>

      {/* Skills Section */}
      {/* <StyledCVSection>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsGrid>
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <SkillList>
                {skillList.map((skill, idx) => (
                  <SkillTag key={idx}>{skill}</SkillTag>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </StyledCVSection> */}

      {/* Certifications Section */}
      {/* <StyledCVSection>
        <SectionTitle>Certifications</SectionTitle>
        {certifications.length > 0 ? (
          <CertificationGrid>
            {certifications.map((cert, index) => (
              <CertificationCard key={index}>
                <CertificationName>{cert.name}</CertificationName>
                <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                <CertificationDate>{cert.date}</CertificationDate>
                {cert.credentialId && (
                  <CredentialId>ID: {cert.credentialId}</CredentialId>
                )}
              </CertificationCard>
            ))}
          </CertificationGrid>
        ) : (
          <PlaceholderText>
            Certification information will be added here.
          </PlaceholderText>
        )}
      </StyledCVSection> */}
    </SectionWrapper>
  )
}

export default CVSection

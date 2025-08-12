import { CONFIG } from "../../../site.config"
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react"
import {
  SectionWrapper,
  ProfileHeader,
  ProfileImage,
  HeaderInfo,
  Name,
  Role,
  Bio,
  ContentSection,
  SectionTitle,
  Paragraph,
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillList,
  SocialIcons,
  SocialLink,
} from "./AboutSection.styles"

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper>
      <ProfileHeader>
        <ProfileImage src={CONFIG.profile.image} alt={CONFIG.profile.name} />
        <HeaderInfo>
          <Name>{CONFIG.profile.name}</Name>
          <Role>{CONFIG.profile.role}</Role>
          <Bio>
            <SocialIcons>
              <SocialLink
                href={`mailto:${CONFIG.profile.email}`}
                title={`Email: ${CONFIG.profile.email}`}
              >
                <IconMail size={20} />
              </SocialLink>
              {CONFIG.profile.linkedin && (
                <SocialLink
                  href={`https://linkedin.com/in/${CONFIG.profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                >
                  <IconBrandLinkedin size={20} />
                </SocialLink>
              )}
              {CONFIG.profile.github && (
                <SocialLink
                  href={`https://github.com/${CONFIG.profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                >
                  <IconBrandGithub size={20} />
                </SocialLink>
              )}
            </SocialIcons>
          </Bio>
        </HeaderInfo>
      </ProfileHeader>

      <ContentSection>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>
          I am a Master’s student in Computer Science and Engineering at
          Sungkyunkwan University (SecAI Lab), conducting research at the
          intersection of cybersecurity and artificial intelligence. Currently,
          my work focuses on binary reversing and its applications in security
          analysis.
        </Paragraph>

        {/* <Paragraph>Hmmm</Paragraph> */}

        {/* <SectionTitle>Skills & Expertise</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <CategoryTitle>Security</CategoryTitle>
            <SkillList>
              <li>Penetration Testing</li>
              <li>Vulnerability Assessment</li>
              <li>Security Architecture</li>
              <li>Incident Response</li>
            </SkillList>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Development</CategoryTitle>
            <SkillList>
              <li>Full Stack Development</li>
              <li>System Design</li>
              <li>DevOps & CI/CD</li>
              <li>API Development</li>
            </SkillList>
          </SkillCategory>
        </SkillsGrid> */}
      </ContentSection>
    </SectionWrapper>
  )
}

export default AboutSection

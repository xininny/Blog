import styled from "@emotion/styled"

export const SectionWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray12};
`

export const DownloadButton = styled.a`
  background: ${({ theme }) => theme.colors.gray12};
  color: ${({ theme }) => theme.colors.gray1};
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray11};
    transform: translateY(-1px);
  }
`

export const StyledCVSection = styled.div`
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.colors.gray8};
  }
`

export const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.75rem;
    top: 1rem;
    bottom: 1rem;
    width: 2px;
    background: ${({ theme }) => theme.colors.gray6};
  }
`

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-start;
`

export const TimelineMarker = styled.div`
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray12};
  border: 2px solid ${({ theme }) => theme.colors.gray1};
  z-index: 1;
`

export const TimelineContent = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray2};
  padding: 1.5rem;
  border-radius: 8px;
  margin-left: 1rem;
`

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0;
`

export const Period = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray10};
  font-weight: 500;
  white-space: nowrap;
`

export const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray10};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const CompanyName = styled.span`
  font-weight: 500;
`

export const Location = styled.span`
  font-style: italic;
`

export const DescriptionList = styled.ul`
  margin: 0 0 1rem 0;
  padding-left: 1.2rem;
  
  li {
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors.gray11};
    line-height: 1.5;
  }
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray11};
  line-height: 1.6;
  margin: 0;
`

export const TechStackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const TechBadge = styled.span`
  background: ${({ theme }) => theme.colors.gray4};
  color: ${({ theme }) => theme.colors.gray11};
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-weight: 500;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`

export const SkillCategory = styled.div`
  background: ${({ theme }) => theme.colors.gray2};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const CategoryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0 0 1rem 0;
`

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const SkillTag = styled.span`
  background: ${({ theme }) => theme.colors.gray4};
  color: ${({ theme }) => theme.colors.gray11};
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 500;
`

export const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`

export const CertificationCard = styled.div`
  background: ${({ theme }) => theme.colors.gray2};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const CertificationName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0 0 0.5rem 0;
`

export const CertificationIssuer = styled.div`
  color: ${({ theme }) => theme.colors.gray10};
  font-weight: 500;
  margin-bottom: 0.25rem;
`

export const CertificationDate = styled.div`
  color: ${({ theme }) => theme.colors.gray10};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

export const CredentialId = styled.div`
  color: ${({ theme }) => theme.colors.gray9};
  font-size: 0.8rem;
  font-family: monospace;
`

export const PlaceholderText = styled.p`
  color: ${({ theme }) => theme.colors.gray10};
  font-style: italic;
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
`

export const EditNote = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray9};
  background: ${({ theme }) => theme.colors.gray3};
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  margin-top: 2rem;
  
  code {
    background: ${({ theme }) => theme.colors.gray4};
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: monospace;
  }
`

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
`

export const EducationCard = styled.div`
  background: ${({ theme }) => theme.colors.gray1};
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`

export const EducationHeader = styled.div`
  margin-bottom: 1rem;
`

export const DegreeTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`

export const InstitutionName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  margin: 0 0 0.25rem 0;
`

export const EducationPeriod = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray9};
  font-weight: 500;
`

export const MajorInfo = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray11};
  line-height: 1.5;
  margin-top: 1rem;
`

// Basic Information Styles
export const BasicInfoSection = styled.div`
  background: ${({ theme }) => theme.colors.gray1};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const BasicInfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray11};
`

export const InfoLabel = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray11};
  min-width: 70px;
`

export const PersonName = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0;
  letter-spacing: -0.01em;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

// Experience Card Styles (reuse education card styles)
export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 1.25rem;
`

export const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.colors.gray1};
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`

export const ExperienceCardHeader = styled.div`
  margin-bottom: 1rem;
`

export const ExperienceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`

export const ExperienceCompany = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  margin: 0 0 0.25rem 0;
`

export const ExperienceDetails = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray9};
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`

// Projects Section Styles
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
`

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.gray1};
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  gap: 1rem;
`

export const ProjectTitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ProjectLogo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
`

export const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0;
  line-height: 1.3;
`

export const ProjectYear = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray10};
  font-weight: 500;
  white-space: nowrap;
`

export const ProjectRole = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray9};
  font-weight: 400;
  margin-bottom: 0.8rem;
`

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray11};
  line-height: 1.5;
  margin-bottom: 1rem;
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.gray12};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 0.35rem 0.7rem;
  background: ${({ theme }) => theme.colors.gray3};
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray12};
    color: ${({ theme }) => theme.colors.gray1};
  }
`
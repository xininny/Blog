import styled from "@emotion/styled"

export const SectionWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme?.colors?.gray2 || '#f5f5f5'};
  border-radius: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px) scale(1.01);
    box-shadow: 
      0 6px 16px rgba(0, 0, 0, 0.12),
      0 3px 6px rgba(0, 0, 0, 0.08);
  }
`

export const HeaderInfo = styled.div`
  flex: 1;
`

export const Name = styled.h1`
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors?.gray12 || '#000'};
`

export const Role = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme?.colors?.gray10 || '#666'};
`

export const Bio = styled.div`
  margin: 0;
`

export const ContentSection = styled.div`
  line-height: 1.7;
`

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.gray12 || '#000'};
  margin: 2.5rem 0 1rem 0;
  border-bottom: 2px solid ${({ theme }) => theme?.colors?.gray4 || '#e5e5e5'};
  padding-bottom: 0.5rem;
`

export const Paragraph = styled.p`
  margin: 1rem 0;
  color: ${({ theme }) => theme?.colors?.gray11 || '#555'};
  font-size: 1rem;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 1.5rem 0;
`

export const SkillCategory = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme?.colors?.gray2 || '#f5f5f5'};
  border-radius: 8px;
`

export const CategoryTitle = styled.h4`
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.gray12 || '#000'};
`

export const SkillList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  
  li {
    margin: 0.5rem 0;
    color: ${({ theme }) => theme?.colors?.gray10 || '#666'};
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme?.colors?.gray4 || '#e5e5e5'};
  color: ${({ theme }) => theme?.colors?.gray12 || '#000'};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme?.colors?.gray6 || '#d0d0d0'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme?.colors?.gray4 || '#e5e5e5'}60;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`
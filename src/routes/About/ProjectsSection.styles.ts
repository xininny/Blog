import styled from "@emotion/styled"

export const SectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray12};
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray10};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const ProjectCard = styled.div<{ colorScheme?: string }>`
  background: ${({ theme }) => theme.colors.gray1};
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ colorScheme }) => colorScheme || 'linear-gradient(90deg, #3B82F6, #8B5CF6)'};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.gray5};
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`

export const ProjectLogoSection = styled.div`
  flex-shrink: 0;
`

export const ProjectLogo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const ProjectMeta = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const ProjectTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const ProjectYear = styled.span<{ colorScheme?: string; shadowColor?: string }>`
  font-size: 1rem;
  color: white;
  font-weight: 600;
  padding: 0.4rem 1rem;
  background: ${({ colorScheme }) => colorScheme || 'linear-gradient(135deg, #3B82F6, #8B5CF6)'};
  border-radius: 20px;
  box-shadow: 0 2px 8px ${({ shadowColor }) => 
    shadowColor ? hexToRgba(shadowColor, 0.3) : 'rgba(59, 130, 246, 0.3)'
  };
`

export const ProjectTagline = styled.h3`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray10};
  margin: 0 0 2rem 0;
  font-style: italic;
`

export const ProjectContent = styled.div`
  display: grid;
  gap: 2rem;
`

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray11};
  margin: 0;
`

export const FeaturesSection = styled.div``

export const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0 0 1rem 0;
`

export const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FeatureItem = styled.li<{ colorScheme?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray11};
  line-height: 1.5;
  min-height: 1.5rem;
  
  &::before {
    content: "✓";
    color: ${({ colorScheme }) => colorScheme || '#10B981'};
    font-weight: 700;
    flex-shrink: 0;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.1rem;
    height: 1.1rem;
  }
`

export const TechSection = styled.div``

export const TechTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin: 0 0 1rem 0;
`

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const techColors = [
  'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
  'linear-gradient(135deg, #4ECDC4, #7FDEDB)',
  'linear-gradient(135deg, #45B7D1, #6AC8E8)',
  'linear-gradient(135deg, #96CEB4, #B5E7A0)',
  'linear-gradient(135deg, #FECA57, #FFD93D)',
  'linear-gradient(135deg, #A8E6CF, #C8F7C5)',
  'linear-gradient(135deg, #FFB6C1, #FFC0CB)',
  'linear-gradient(135deg, #DDA0DD, #E6E6FA)',
  'linear-gradient(135deg, #87CEEB, #B0E0E6)',
  'linear-gradient(135deg, #F0E68C, #F5F5DC)',
]

type TechBadgeProps = {
  index?: number
  techcolor?: string
}

export const TechBadge = styled.span<TechBadgeProps>`
  background: ${({ techcolor, index = 0 }) => techcolor ? techcolor : techColors[index % techColors.length]};
  color: ${({ techcolor }) => techcolor ? 'white' : 'white'};
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: 600;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

export const ProjectFooter = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const ProjectLink = styled.a<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  min-width: 180px;
  
  ${({ theme, primary }) => primary ? `
    background: ${theme.colors.gray12};
    color: ${theme.colors.gray1};
    border: 2px solid ${theme.colors.gray12};
    
    &:hover {
      background: ${theme.colors.gray11};
      border-color: ${theme.colors.gray11};
      transform: translateY(-1px);
    }
  ` : `
    background: transparent;
    color: ${theme.colors.gray11};
    border: 2px solid ${theme.colors.gray6};
    
    &:hover {
      background: ${theme.colors.gray2};
      border-color: ${theme.colors.gray8};
      color: ${theme.colors.gray12};
    }
  `}
`
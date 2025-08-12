import styled from "@emotion/styled"

export const SectionWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const HeaderSection = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const PublicationCard = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`

export const PublicationTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`

export const PublicationAuthors = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray11};
  margin-bottom: 0.3rem;
`

export const PublicationVenue = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
`

export const VenueName = styled.span`
  font-style: italic;
  color: ${({ theme }) => theme.colors.gray10};
`

export const Year = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray11};
`

export const MyName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
`

export const PublicationActions = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ActionButton = styled.a`
  padding: 0.4rem 0.8rem;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: black;
    color: white;
    transform: translateY(-1px);
  }
`

export const BibTeX = styled.pre`
  margin-top: 0.8rem;
  padding: 1rem;
  font-family: monospace;
  font-size: 0.8rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray12};
  background: ${({ theme }) => theme.colors.gray2};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 4px;
  overflow: auto;
  white-space: pre-wrap;
  animation: slideDown 0.3s ease-out;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
    to {
      opacity: 1;
      max-height: 400px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`

export const Placeholder = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
`

export const PlaceholderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray12};
  margin-bottom: 1rem;
`

export const PlaceholderText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray10};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

export const PlaceholderNote = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray9};
  background: ${({ theme }) => theme.colors.gray3};
  padding: 1rem;
  border-radius: 6px;
  text-align: left;
  
  code {
    background: ${({ theme }) => theme.colors.gray4};
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: monospace;
  }
`
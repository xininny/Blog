import styled from "@emotion/styled"

export const StyledWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

export const TabContainer = styled.div`
  width: 100%;
`

export const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray4};
  margin-bottom: 2rem;
  overflow-x: auto;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

export const TabButton = styled.a<{ isActive: boolean }>`
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, isActive }) => 
    isActive ? theme.colors.gray12 : theme.colors.gray10};
  border-bottom: 3px solid ${({ theme, isActive }) => 
    isActive ? theme.colors.gray12 : "transparent"};
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gray12};
    background-color: ${({ theme }) => theme.colors.gray2};
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`

export const BlogTabButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gray12};
    background-color: ${({ theme }) => theme.colors.gray2};
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`

export const TabContent = styled.div`
  animation: fadeIn 0.3s ease;
  padding: 3rem 1.5rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`
import AboutSection from "./AboutSection"
import Navigation from "./Navigation"
import {
  StyledWrapper,
  TabContent,
} from "./About.styles"

const About: React.FC = () => {
  return (
    <StyledWrapper>
      <Navigation />
      <TabContent>
        <AboutSection />
      </TabContent>
    </StyledWrapper>
  )
}

export default About


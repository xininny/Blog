import { NextPageWithLayout } from "../types"
import MetaConfig from "src/components/MetaConfig"
import { CONFIG } from "../../site.config"
import ProjectsSection from "src/routes/About/ProjectsSection"
import Navigation from "src/routes/About/Navigation"
import AboutLayout from "src/layouts/AboutLayout"
import { ReactElement } from "react"
import {
  StyledWrapper,
  TabContent,
} from "src/routes/About/About.styles"

const ProjectsPage: NextPageWithLayout = () => {
  const meta = {
    title: `Projects - ${CONFIG.blog.title}`,
    description: `Projects by ${CONFIG.profile.name}`,
    type: "website",
    url: `${CONFIG.link}projects`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <StyledWrapper>
        <Navigation />
        <TabContent>
          <ProjectsSection />
        </TabContent>
      </StyledWrapper>
    </>
  )
}

ProjectsPage.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>
}

export default ProjectsPage
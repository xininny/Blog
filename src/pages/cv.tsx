import { NextPageWithLayout } from "../types"
import MetaConfig from "src/components/MetaConfig"
import { CONFIG } from "../../site.config"
import CVSection from "src/routes/About/CVSection"
import Navigation from "src/routes/About/Navigation"
import AboutLayout from "src/layouts/AboutLayout"
import { ReactElement } from "react"
import {
  StyledWrapper,
  TabContent,
} from "src/routes/About/About.styles"

const CVPage: NextPageWithLayout = () => {
  const meta = {
    title: `CV - ${CONFIG.blog.title}`,
    description: `CV of ${CONFIG.profile.name}`,
    type: "website",
    url: `${CONFIG.link}cv`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <StyledWrapper>
        <Navigation />
        <TabContent>
          <CVSection />
        </TabContent>
      </StyledWrapper>
    </>
  )
}

CVPage.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>
}

export default CVPage
import { NextPageWithLayout } from "../types"
import MetaConfig from "src/components/MetaConfig"
import { CONFIG } from "../../site.config"
import PublicationsSection from "src/routes/About/PublicationsSection"
import Navigation from "src/routes/About/Navigation"
import AboutLayout from "src/layouts/AboutLayout"
import { ReactElement } from "react"
import {
  StyledWrapper,
  TabContent,
} from "src/routes/About/About.styles"

const PublicationsPage: NextPageWithLayout = () => {
  const meta = {
    title: `Publications - ${CONFIG.blog.title}`,
    description: `Publications by ${CONFIG.profile.name}`,
    type: "website",
    url: `${CONFIG.link}publications`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <StyledWrapper>
        <Navigation />
        <TabContent>
          <PublicationsSection />
        </TabContent>
      </StyledWrapper>
    </>
  )
}

PublicationsPage.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>
}

export default PublicationsPage
import { NextPageWithLayout } from "../types"
import MetaConfig from "src/components/MetaConfig"
import { CONFIG } from "../../site.config"
import About from "src/routes/About"
import AboutLayout from "src/layouts/AboutLayout"
import { ReactElement } from "react"

const AboutPage: NextPageWithLayout = () => {
  const meta = {
    title: `About - ${CONFIG.blog.title}`,
    description: `Learn more about ${CONFIG.profile.name}`,
    type: "website",
    url: `${CONFIG.link}about`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <About />
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>
}

export default AboutPage
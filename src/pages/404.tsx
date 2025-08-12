import { CONFIG } from "../../site.config"
import { NextPageWithLayout, TPosts, TTags } from "../types"
import CustomError from "../routes/Error"
import MetaConfig from "src/components/MetaConfig"
import { RootLayout } from "src/layouts"

type Props = {
  tags: TTags
  posts: TPosts
}

const NotFoundPage: NextPageWithLayout<Props> = () => {
  return (
    <>
      <MetaConfig
        {...{
          title: CONFIG.blog.title,
          description: CONFIG.blog.description,
          type: "website",
          url: CONFIG.link,
        }}
      />
      <CustomError />
    </>
  )
}

NotFoundPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default NotFoundPage

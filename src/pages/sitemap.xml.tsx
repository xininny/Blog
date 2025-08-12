import { getPosts } from "../apis/notion-client/getPosts"
import { CONFIG } from "site.config"
import { getServerSideSitemap, ISitemapField } from "next-sitemap"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getPosts()
  const dynamicPaths = posts.map((post) => `${CONFIG.link}/${post.slug}`)

  const fields: ISitemapField[] = dynamicPaths.map((path) => ({
    loc: path,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: "daily",
  }))

  // 사이트 루트 포함
  fields.unshift({
    loc: CONFIG.link,
    lastmod: new Date().toISOString(),
    priority: 1.0,
    changefreq: "daily",
  })

  return getServerSideSitemap(ctx, fields)
}

// ✅ 이름 있는 기본 내보내기로 변경 (ESLint 통과)
const Sitemap = () => null
export default Sitemap

// src/routes/Detail/PostDetail/CommentBox/Cusdis.tsx
import { CONFIG } from "site.config"
import { useCallback, useEffect, useMemo, useState } from "react"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"
import Script from "next/script"

type Props = {
  id: string
  slug: string
  title: string
}

const Cusdis: React.FC<Props> = ({ id, slug, title }) => {
  const [value, setValue] = useState(0)
  const [scheme] = useScheme()

  const onDocumentElementChange = useCallback(() => {
    setValue((v) => v + 1)
  }, [])

  useEffect(() => {
    const obs = new MutationObserver(() => onDocumentElementChange())
    obs.observe(document.documentElement, { attributeFilter: ["class"] })
    return () => obs.disconnect()
  }, [onDocumentElementChange])

  const host = CONFIG?.cusdis?.config?.host ?? "https://cusdis.com"
  const appId =
    CONFIG?.cusdis?.config?.appid ?? process.env.NEXT_PUBLIC_CUSDIS_APP_ID

  const page = useMemo(
    () => ({
      id,
      url: `${CONFIG.link}/${slug}`,
      title,
    }),
    [id, slug, title]
  )

  if (!appId) return null

  return (
    <StyledWrapper id="comments">
      <div
        key={value}
        id="cusdis_thread"
        data-host={host}
        data-app-id={appId}
        data-page-id={page.id}
        data-page-title={page.title}
        data-page-url={page.url}
        data-theme={scheme}
      />
      <Script src={`${host}/js/cusdis.es.js`} strategy="afterInteractive" />
    </StyledWrapper>
  )
}

export default Cusdis

const StyledWrapper = styled.div`
  margin-top: 2.5rem;
`

import { CONFIG } from "site.config"
import { useEffect } from "react"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"
import { useRouter } from "next/router"

type Props = {
  issueTerm: string
}

const Utterances: React.FC<Props> = ({ issueTerm }) => {
  const [scheme] = useScheme()
  const router = useRouter()

  useEffect(() => {
    const theme = scheme === "light" ? "github-light" : "github-dark"
    const script = document.createElement("script")
    const anchor = document.getElementById("comments")
    if (!anchor) return

    // 기존 스크립트/프레임 제거(중복 방지)
    anchor.innerHTML = ""

    script.src = "https://utteranc.es/client.js"
    script.crossOrigin = "anonymous"
    script.async = true
    script.setAttribute("issue-term", issueTerm)
    script.setAttribute("theme", theme)

    const config: Record<string, string> = CONFIG.utterances.config
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key])
    })

    anchor.appendChild(script)

    return () => {
      anchor.innerHTML = ""
    }
    // 의존성: 테마 변경, 글 식별자 변경, 라우트 변경 시 재주입
  }, [scheme, issueTerm, router.asPath])

  return (
    <StyledWrapper id="comments">
      <div className="utterances-frame" />
    </StyledWrapper>
  )
}

export default Utterances

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`

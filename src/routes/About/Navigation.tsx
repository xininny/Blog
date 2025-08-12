import Link from "next/link"
import { useRouter } from "next/router"
import {
  TabContainer,
  TabList,
  TabButton,
  BlogTabButton,
} from "./About.styles"

const Navigation: React.FC = () => {
  const router = useRouter()
  const currentPath = router.pathname

  const tabs = [
    { id: "about", label: "About", href: "/about" },
    { id: "publications", label: "Publications", href: "/publications" },
    { id: "projects", label: "Projects", href: "/projects" },
  ]

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            as={Link}
            href={tab.href}
            $isActive={currentPath === tab.href}
          >
            {tab.label}
          </TabButton>
        ))}
        <BlogTabButton as="a" href="/" target="_blank" rel="noopener noreferrer">
          Blog
        </BlogTabButton>
        <TabButton
          as={Link}
          href="/cv"
          $isActive={currentPath === "/cv"}
        >
          CV
        </TabButton>
      </TabList>
    </TabContainer>
  )
}

export default Navigation
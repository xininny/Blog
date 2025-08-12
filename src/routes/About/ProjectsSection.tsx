import {
  SectionWrapper,
  HeaderSection,
  Title,
  Subtitle,
  ProjectsContainer,
  ProjectCard,
  ProjectHeader,
  ProjectLogoSection,
  ProjectLogo,
  ProjectMeta,
  ProjectTitle,
  ProjectYear,
  ProjectTagline,
  ProjectContent,
  ProjectDescription,
  FeaturesSection,
  FeatureTitle,
  FeatureList,
  FeatureItem,
  TechSection,
  TechTitle,
  TechStack,
  TechBadge,
  ProjectFooter,
  ProjectLinks,
  ProjectLink,
} from "./ProjectsSection.styles"

interface Project {
  year: string
  title: string
  tagline: string
  description: string
  features: string[]
  technologies: string[]
  logo?: string
  mainImage?: string
  github?: string
  webStore?: string
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      year: "2024",
      title: "QR Reader & Generator",
      tagline: "Chrome Extension (Frontend)",
      description:
        "A lightweight Chrome extension that makes QR code generation and scanning effortless. Built with a focus on user privacy and simplicity, it requires no sign-ups, no data collection, and works entirely offline. The extension provides instant QR code generation from any text or URL, and can decode QR codes from images with a simple drag-and-drop interface.",
      features: [
        "Instant QR Code Generation",
        "Drag-and-drop image decoding",
        "Works fully offline",
        "No user data collection or tracking",
        "Clean, intuitive interface design",
        "One-click copy or download",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Chrome Extensions"],
      logo: "/image/projects/qr-reader-generator-logo.png",
      webStore:
        "https://chromewebstore.google.com/detail/qr-reader-generator/ijpcbkmfaeepjimbaadgiafalbakolmg",
      github: "https://github.com/xininny/QR-Reader-Generator",
    },
    {
      year: "2024",
      title: "SecQR",
      tagline: "Chrome Extension (Frontend, Backend)",
      description:
        "A security focused Chrome extension that combines QR code scanning with real-time malicious URL detection. SecQR protects users from phishing attacks and malicious websites by analyzing URLs before redirection. The backend leverages machine learning models to classify URLs as safe or dangerous, providing an additional security layer for QR code interactions.",
      features: [
        "In-page QR code scanning",
        "Real-time malicious URL detection",
        "ML-based threat classification",
        "Flask-powered backend analysis",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Flask",
        "Python",
        "Chrome Extensions",
      ],
      logo: "/image/projects/secqr-logo.png",
      github: "https://github.com/xininny/SecQR",
    },
    {
      year: "2024",
      title: "Share-it",
      tagline: "Web Application (Frontend)",
      description:
        "A comprehensive item rental platform designed exclusively for university students. Share-it creates a trusted community where students can rent and lend items within their campus network. The platform features secure school email verification, real-time chat functionality, and a peer-to-peer rating system to ensure safe and reliable transactions.",
      features: [
        "School email based user verification",
        "Real-time chat system for seamless communication",
        "Peer-to-peer rating and review system",
        "Item categorization and search functionality",
        "Automated rental period tracking with notifications",
      ],
      technologies: ["React", "JavaScript"],
      logo: "/image/projects/share-it-logo.png",
      github: "https://github.com/xininny/Share-it-frontend",
    },
    {
      year: "2023",
      title: "GaRiDa",
      tagline: "Mobile Application (Frontend, Backend)",
      description:
        "A mobile application designed to protect personal privacy in social media photos through AI-powered masking. By combining face recognition, face alignment, semantic segmentation, and generative AI, it produces natural-looking masks that blend seamlessly into the image. The app can mask both the user’s face and the faces of others in a photo, reducing visual disruption while maintaining privacy.",
      features: [
        "AI-driven face recognition and alignment for precise masking",
        "Emoji-based face masking with natural integration",
        "Clothing generation and replacement using semantic segmentation",
        "Generative AI for creating realistic clothing variations",
        "Support for masking multiple faces in a single image",
        "Customizable privacy levels and masking styles",
      ],
      technologies: ["Flutter", "Python", "FastAPI", "Docker"],
      logo: "/image/projects/garida-logo.png",
      github: "https://github.com/orgs/i4-AI-for-Security/repositories",
    },
  ]

  const projectColors = [
    {
      gradient: "linear-gradient(135deg, #90c6f0, #469ee7)",
      solid: "#90c6f0",
      checkColor: "#469ee7",
    },
    {
      gradient: "linear-gradient(135deg, #7fdde4, #6280b4)",
      solid: "#7fdde4",
      checkColor: "#6280b4",
    },
    {
      gradient: "linear-gradient(135deg, #a191de, #8a7bc8)",
      solid: "#a191de",
      checkColor: "#8a7bc8",
    },
    {
      gradient: "linear-gradient(135deg, #fad2f2, #eed4f9, #d6f3f5)",
      solid: "#fad2f2",
      checkColor: "#eed4f9",
    },
  ]

  const technologyColors: { [key: string]: string } = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    "Chrome Extensions": "#4285F4",
    Flask: "#000000",
    Python: "#3776AB",
    "Machine Learning": "#FF6F00",
    React: "#61DAFB",
    "Node.js": "#339933",
    "Socket.io": "#010101",
    MongoDB: "#47A248",
    "JWT Authentication": "#000000",
    Flutter: "#02569B",
    FastAPI: "#009688",
    Docker: "#2496ED",
    TensorFlow: "#FF6F00",
    "Computer Vision": "#FF6F00",
    "Generative AI": "#FF6F00",
  }

  return (
    <SectionWrapper>
      <HeaderSection>
        <Title>Projects</Title>
      </HeaderSection>

      <ProjectsContainer>
        {projects.map((project, index) => {
          const colorScheme = projectColors[index % projectColors.length]
          return (
            <ProjectCard key={index} colorScheme={colorScheme.gradient}>
              <ProjectHeader>
                <ProjectLogoSection>
                  {project.logo && (
                    <ProjectLogo
                      src={project.logo}
                      alt={`${project.title} logo`}
                    />
                  )}
                </ProjectLogoSection>
                <ProjectMeta>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectYear
                    colorScheme={colorScheme.gradient}
                    shadowColor={colorScheme.checkColor}
                  >
                    {project.year}
                  </ProjectYear>
                </ProjectMeta>
              </ProjectHeader>

              <ProjectTagline>{project.tagline}</ProjectTagline>

              <ProjectContent>
                <ProjectDescription>{project.description}</ProjectDescription>

                <FeaturesSection>
                  <FeatureTitle>Key Features</FeatureTitle>
                  <FeatureList>
                    {project.features.map((feature, idx) => (
                      <FeatureItem
                        key={idx}
                        colorScheme={colorScheme.checkColor}
                      >
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </FeaturesSection>

                <TechSection>
                  <TechTitle>Skills</TechTitle>
                  <TechStack>
                    {project.technologies.map((tech, idx) => (
                      <TechBadge
                        key={idx}
                        index={idx}
                        techcolor={technologyColors[tech]}
                      >
                        {tech}
                      </TechBadge>
                    ))}
                  </TechStack>
                </TechSection>
              </ProjectContent>

              <ProjectFooter>
                <ProjectLinks>
                  {project.webStore && (
                    <ProjectLink
                      href={project.webStore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Chrome Store
                    </ProjectLink>
                  )}
                  {project.github && (
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      primary
                    >
                      GitHub
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectFooter>
            </ProjectCard>
          )
        })}
      </ProjectsContainer>
    </SectionWrapper>
  )
}

export default ProjectsSection

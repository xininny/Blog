import React, { useState } from "react"
import {
  SectionWrapper,
  HeaderSection,
  Title,
  PublicationCard,
  PublicationTitle,
  PublicationAuthors,
  PublicationVenue,
  VenueName,
  Year,
  Placeholder,
  PlaceholderTitle,
  PlaceholderText,
  PlaceholderNote,
  PublicationActions,
  ActionButton,
  BibTeX,
  MyName,
} from "./PublicationsSection.styles"

interface Paper {
  title: string
  authors: string[]
  venue: string
  year: number
  link?: string
  description?: string
  type: "journal" | "conference" | "workshop" | "preprint"
  bibtex?: string
}

const PublicationsSection: React.FC = () => {
  const [showBibtex, setShowBibtex] = useState<number | null>(null)

  const papers: Paper[] = [
    {
      title:
        "A Decade-long Landscape of Advanced Persistent Threats: Longitudinal Analysis and Global Trends",
      authors: [
        "Shakhzod Yuldoshkhujaev",
        "Mijin Jeon",
        "Doowon Kim",
        "Nick Nikiforakis",
        "Hyungjoon Koo",
      ],
      venue:
        "In Proceedings of the 32nd ACM Conference on Computer and Communications Security (CCS'25)",
      year: 2025,
      type: "conference",
      link: "https://example.com/publication1",
      bibtex: `@inproceedings{aptstudy-ccs25,
  author = {Yuldoshkhujaev, Shakhzod and Jeon, Mijin and Kim, Doowon and Nikiforakis, Nick and Koo, Hyungjoon},
  title = {A Decade-long Landscape of Advanced Persistent Threats: Longitudinal Analysis and Global Trends (To appear)},
  year = {2025},
  month = oct,
  publisher = {ACM},
  url = {},
  doi = {},
  booktitle = {Proceedings of the 32nd ACM Conference on Computer and Communications Security (CCS'25)},
  pages = {XXX-XXX},
  keywords = {APT, landscape, logitudinal analysis, global trends},
  location = {Taiwan},
  series = {CCS '25},
}`,
    },
    {
      title: "Trends in LLM-assisted Attacks",
      authors: ["Mijin Jeon", "Yujeong Kwon", "Hyungjoon Koo"],
      venue:
        "Conference on Information Security and Cryptography-Summer(CISC-S'25)",
      year: 2025,
      type: "conference",
      link: "https://example.com/publication2",
      bibtex: `@inproceedings{llmattacks-cisc25,
  author = {Jeon, Mijin and Kwon, Yujeong and Koo, Hyungjoon},
  title = {Trends in LLM-assisted Attacks},
  year = {2025},
  booktitle = {Conference on Information Security and Cryptography-Summer(CISC-S'25)},
  publisher = {KIISC},
}`,
    },
    // {
    //   title: "Machine Learning Approaches to Threat Detection",
    //   authors: ["Your Name", "Collaborator A", "Collaborator B"],
    //   venue: "Journal of Cybersecurity Research",
    //   year: 2022,
    //   type: "journal",
    //   description:
    //     "Research on applying machine learning algorithms for real-time threat detection and prevention.",
    //   link: "https://example.com/publication2",
    // },
    // Add more publications as needed
  ]

  return (
    <SectionWrapper>
      <HeaderSection>
        <Title>Publications</Title>
      </HeaderSection>

      {papers.length > 0 ? (
        papers.map((paper, index) => (
          <PublicationCard key={index}>
            <PublicationTitle>{paper.title}</PublicationTitle>
            <PublicationAuthors>
              {paper.authors.map((author, idx) => (
                <span key={idx}>
                  {author === "Mijin Jeon" ? (
                    <MyName>{author}</MyName>
                  ) : (
                    author
                  )}
                  {idx < paper.authors.length - 1 && ", "}
                </span>
              ))}
            </PublicationAuthors>
            <PublicationVenue>
              <VenueName>{paper.venue}</VenueName>, <Year>{paper.year}</Year>
            </PublicationVenue>
            <PublicationActions>
              {paper.link && (
                <ActionButton href={paper.link} target="_blank" rel="noopener noreferrer">
                  Paper
                </ActionButton>
              )}
              {paper.bibtex && (
                <ActionButton 
                  as="button" 
                  onClick={() => setShowBibtex(showBibtex === index ? null : index)}
                >
                  BIB
                </ActionButton>
              )}
            </PublicationActions>
            {paper.bibtex && showBibtex === index && (
              <BibTeX>{paper.bibtex}</BibTeX>
            )}
          </PublicationCard>
        ))
      ) : (
        <Placeholder>
          <PlaceholderTitle>Publications Coming Soon</PlaceholderTitle>
          <PlaceholderText>
            Research papers and publications will be listed here.
          </PlaceholderText>
          <PlaceholderNote>
            <strong>Note:</strong> Edit the papers array in{" "}
            <code>src/routes/About/PublicationsSection.tsx</code>
          </PlaceholderNote>
        </Placeholder>
      )}
    </SectionWrapper>
  )
}

export default PublicationsSection

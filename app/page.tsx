import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighetd-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import { WorkExperience } from './components/pages/home/work-experience'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      technologies {
        name
      }
      profilePic {
        url
      }
      socials {
        url
        iconSvg
      }
    }
  }
  `

  return fetchHygraphQuery(query)
}

export default async function Home() {
  const response = await getPageData()

  // console.log(response)

  return (
    <>
      <HeroSection homeInfo={response.page} />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}

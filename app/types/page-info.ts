import { KnownTech } from './projects'
import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePic: {
    url: string
  }
  socials: Social[]
  knownTechs: KnownTech[]
}

export type HomePageData = {
  page: HomePageInfo
}
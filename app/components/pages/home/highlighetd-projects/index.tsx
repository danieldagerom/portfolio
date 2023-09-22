import { HorizontalDivider } from '@/app/components/devider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

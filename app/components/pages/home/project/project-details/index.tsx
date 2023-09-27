import { Button } from '@/app/components/button'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/tech-badge'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(/images/tanamesa.png) no-repeat center/cover',
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="Tá na Mesa"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        O Tá Na Mesa é uma aplicação que visa melhorar a experiência do
        consumidor dentro de um restaurante ou qualquer outro tipo de
        estabelecimento que fornece comida, mostrando o cardapio ao cliente e
        permitindo que ele faça um pedido sem precisar chamar um atendente ou
        garçom.
      </p>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm: gap-4 flex-col sm:flex-row">
        <a
          href="https://unbarqdsw2021-1.github.io/2021.1_G02_TaNaMesa_docs/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a
          href="https://unbarqdsw2021-1.github.io/2021.1_G02_TaNaMesa_docs/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}

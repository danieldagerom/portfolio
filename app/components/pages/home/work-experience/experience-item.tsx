import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://www.almocogratis.com.br/9d7339fc48e6dfefe67bdaa78e62aaf6.png"
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo da empresa AlmoçoGrátis"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/almocogratis/mycompany/?viewAsMember=true"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ AlmoçoGrátis
          </a>
          <h4 className="text-gray-300">Desenvolvedor Front-End - Growth</h4>
          <span className="text-gray-500">
            jul 2021 • set 2023 (2 anos e 3 meses)
          </span>
          <p>
            Desenvolvimento e manutenção de interfaces utilizando React,
            Typescript e Figma. Design de imagens com Photoshop. Planejamento de
            sprints com Asana
          </p>
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
          </div>
        </div>
      </div>
    </div>
  )
}

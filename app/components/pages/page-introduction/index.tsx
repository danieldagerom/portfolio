import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Link } from '../../link'
import { SectionTitle } from '../../section-title'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você verá alguns dos projetos que desenvolvi. Navege por eles e
          explore mais sobre cada um, sendo possível ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para a Home
        </Link>
      </div>
    </section>
  )
}

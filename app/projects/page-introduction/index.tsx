'use client'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Link } from '../../components/link'
import { SectionTitle } from '../../components/section-title'
import { motion } from 'framer-motion'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você verá alguns dos projetos que desenvolvi. Navege por eles e
          explore mais sobre cada um, sendo possível ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para a Home
        </Link>
      </motion.div>
    </section>
  )
}

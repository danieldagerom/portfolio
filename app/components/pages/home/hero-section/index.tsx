'use client'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/danieldagerom',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/daniel-primo-026406163/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://api.whatsapp.com/send?phone=5561982899655&text=Ol%C3%A1,%20Daniel!%20Entrando%20em%20contato%20vindo%20do%20seu%20portif%C3%B3lio!',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Daniel Primo</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou apaixonado por tecnologia e a forma como ela pode diretamente
            mudar a vida das pessoas. Como programador front-end, acredito que a
            programação tem muito valor para abrir novas portas e construir
            caminhos novos.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <TechBadge name="React.js" />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil de Daniel Primo"
          className="w-[300px] h-[300px] lg:w-[404px] lg:h-[404px] mb-6 lg:mg-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}

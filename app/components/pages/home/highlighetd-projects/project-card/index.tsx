import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={250}
          height={244}
          src="https://unbarqdsw2021-1.github.io/2021.1_G02_TaNaMesa_docs/assets/img/logo-contorno.png"
          alt="logotipo-tanamesa"
          className="w-full h-[200px] sm:h=[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          Tá na mesa!
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sapiente accusantium, obcaecati reprehenderit eius error reiciendis
          corrupti sunt? Sapiente debitis numquam quas nulla architecto culpa
          error praesentium sit labore. Non error tempore, atque corporis sequi
          asperiores vitae, voluptatem dolore, itaque ab unde necessitatibus
          cum? Quaerat quidem perspiciatis doloremque! Nihil, reiciendis!
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/tanamesa">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div>
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://unbarqdsw2021-1.github.io/2021.1_G02_TaNaMesa_docs/assets/img/logo-contorno.png"
          alt="logotipo-tanamesa"
          className="object-cover rounded-lg"
        />
      </div>

      <div>
        <h3>
          <Image
            width={20}
            height={20}
            alt=""
            src="/public/images/icons/project-title-icon.svg"
          />
        </h3>
      </div>
    </div>
  )
}

import Image from 'next/image'
import LogoImg from '@/assets/images/logo.svg'

export const Logo:React.FC = () => {

  return (
    <picture>
      <Image src={LogoImg} alt='Go Restaurant'/>
    </picture>
  )
}


import Image from 'next/image'

const Header: React.FC = () => (
  <div className="flex h-[84px] w-full border-b-2 border-black">
    <Image
      src="https://www.tre.se/images/logo.jpg"
      alt="Logo"
      height={82}
      width={82}
    />
  </div>
)

export default Header

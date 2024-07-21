import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="bg-green-900 py-4 px-6 flex items-center justify-between">
      <Image src="/next.svg" alt="Morningside AI Logo" width={50} height={50} />
      <nav className="space-x-6">
        <Link href="/" className="text-white hover:text-green-300">Home</Link>
        <Link href="/services" className="text-white hover:text-green-300">Services</Link>
        <Link href="/blog" className="text-white hover:text-green-300">Blog</Link>
        <Link href="/team" className="text-white hover:text-green-300">Team</Link>
        <Link href="/careers" className="text-white hover:text-green-300">Careers</Link>
      </nav>
      <button className="bg-white text-green-700 px-4 py-2 rounded-full hover:bg-green-100 transition-colors">
        Contact us
      </button>
    </header>
  )
}

export default Header


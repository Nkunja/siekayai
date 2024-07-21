import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className=" bg-cover bg-center h-screen flex flex-col justify-between text-white">
      <header className="flex justify-between items-center p-6 bg-hero-pattern h-80">
        <Image src="/next.svg" alt="Morningside AI Logo" width={50} height={50} />
        <nav className="flex items-center">
          <div className="bg-green-900 bg-opacity-50 border border-white-500 rounded p-1 flex">
            <Link href="/" className="text-white-800 px-4 py-2 rounded-full bg-white text-black">Home</Link>
            <Link href="#services" className="text-white px-4 py-2">Services</Link>
            <Link href="#blog" className="text-white px-4 py-2">Blog</Link>
            <Link href="#team" className="text-white px-4 py-2">Team</Link>
            <Link href="#careers" className="text-white px-4 py-2">Careers</Link>
          </div>
        </nav>
        <button className="bg-white-900 text-black-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          Contact us
        </button>
      </header>      
      <div className='flex flex-row'>
        <div className="flex-grow flex flex-col justify-center px-4">
          <h2 className="text-white text-xl mb-4">SIEKAY AI</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            BREATHE LIFE INTO YOUR<br />
            SYSTEMS WITH CUTTING-<br />
            EDGE AI SOLUTIONS
          </h1>
          
        </div>
          <div className="flex space-x-4">
            <button className="bg-green-700 text-white px-6 py-3 h-12 w-40 rounded">Let's Talk</button>
            <button className="bg-transparent border border-white text-white h-12 w-30 px-6 py-3 rounded flex items-center">
              Our Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
      </div>
    </section>
  );
};

export default Hero;

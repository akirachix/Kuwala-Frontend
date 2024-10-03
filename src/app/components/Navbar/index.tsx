'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <header className="relative bg-white">
      <nav className="fixed flex items-center justify-between top-0 left-0 right-0 px-4 lg:px-0 bg-white mt-0 w-full z-50">
        <div className="w-40 sm:w-24 md:w-28 lg:w-32 xl:w-36 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="DH logo"
            width={120}
            height={80}
            className="w-full h-auto max-h-20 object-contain 2xl:ml-0 xl:-ml-60 2xl:mt-4 lg:mt-4 sm:mt-4 md:mt-4 mt-4"
          />
        </div>

        <div className="flex items-center space-x-8 sm:space-x-8 md:space-x-12 mr-4 sm:mr-8 md:mr-12 lg:mr-20">
          <div className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-10 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px]">
            <Link href="#Landingpage" className="hover:text-amber-700 transition-colors">Home</Link>
            <Link href="#About" className="hover:text-amber-600 transition-colors">About</Link>
            <Link href="#product" className="hover:text-amber-600 transition-colors">Products</Link>
            <Link href="#services" className="hover:text-amber-600 transition-colors">Services</Link>
            <Link href="#team" className="hover:text-amber-600 transition-colors">Team</Link>
          </div>

          <button onClick={toggleMenu} className="md:hidden focus:outline-none" aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className='fixed inset-0 z-40 bg-white flex flex-col items-center justify-center'>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6 text-[20px]">
            <Link href="#Landingpage" className="hover:text-amber-700 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="#About" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>About</Link>
            <Link href="#product" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Products</Link>
            <Link href="#services" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link href="#team" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Team</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .w-40 {
            width: 6rem;
          }
        }
        @media (max-width: 640px) {
          nav {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .w-40 {
            width: 5rem;
          }
        }
      `}</style>
    </header>
  );
}
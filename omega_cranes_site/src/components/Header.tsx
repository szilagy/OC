
'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/concorrentes", label: "Concorrentes" },
    { href: "/campanhas", label: "Campanhas" },
    { href: "/palavras-chave", label: "Palavras-chave" },
    { href: "/anuncios", label: "Anúncios" },
    { href: "/segmentacao", label: "Segmentação" },
    { href: "/orcamento", label: "Orçamento" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-yellow-500 hover:text-yellow-400">
          Omega Cranes - Estratégia Ads
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-yellow-400 text-sm">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block px-2 py-1 hover:bg-gray-700 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;


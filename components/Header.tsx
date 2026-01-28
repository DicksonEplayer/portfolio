
import React, { useState } from 'react';
import type { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-primary text-white'
          : 'text-gray-700 hover:bg-blue-100 hover:text-primary'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: { page: Page; label: string }[] = [
    { page: 'about', label: 'About Me' },
    { page: 'projects', label: 'Projects' },
    { page: 'blog', label: 'Blog' },
    { page: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => setCurrentPage('about')} className="text-xl font-bold text-primary hover:text-secondary transition-colors uppercase">
              Ainamani Dickson
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-blue-50 inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map((item) => (
                 <button
                    key={item.page}
                    onClick={() => {
                        setCurrentPage(item.page);
                        setIsMenuOpen(false);
                    }}
                    className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        currentPage === item.page
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-primary'
                    }`}
                    >
                    {item.label}
                </button>
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

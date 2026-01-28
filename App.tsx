
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/pages/AboutPage';
import ProjectsPage from './components/pages/ProjectsPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'about':
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

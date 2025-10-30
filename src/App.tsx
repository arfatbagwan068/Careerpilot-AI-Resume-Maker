import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ResumeGenerator from './pages/ResumeGenerator';
import CoverLetterGenerator from './pages/CoverLetterGenerator';

type Page = 'home' | 'resume' | 'coverLetter';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  return (
    <ThemeProvider>
      <MainLayout setCurrentPage={setCurrentPage}>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'resume' && <ResumeGenerator />}
        {currentPage === 'coverLetter' && <CoverLetterGenerator />}
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
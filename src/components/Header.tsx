import { useState, useEffect } from 'react';
import { FileTextIcon, FileType2Icon, HomeIcon, MenuIcon, XIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
  setCurrentPage: (page: 'home' | 'resume' | 'coverLetter') => void;
};

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/95 backdrop-blur-sm shadow-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center cursor-pointer group"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg transition-transform group-hover:scale-110 mr-3">
              <FileTextIcon className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              CareerPilot AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <NavItem icon={<HomeIcon className="h-5 w-5" />} label="Home" onClick={() => setCurrentPage('home')} />
              <NavItem icon={<FileTextIcon className="h-5 w-5" />} label="Resume" onClick={() => setCurrentPage('resume')} />
              <NavItem icon={<FileType2Icon className="h-5 w-5" />} label="Cover Letter" onClick={() => setCurrentPage('coverLetter')} />
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="text-foreground focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? 
                <XIcon className="h-6 w-6" /> : 
                <MenuIcon className="h-6 w-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 px-2 border-t border-border animate-fadeIn">
            <MobileNavItem icon={<HomeIcon className="h-5 w-5" />} label="Home" 
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
              }} 
            />
            <MobileNavItem icon={<FileTextIcon className="h-5 w-5" />} label="Resume" 
              onClick={() => {
                setCurrentPage('resume');
                setIsMobileMenuOpen(false);
              }} 
            />
            <MobileNavItem icon={<FileType2Icon className="h-5 w-5" />} label="Cover Letter" 
              onClick={() => {
                setCurrentPage('coverLetter');
                setIsMobileMenuOpen(false);
              }} 
            />
          </div>
        )}
      </div>
    </header>
  );
};

const NavItem: React.FC<{icon: React.ReactNode; label: string; onClick: () => void}> = ({ 
  icon, label, onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors cursor-pointer group"
    >
      <span className="transform group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </div>
  );
};

const MobileNavItem: React.FC<{icon: React.ReactNode; label: string; onClick: () => void}> = ({ 
  icon, label, onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center p-3 space-x-3 text-foreground/70 hover:bg-surface/40 hover:text-foreground rounded-lg transition-colors cursor-pointer"
    >
      <span>{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
};

export default Header;
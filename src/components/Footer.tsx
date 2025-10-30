import React from 'react';
import { GithubIcon, LinkedinIcon, PhoneIcon, MailIcon, ExternalLinkIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface/80 backdrop-blur-sm py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-foreground">CareerPilot AI</h3>
            <p className="text-foreground/60 max-w-xs">
              Creating professional, ATS-friendly resumes and cover letters with the power of AI.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Create Resume</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Create Cover Letter</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">ATS Score Check</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-foreground/60">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span>9667033839</span>
              </div>
              <div className="flex items-center text-foreground/60">
                <MailIcon className="h-4 w-4 mr-2" />
                <a href="mailto:wajiddaudtamboli123@gmail.com" className="hover:text-primary transition-colors">
                  wajiddaudtamboli123@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Developer & Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Developer</h3>
            <div className="space-y-3">
              <p className="text-foreground/80 font-medium">Wajid Daud Tamboli</p>
              <p className="text-foreground/60 text-sm">N.K. Orchid College of Engineering & Technology, Solapur</p>
              
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/wajid-daud-tamboli-3217b031a/" className="text-foreground/60 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a href="https://github.com/wajiddaudtamboli" className="text-foreground/60 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a href="https://techworld-wajid.onrender.com/" className="text-foreground/60 hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer" title="Personal Website">
                  <ExternalLinkIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-foreground/50 text-sm">
            <p>© {new Date().getFullYear()} CareerPilot AI. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Made with <span role="img" aria-label="heart" className="text-red-500">♥</span> by Wajid Daud Tamboli
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
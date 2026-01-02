'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className={`fixed top-0 left-0 right-0 z-[1030] border-0 min-h-[86px] font-nunito transition-all duration-400 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="flex items-center justify-between min-h-[86px]">
            {/* Logo */}
            <div className="float-left">
              <a href="index.html" className="inline-block p-0 leading-[86px]">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              type="button" 
              className="md:hidden float-right mt-[25px] mr-4 p-[9px_10px] bg-transparent border border-transparent rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="block w-[22px] h-[2px] rounded-sm bg-black mb-1"></span>
              <span className="block w-[22px] h-[2px] rounded-sm bg-black mb-1"></span>
              <span className="block w-[22px] h-[2px] rounded-sm bg-black"></span>
            </button>

            {/* Navigation Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-[86px] md:top-0 left-0 right-0 md:left-auto md:right-auto w-full md:w-auto max-w-[500px] md:max-w-none mx-auto md:mx-0 bg-black md:bg-transparent`}>
              
              {/* Enroll Now Button */}
              <ul className="md:float-right md:mt-[10px] md:ml-[10px] m-0 p-0 list-none">
                <li>
                  <a 
                    href="#application" 
                    className="inline-block bg-[#f8d171] text-[#024d94] px-[23px] py-[5px] font-bold text-base leading-5 capitalize border-2 border-[#f8d171] rounded-none font-nunito mt-[25px] hover:border-[#024d94] hover:bg-transparent hover:text-[#024d94] transition-all duration-400"
                  >
                    Enroll Now
                  </a>
                </li>
              </ul>

              {/* Main Navigation */}
              <ul className="md:float-right m-0 p-0 list-none">
                <li className="md:float-left">
                  <a 
                    href="#hero" 
                    className="block md:inline-block px-[30px] md:px-3 py-[7px] md:py-[40px] text-[12px] md:text-[14px] leading-[1.6] text-white md:text-[#024d94] font-nunito font-bold hover:text-white md:hover:text-black transition-all duration-400"
                  >
                    Home
                  </a>
                </li>

                <li className="md:float-left">
                  <a 
                    href="#about" 
                    className="block md:inline-block px-[30px] md:px-3 py-[7px] md:py-[40px] text-[12px] md:text-[14px] leading-[1.6] text-white md:text-[#024d94] font-nunito font-bold hover:text-white md:hover:text-black transition-all duration-400"
                  >
                    About Us
                  </a>
                </li>

                <li className="md:float-left">
                  <a 
                    href="#courses" 
                    className="block md:inline-block px-[30px] md:px-3 py-[7px] md:py-[40px] text-[12px] md:text-[14px] leading-[1.6] text-white md:text-[#024d94] font-nunito font-bold hover:text-white md:hover:text-black transition-all duration-400"
                  >
                    Courses
                  </a>
                </li>

                <li className="md:float-left">
                  <a 
                    href="#masterclass" 
                    className="block md:inline-block px-[30px] md:px-3 py-[7px] md:py-[40px] text-[12px] md:text-[14px] leading-[1.6] text-white md:text-[#024d94] font-nunito font-bold hover:text-white md:hover:text-black transition-all duration-400"
                  >
                    Consulting
                  </a>
                </li>
                
                <li className="md:float-left">
                  <a 
                    href="#community" 
                    className="block md:inline-block px-[30px] md:px-3 py-[7px] md:py-[40px] text-[12px] md:text-[14px] leading-[1.6] text-white md:text-[#024d94] font-nunito font-bold hover:text-white md:hover:text-black transition-all duration-400"
                  >
                    Community
                  </a>
                </li>

                <li className="md:float-left">
                  <a 
                    href="#contact" 
                    className="block md:inline-block px-[30px] md:px-3 py-[7px] md:py-[40px] text-[12px] md:text-[14px] leading-[1.6] text-white md:text-[#024d94] font-nunito font-bold hover:text-white md:hover:text-black transition-all duration-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
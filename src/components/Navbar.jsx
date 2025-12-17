import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center px-8 mx-auto max-w-[1200px]">
        <a href="#" className="flex items-center">
          <img src="/assets/logo.jpg" alt="Maket Urlal Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {['home', 'about', 'services', 'portfolio'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-text-light font-normal text-[0.95rem] relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[5px] after:left-0 after:bg-secondary after:transition-all after:duration-300"
              >
                {item === 'home' ? 'Нүүр' :
                  item === 'about' ? 'Бидний тухай' :
                    item === 'services' ? 'Үйлчилгээ' : 'Бүтээлүүд'}
              </a>
            </li>
          ))}
          <li><a href="tel:88011648" className="btn-primary small">Холбоо барих</a></li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden cursor-pointer z-[1001]" onClick={toggleMobileMenu}>
          <span className={`block w-[25px] h-[3px] bg-text-light my-[5px] transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`}></span>
          <span className={`block w-[25px] h-[3px] bg-text-light my-[5px] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[25px] h-[3px] bg-text-light my-[5px] transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></span>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-[-100%] w-[70%] h-screen bg-primary flex flex-col justify-center items-center transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'right-0' : ''}`}>
          <ul className="flex flex-col items-center gap-8">
            {['home', 'about', 'services', 'portfolio'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={closeMobileMenu} className="text-text-light text-xl">
                  {item === 'home' ? 'Нүүр' :
                    item === 'about' ? 'Бидний тухай' :
                      item === 'services' ? 'Үйлчилгээ' : 'Бүтээлүүд'}
                </a>
              </li>
            ))}
            <li><a href="tel:88011648" onClick={closeMobileMenu} className="btn-primary">Холбоо барих</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

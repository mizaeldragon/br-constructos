import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

import logo from '../assets/images/logo-obra.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#', label: 'Home', sectionId: 'home' },
        { href: '#services', label: 'Services', sectionId: 'services' },
        { href: '#about', label: 'About Us', sectionId: 'about' },
        { href: '#testimonials', label: 'Testimonials', sectionId: 'testimonials' },
        { href: '#gallery', label: 'Gallery', sectionId: 'gallery' },
        { href: '#contact', label: 'Contact', sectionId: 'contact' }
    ];

    useEffect(() => {
        const sections = navLinks
            .filter((link) => link.sectionId !== 'home')
            .map((link) => document.getElementById(link.sectionId))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry?.target?.id) {
                    setActiveSection(visibleEntry.target.id);
                }
            },
            {
                threshold: 0.4,
                rootMargin: '-20% 0px -35% 0px'
            }
        );

        sections.forEach((section) => observer.observe(section));

        const handleTopState = () => {
            if (window.scrollY < 120) {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleTopState);
        handleTopState();

        return () => {
            window.removeEventListener('scroll', handleTopState);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (event, link) => {
        setActiveSection(link.sectionId);
        setIsMobileMenuOpen(false);

        if (link.sectionId === 'home') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none ${isScrolled ? 'px-4 mt-4 md:mt-6' : 'px-0 mt-0 w-full'}`}>
            <header className={`pointer-events-auto relative w-full transition-all duration-300 ${isScrolled ? 'max-w-6xl rounded-[2rem] border border-white/10 bg-[#171D2C]/95 backdrop-blur-lg shadow-2xl py-4 md:py-5 px-6 sm:px-10' : 'max-w-7xl rounded-none border-transparent bg-transparent py-5 md:py-6 px-4 sm:px-6 lg:px-8 shadow-none'}`}>
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <a href="#" onClick={(e) => handleNavClick(e, { sectionId: 'home' })} className="flex items-center gap-2 relative z-10 transition-transform hover:scale-105">
                        <img src={logo} alt="Barreto's Construction Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-14 md:h-16 drop-shadow-md brightness-110' : 'h-16 md:h-20 drop-shadow-sm'}`} />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 md:gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.sectionId;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-full font-medium transition-colors ${isScrolled
                                        ? (isActive ? 'bg-white/10 text-[#FF8C00]' : 'text-white/80 hover:text-white hover:bg-white/5')
                                        : (isActive ? 'bg-orange-50 text-[#FF8C00]' : 'text-slate-600 hover:text-[#FF8C00] hover:bg-slate-50')
                                        }`}
                                    onClick={(event) => handleNavClick(event, link)}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <a href="#contact" className="hero-glow-btn hero-glow-strong group inline-flex items-center rounded-full p-[1px] bg-gradient-to-r from-[#FFB703] via-[#FF9800] to-[#FF8C00] shadow-[0_8px_16px_rgba(255,140,0,0.25)] hover:shadow-[0_12px_24px_rgba(255,140,0,0.35)] transition-all">
                            <span className="hero-glow-inner px-6 py-2 rounded-full bg-gradient-to-r from-[#E65100] to-[#FF8C00] text-white font-semibold inline-flex items-center gap-2">
                                Request a Quote <ArrowRight size={16} />
                            </span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="absolute left-0 right-0 top-full mt-3 md:hidden origin-top animate-in fade-in zoom-in-95 duration-200 px-4">
                        <nav className={`rounded-[24px] border p-5 shadow-2xl ${isScrolled ? 'bg-[#171D2C]/95 backdrop-blur-xl border-white/10' : 'bg-white/95 backdrop-blur-xl border-slate-200'}`}>
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.sectionId;
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className={`px-4 py-3 rounded-xl font-medium transition-colors ${isScrolled
                                                ? (isActive ? 'bg-[#FF8C00]/15 text-[#FF8C00]' : 'text-white/80 hover:bg-white/5 hover:text-white')
                                                : (isActive ? 'bg-orange-50 text-[#FF8C00]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#FF8C00]')
                                                }`}
                                            onClick={(event) => handleNavClick(event, link)}
                                        >
                                            {link.label}
                                        </a>
                                    );
                                })}
                                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hero-glow-btn hero-glow-strong mt-4 rounded-full p-[1px] inline-flex w-full overflow-hidden">
                                    <span className="hero-glow-inner bg-gradient-to-r from-[#E65100] to-[#FF8C00] text-white px-5 py-3.5 rounded-full font-bold transition-opacity hover:opacity-95 w-full inline-flex items-center justify-between">
                                        Request a Quote <ArrowRight size={18} />
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;

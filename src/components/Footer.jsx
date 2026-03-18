import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import logo from '../assets/images/logo-obra.png';

const Footer = () => {
    const whatsappNumber = '';
    const whatsappMessage = encodeURIComponent('Hi! I would like to request a quote.');

    return (
        <footer className="bg-[#171D2C] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Pre-footer CTA */}
                <div className="scroll-reveal bg-gradient-to-r from-[#E65100] to-[#FF8C00] rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white mb-4">Ready to transform your space?</h3>
                        <p className="text-white/90 text-lg max-w-xl">Let our professionals handle the heavy lifting while you enjoy a pristine result. Get your free estimate today.</p>
                    </div>

                    <div className="relative z-10 shrink-0 border-t border-white/20 pt-6 md:pt-0 w-full md:w-auto text-center md:border-l md:border-t-0 md:pl-8">
                        <a
                            href="#"
                            className="hero-glow-btn hero-glow-strong p-[1px] rounded-full shadow-lg transition-transform hover:-translate-y-1 w-full md:w-auto inline-flex"
                        >
                            <span className="hero-glow-inner bg-white text-brand-orange hover:bg-brand-lightOrange px-8 py-4 rounded-full font-bold w-full md:w-auto inline-flex items-center justify-center gap-2 transition-colors">
                                Get Started Now <ArrowRight size={18} />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="scroll-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16" data-delay="1">

                    {/* Brand & Intro */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6 cursor-pointer">
                            <img src={logo} alt="Barreto's Construction" className="h-20 w-auto drop-shadow-md" />
                        </div>
                        <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                            Providing top-tier residential and commercial construction services tailored to your specific needs. Your satisfaction is our priority.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Media links placeholder */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-orange"></span>General Contracting</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-orange"></span>Home Remodeling</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-orange"></span>Commercial Builds</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-orange"></span>Project Management</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-orange"></span>Site Assessments</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">About Us</a></li>
                            <li><a href="#gallery" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Our Work</a></li>
                            <li><a href="#testimonials" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Contact Us</a></li>
                            <li><a href="/privacy-policy.html" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Footer */}
                <div className="scroll-reveal pt-8 border-t border-white/10 text-center md:flex md:justify-between items-center text-sm" data-delay="2">
                    <p className="text-[#93b8b1] mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Barreto's Construction. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6 text-[#93b8b1]">
                        <a href="/terms-of-service.html" className="hover:text-brand-orange transition-colors">Terms of Service</a>
                        <a href="/privacy-policy.html" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;




import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-white md:bg-[#fafafa]">
            {/* Clean White/Light Gray Background with subtle grid */}
            <div className="absolute inset-0 z-0 bg-white"></div>
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8 md:mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 lg:mb-20">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col items-start text-left">
                        {/* Badge */}
                        <div className="scroll-reveal inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-5 py-2 mb-6 md:mb-8 shadow-sm">
                            <Sparkles className="text-[#FF8C00]" size={16} fill="currentColor" />
                            <span className="text-orange-900 text-sm font-bold tracking-wide">
                                Trusted Professional Construction
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="scroll-reveal text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5rem] font-bold text-slate-900 mb-6 leading-tight tracking-tight" data-delay="1">
                            Building Dreams,<br />
                            <span className="text-[#FF8C00]">Creating Reality</span>
                        </h1>

                        {/* Description */}
                        <p className="scroll-reveal mt-2 text-lg md:text-xl text-slate-600 max-w-[550px] mb-10 font-normal leading-relaxed" data-delay="2">
                            We offer premium residential and commercial construction, remodeling, and project management services with a skilled team and guaranteed quality.
                        </p>

                        {/* CTA Buttons */}
                        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10" data-delay="3">
                            <a href="#contact" className="hero-glow-btn group inline-flex items-center justify-center gap-2 rounded-full p-[1px] bg-gradient-to-r from-[#FFB703] via-[#FF9800] to-[#FF8C00] shadow-[0_12px_24px_rgba(255,140,0,0.25)] hover:shadow-[0_16px_30px_rgba(255,140,0,0.35)] transition-all transform hover:-translate-y-1">
                                <span className="hero-glow-inner px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E65100] to-[#FF8C00] text-white font-bold text-[15px] tracking-wide uppercase whitespace-nowrap flex items-center gap-2">
                                    Get a Free Quote <ArrowRight size={18} />
                                </span>
                            </a>
                            <a href="#services" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-3.5 rounded-full font-bold text-[17px] hover:bg-slate-50 hover:border-slate-300 transition-colors text-center inline-flex items-center justify-center gap-2 shadow-sm">
                                Explore Services
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="scroll-reveal relative hidden lg:block" data-delay="3">
                        <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl ml-auto max-w-[550px] ring-1 ring-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1470&auto=format&fit=crop"
                                alt="Construction Workers on Site"
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                            {/* Floating decorative elements */}
                            <div className="absolute bottom-6 left-6 right-auto bg-white/95 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-xl flex items-center gap-4">
                                <div className="bg-[#FF8C00] text-white p-3 rounded-xl font-black text-2xl leading-none shadow-sm">A+</div>
                                <div className="text-slate-800 text-sm font-semibold leading-tight">Certified<br />Contractors</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto" data-delay="4">
                    {[
                        { num: '300+', label: 'Residential Projects' },
                        { num: '200+', label: 'Commercial Builds' },
                        { num: '50+', label: 'Expert Specialists' },
                        { num: '100%', label: 'Quality Guaranteed' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-[20px] p-5 border border-slate-100 shadow-sm flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <div className="text-[40px] md:text-[46px] leading-tight mb-1 font-bold text-[#FF8C00] tracking-tight">{stat.num}</div>
                            <div className="text-[14px] md:text-[15px] text-slate-500 font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;

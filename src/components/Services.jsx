import React from 'react';
import { Home, Building2, HardHat, CheckCircle2, MoveRight } from 'lucide-react';

import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.png';
import service3 from '../assets/images/service3.png';

const ServiceCard = ({ icon: Icon, title, description, features, image, revealDelay }) => {
    return (
        <div className="scroll-reveal bg-white rounded-[24px] overflow-hidden shadow-[0_10px_28px_rgba(37,99,255,0.12)] border border-slate-100 transition-all duration-300 hover:shadow-[0_14px_36px_rgba(56,198,255,0.22)] flex flex-col group h-full cursor-pointer" data-delay={revealDelay}>
            {/* Image Header */}
            <div className="h-[240px] relative overflow-hidden bg-slate-50">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Icon */}
                <div className="absolute top-6 left-6 z-30 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-orange">
                    <Icon strokeWidth={2.5} size={22} />
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-[22px] font-bold text-[#171D2C] mb-3">{title}</h3>
                <p className="text-[#64748B] text-[15px] mb-8 leading-relaxed">
                    {description}
                </p>

                <ul className="space-y-3.5 mb-10 flex-1">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 size={18} strokeWidth={2.5} className="shrink-0 mt-[2px] text-brand-orange" />
                            <span className="text-[14.5px] text-[#4f6f6c]">{feature}</span>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="inline-flex items-center gap-2 text-[14.5px] font-bold text-brand-orange hover:text-brand-yellow transition-colors group/link mt-auto">
                    Request a Quote
                    <MoveRight size={16} strokeWidth={2.5} className="transition-transform group-hover/link:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

const Services = () => {
    const servicesData = [
        {
            icon: Home,
            title: 'New Home Construction',
            description: 'Build the custom home of your dreams. We manage every detail from foundation to final finish.',
            image: service1,
            features: [
                'Custom home design',
                'Foundation & framing',
                'Interior finishing',
                'Turnkey delivery'
            ]
        },
        {
            icon: Building2,
            title: 'Commercial Construction',
            description: 'Build or renovate corporate environments that convey professionalism and boost productivity.',
            image: service2,
            features: [
                'Office build-outs',
                'Retail spaces',
                'Structural renovations',
                'Project management'
            ]
        },
        {
            icon: HardHat,
            title: 'Home Remodeling',
            description: 'Transform your existing space with premium kitchen, bathroom, and full-home remodeling services.',
            image: service3,
            features: [
                'Kitchen renovations',
                'Bathroom remodeling',
                'Room additions',
                'Exterior upgrades'
            ]
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#f4f7f9] scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[13px] font-bold tracking-[0.15em] text-brand-orange uppercase mb-4">WHAT WE DO</h2>
                    <p className="text-4xl md:text-5xl font-bold text-[#171D2C] mb-5">Our Services</p>
                    <p className="text-[#64748B] text-[17px] leading-relaxed max-w-2xl mx-auto">
                        Complete construction solutions for homes and businesses. Quality and trust in every project.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-[30px]">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} revealDelay={(index % 3) + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;



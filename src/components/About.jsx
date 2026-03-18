import React from 'react';
import { Target, Eye, Heart, ShieldCheck, Leaf, Clock, Award, Users } from 'lucide-react';
import teamImage from '../assets/images/cleaning_team.png';

const About = () => {
    // Top Right Column Features (Mission, Vision, Values)
    const coreValues = [
        {
            icon: Target,
            title: 'Mission',
            description: 'To provide professional construction services with excellence, ensuring durable, high-quality, and safe environments for our clients.'
        },
        {
            icon: Eye,
            title: 'Vision',
            description: 'To be the most trusted and recognized construction company in the region, expanding our reach while maintaining excellence in service.'
        },
        {
            icon: Heart,
            title: 'Values',
            description: 'Commitment, honesty, responsibility, and respect for our clients and the environment guide all our actions.'
        }
    ];

    // Bottom 4-Column Grid Features
    const bottomFeatures = [
        {
            icon: ShieldCheck,
            title: 'Trained Team',
            description: 'All professionals are trained and certified in modern construction techniques.'
        },
        {
            icon: Leaf,
            title: 'Quality Materials',
            description: 'We use premium, durable, and sustainable materials, safe for your family and the environment.'
        },
        {
            icon: Clock,
            title: 'Punctuality',
            description: 'We respect your time. We arrive on schedule and complete the job within the agreed timeframe.'
        },
        {
            icon: Award,
            title: 'Satisfaction Guarantee',
            description: "If you're not satisfied, we'll redo the service at no additional cost."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white relative scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- HEADER SECTION --- */}
                <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-orange font-bold tracking-widest text-sm uppercase mb-3 block">
                        OUR STORY
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#171D2C] mb-6">
                        Who We Are
                    </h2>
                    <p className="text-lg text-[#64748B] leading-relaxed">
                        For over 15 years, building dreams and earning the trust of thousands of clients across the region.
                    </p>
                </div>

                {/* --- MIDDLE SECTION (2 Columns) --- */}
                <div className="scroll-reveal flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start mb-20">

                    {/* Left Column - Image & Badge */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[600px] shadow-lg">
                            <img
                                src={teamImage}
                                alt="Barreto's Construction professional construction team"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 right-4 md:right-8 bg-white p-4 md:p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-4 border border-gray-50 max-w-[220px]">
                            <div className="w-14 h-14 shrink-0 rounded-[16px] bg-gradient-to-r from-[#E65100] to-[#FF8C00] flex items-center justify-center text-white">
                                <Users size={28} />
                            </div>
                            <div>
                                <div className="text-[#171D2C] font-bold text-2xl md:text-3xl leading-none mb-1">4</div>
                                <div className="text-[#64748B] text-xs font-medium uppercase tracking-wider">Professionals</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text & Core Values Cards */}
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pt-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#171D2C] mb-6">
                            A company born from care
                        </h3>
                        <div className="text-[15px] text-[#64748B] space-y-5 leading-relaxed mb-8">
                            <p>
                                It was founded on December 8, 2023, <strong className="text-brand-yellow font-bold">Barreto's Construction</strong> was born with a simple purpose: to offer quality construction with the warmth of treating every client like family. What started with a small team now has over 40 dedicated professionals.
                            </p>
                            <p>
                                We serve residential, commercial, and industrial construction projects, always with the same values that brought us here: commitment, punctuality, and excellence.
                            </p>
                        </div>

                        {/* Core Values Vertical List */}
                        <div className="space-y-4 max-w-[95%]">
                            {coreValues.map((item, index) => (
                                <div key={index} className="bg-[#EEF4FF] rounded-[20px] p-2 flex gap-4 border border-transparent hover:border-brand-orange/20 transition-colors cursor-pointer">
                                    <div className="w-12 h-12 shrink-0 rounded-[16px] bg-gradient-to-r from-[#E65100] to-[#FF8C00] flex items-center justify-center text-white shadow-sm mt-1">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[17px] font-bold text-[#171D2C] mb-2">{item.title}</h4>
                                        <p className="text-[14px] text-[#64748B] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM SECTION (4-Column Grid) --- */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                    {bottomFeatures.map((feature, index) => (
                        <div key={index} className="scroll-reveal bg-white rounded-[24px] p-6 lg:px-6 lg:py-8 border border-slate-100 shadow-[0_8px_24px_rgba(37,99,255,0.1)] hover:shadow-[0_12px_30px_rgba(56,198,255,0.2)] transition-shadow text-center flex flex-col items-center cursor-pointer" data-delay={(index % 3) + 1}>
                            <div className="w-14 h-14 rounded-[18px] bg-gradient-to-r from-[#E65100] to-[#FF8C00] flex items-center justify-center text-white mb-5 shadow-[0_5px_14px_rgba(37,99,255,0.28)]">
                                <feature.icon size={24} />
                            </div>
                            <h4 className="text-[16px] font-bold text-[#171D2C] mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-[13.5px] text-[#64748B] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;




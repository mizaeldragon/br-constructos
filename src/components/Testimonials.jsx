import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Custom Quote Icon that looks like the reference
const QuoteIcon = ({ className }) => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M 16 20 L 16 10 L 6 10 L 6 20 L 12 20 C 12 24 10 26 6 26 L 6 30 C 12 30 16 26 16 20 Z" />
        <path d="M 32 20 L 32 10 L 22 10 L 22 20 L 28 20 C 28 24 26 26 22 26 L 22 30 C 28 30 32 26 32 20 Z" />
    </svg>
);

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    const baseReviews = [
        {
            id: 1,
            content: "We hired Barreto's Construction to renovate our office. The difference is huge — high-quality finishes, discreet and professional team. I recommend them to every company!",
            author: "Carlos Mendes",
            role: "Commercial Director - TechCorp",
            rating: 5,
            avatar: "CM",
            bgColor: "bg-[#38C6FF]"
        },
        {
            id: 2,
            content: "I always recommend them to my clients for new home builds. Their attention to structural integrity and architectural details is exceptional. They deliver the project move-in ready.",
            author: "Ana Ferreira",
            role: "Architect",
            rating: 5,
            avatar: "AF",
            bgColor: "bg-brand-orange"
        },
        {
            id: 3,
            content: "I manage a condominium with 80 units and Barreto's Construction takes care of all our structural maintenance. Punctuality, quality, and fair pricing. We're completely satisfied!",
            author: "Roberto Santos",
            role: "Condo Administrator",
            rating: 5,
            avatar: "RS",
            bgColor: "bg-[#eab308]"
        },
        {
            id: 4,
            content: "Barreto's Construction has completely transformed my home. Their attention to detail is unmatched, and their craftsmanship and sturdy builds are unmatched. Highly recommended!",
            author: "Sarah Jenkins",
            role: "Homeowner",
            rating: 5,
            avatar: "SJ",
            bgColor: "bg-[#38C6FF]"
        },
        {
            id: 5,
            content: "We've been using their services for our retail store for over a year. Customers frequently compliment how structurally sound our spaces look. Excellent service and very reliable team.",
            author: "David Lee",
            role: "Store Owner",
            rating: 5,
            avatar: "DL",
            bgColor: "bg-brand-orange"
        },
        {
            id: 6,
            content: "Professional, fast, and eco-friendly. I appreciate that they use sustainable building materials. The house looks amazing and structurally sound.",
            author: "Jessica Smith",
            role: "Pet Owner",
            rating: 5,
            avatar: "JS",
            bgColor: "bg-[#eab308]"
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3);
                return;
            }

            if (window.innerWidth >= 768) {
                setItemsPerView(2);
                return;
            }

            setItemsPerView(1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxStartIndex = Math.max(0, baseReviews.length - itemsPerView);

    useEffect(() => {
        if (currentIndex > maxStartIndex) {
            setCurrentIndex(maxStartIndex);
        }
    }, [currentIndex, maxStartIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxStartIndex : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxStartIndex));
    };

    const totalDots = Math.max(1, baseReviews.length - itemsPerView + 1);

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-r from-[#E65100] to-[#FF8C00] relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
                {/* Header */}
                <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span className="text-white/80 font-bold tracking-[0.2em] text-[11px] uppercase block">
                        WHAT OUR CLIENTS SAY
                    </span>
                    <h2 className="text-4xl md:text-[42px] font-bold text-white tracking-tight">
                        Testimonials
                    </h2>
                    <p className="text-white/90 text-[17px] font-medium">
                        Our clients' satisfaction is our greatest achievement.
                    </p>
                </div>

                {/* Cards Slider Wrapper */}
                <div className="scroll-reveal mb-16 relative overflow-hidden px-1 md:px-4" data-delay="1">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                    >
                        {baseReviews.map((review) => (
                            <div key={review.id} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
                                <div className="bg-white rounded-[24px] px-6 py-7 md:px-8 md:py-8 relative flex flex-col shadow-[0_10px_28px_rgba(37,99,255,0.14)] h-full cursor-pointer">
                                    {/* Quote Icon */}
                                    <QuoteIcon className="text-[#A3E6DE] mb-4 w-[36px] h-[36px]" />

                                    {/* Content */}
                                    <p className="text-[#3b5956] text-[14px] leading-[1.6] mb-5 relative z-10 font-medium">
                                        "{review.content}"
                                    </p>

                                    <div className="mt-auto">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-[14px] h-[14px] fill-[#fbbf24] text-[#fbbf24]" />
                                            ))}
                                        </div>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-3">
                                            <div className={`w-11 h-11 shrink-0 rounded-[12px] ${review.bgColor} flex items-center justify-center text-white font-bold text-sm tracking-wide`}>
                                                {review.avatar}
                                            </div>
                                            <div>
                                                <h4 className="text-[#171D2C] font-bold text-[14px] leading-tight mb-0.5">{review.author}</h4>
                                                <p className="text-[#64748B] text-[13px] font-medium">{review.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="scroll-reveal flex justify-center items-center gap-6 mt-8" data-delay="2">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-colors"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft size={20} strokeWidth={2.5} />
                    </button>

                    <div className="flex gap-2.5 items-center">
                        {[...Array(totalDots)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`rounded-full transition-all duration-300 ${currentIndex === i
                                    ? 'w-2.5 h-2.5 bg-white opacity-100'
                                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70 hover:scale-125'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-colors"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight size={20} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;




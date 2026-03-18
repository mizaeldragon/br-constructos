import React, { useState } from 'react';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'New Builds', 'Commercial', 'Remodeling'];

    const galleryItems = [
        { id: 1, category: 'New Builds', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1471&auto=format&fit=crop', title: 'Modern Home Foundation' },
        { id: 2, category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop', title: 'Office Complex' },
        { id: 3, category: 'New Builds', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1470&auto=format&fit=crop', title: 'Residential Framing' },
        { id: 4, category: 'Commercial', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop', title: 'Warehouse Structure' },
        { id: 5, category: 'Remodeling', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1470&auto=format&fit=crop', title: 'Interior Renovation' },
        { id: 6, category: 'New Builds', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop', title: 'Luxury Villa Construction' }
    ];

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <section id="gallery" className="py-24 bg-white scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-3">Our Work</h2>
                    <p className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Barreto's Construction in Action</p>
                    <p className="text-brand-slate text-lg">Browse our gallery to see the quality and scale of our professional construction projects.</p>
                </div>

                {/* Filters */}
                <div className="scroll-reveal flex flex-wrap justify-center gap-4 mb-12" data-delay="1">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-8 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 ${activeFilter === filter
                                ? 'bg-gradient-to-r from-[#FFB703] to-[#FF8C00] text-white shadow-sm'
                                : 'bg-[#FFF3E0] text-[#E65100] hover:bg-[#FFE0B2] hover:text-[#BF360C]'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map(item => (
                        <div key={item.id} className="group relative aspect-video sm:aspect-square overflow-hidden rounded-2xl cursor-pointer">
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-brand-orange text-sm font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.category}</p>
                                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import CursorGlow from './components/CursorGlow';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const elements = gsap.utils.toArray('.scroll-reveal');

    if (prefersReducedMotion || isMobile) {
      elements.forEach((element) => {
        gsap.set(element, { opacity: 1, x: 0, y: 0, clearProps: 'transform' });
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const delayStep = Number(element.getAttribute('data-delay') || 0);
        const revealDirection = element.getAttribute('data-reveal');
        const xFrom = revealDirection === 'right' ? 32 : -32;

        gsap.fromTo(
          element,
          { opacity: 0, x: xFrom },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: delayStep * 0.12,
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-navy w-full overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatButton />
      <CursorGlow />
    </div>
  );
}

export default App;



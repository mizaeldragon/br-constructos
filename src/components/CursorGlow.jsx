import React, { useEffect, useState } from 'react';

const TRAIL_COUNT = 8;

const CursorGlow = () => {
    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [core, setCore] = useState({ x: -100, y: -100 });
    const [trail, setTrail] = useState(
        Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
    );

    useEffect(() => {
        const media = window.matchMedia('(pointer: fine)');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const canEnable = media.matches && !reducedMotion.matches;
        setEnabled(canEnable);

        const updateEnable = () => {
            setEnabled(media.matches && !reducedMotion.matches);
        };

        media.addEventListener('change', updateEnable);
        reducedMotion.addEventListener('change', updateEnable);

        return () => {
            media.removeEventListener('change', updateEnable);
            reducedMotion.removeEventListener('change', updateEnable);
        };
    }, []);

    useEffect(() => {
        if (!enabled) {
            return undefined;
        }

        let rafId = 0;
        let mouseX = -100;
        let mouseY = -100;
        let points = Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }));

        const handleMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
            setVisible(true);
        };

        const handleLeave = () => setVisible(false);
        const handleEnter = () => setVisible(true);

        const animate = () => {
            const next = [...points];
            next[0] = {
                x: next[0].x + (mouseX - next[0].x) * 0.32,
                y: next[0].y + (mouseY - next[0].y) * 0.32
            };

            for (let i = 1; i < next.length; i += 1) {
                next[i] = {
                    x: next[i].x + (next[i - 1].x - next[i].x) * 0.36,
                    y: next[i].y + (next[i - 1].y - next[i].y) * 0.36
                };
            }

            points = next;
            setCore({ x: next[0].x, y: next[0].y });
            setTrail(next);
            rafId = window.requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseenter', handleEnter);
        window.addEventListener('mouseleave', handleLeave);
        rafId = window.requestAnimationFrame(animate);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseenter', handleEnter);
            window.removeEventListener('mouseleave', handleLeave);
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <div className={`cursor-glow-root ${visible ? 'is-visible' : ''}`} aria-hidden="true">
            <span
                className="cursor-glow-core"
                style={{ transform: `translate3d(${core.x}px, ${core.y}px, 0)` }}
            />
            {trail.map((point, index) => (
                <span
                    key={index}
                    className="cursor-glow-dot"
                    style={{
                        transform: `translate3d(${point.x}px, ${point.y}px, 0) scale(${Math.max(0.42, 1 - index * 0.085)})`,
                        opacity: Math.max(0.28, 0.88 - index * 0.08)
                    }}
                />
            ))}
        </div>
    );
};

export default CursorGlow;

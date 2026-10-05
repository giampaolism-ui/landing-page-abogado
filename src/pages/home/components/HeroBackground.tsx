import { useEffect, useRef } from 'react';

/**
 * Cinematic full-screen background for the Hero.
 * An abstract, premium layer built on the GBL institutional burgundy
 * (#861F2E) as the absolutely dominant color, plus a very slow zoom and a
 * subtle scroll parallax. Depth, contrast and legibility are constructed
 * with burgundy scale tones and warm-white highlights instead of neutral
 * black overlays. The image itself already carries the brand identity, so
 * the treatment keeps the burgundy alive rather than darkening it.
 */
export default function HeroBackground() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = layerRef.current;
        if (!el) return;
        const y = window.scrollY;
        if (y <= window.innerHeight) {
          el.style.transform = `translate3d(0, ${y * 0.26}px, 0)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Abstract institutional burgundy layer */}
      <div ref={layerRef} className="absolute -inset-[8%] will-change-transform">
        <img
          src="/images/hero-background.jpg"
          alt="Fondo corporativo abstracto en bordó institucional con líneas y capas geométricas"
          title="Giampaoli — Business & Law"
          className="hero-camera h-full w-full object-cover object-[64%_center] md:object-center"
        />
      </div>

      {/* Keep the burgundy rich and alive — subtle tint only, no darkening */}
      <div className="absolute inset-0 bg-brand-700/20 mix-blend-multiply"></div>

      {/* Directional gradient — deeper burgundy behind the text column for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/70 via-brand-800/35 to-transparent"></div>

      {/* Gentle vertical depth (top and bottom) built with burgundy, not black */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/35 via-transparent to-brand-900/55"></div>

      {/* Institutional burgundy halo — generous so the identity fills the frame */}
      <div className="absolute -left-40 top-1/4 h-[44rem] w-[44rem] rounded-full bg-brand/35 blur-[180px]"></div>
      <div className="absolute -right-24 -bottom-32 h-[34rem] w-[34rem] rounded-full bg-brand-light/25 blur-[160px]"></div>

      {/* Drifting glow layers — two very soft light sources that float slowly
          across the whole frame, adding depth and a "living material" feel */}
      <div className="hero-drift-a absolute -left-24 top-[12%] h-[46rem] w-[46rem] rounded-full bg-brand/30 blur-[190px]"></div>
      <div className="hero-drift-b absolute right-[-10%] top-[38%] h-[40rem] w-[40rem] rounded-full bg-warm/20 blur-[200px]"></div>

      {/* Soft burgundy vignette to keep depth at the edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_220px_90px_rgba(58,10,18,0.45)]"></div>

      {/* Warm band of light sweeping diagonally across the hero now and then */}
      <div className="hero-beam"></div>
    </div>
  );
}
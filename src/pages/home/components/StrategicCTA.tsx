import { useEffect, useRef } from 'react';
import Reveal from '@/components/base/Reveal';
import ZoomImage from '@/components/base/ZoomImage';

export default function StrategicCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sheenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sheen = sheenRef.current;
    if (!section || !sheen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sheen.classList.toggle('is-active', entry.isIntersecting);
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand w-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <ZoomImage
          src="/images/strategic-cta.jpeg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/80 pointer-events-none"></div>

      {/* White diagonal light beam sweeping across the banner, starts on entry */}
      <div ref={sheenRef} aria-hidden="true" className="cta-sheen"></div>

      <div className="relative z-10 w-full px-4 md:px-10 lg:px-16 py-24 md:py-32">
        <Reveal>
          <h2 className="font-serif font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-white">
            ¿Estás evaluando
            <br />
            una decisión importante
            <br />
            para tu <span className="italic text-white/80">negocio?</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 text-base md:text-lg text-white/85 font-light">
            Analicemos sus implicancias desde una mirada integral.
          </p>
        </Reveal>

        <Reveal delay={250} className="mt-10">
          <a
            href="#contacto"
            className="btn-heartbeat whitespace-nowrap group inline-flex items-center gap-3 bg-warm text-brand text-[14px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-brand-900 hover:text-warm transition-all duration-300"
          >
            Conversar con nuestro equipo
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
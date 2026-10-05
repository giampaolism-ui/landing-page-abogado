import { useEffect, useState } from 'react';
import HeroBackground from './HeroBackground';

const disciplines = [
  { number: '01', label: 'Legal' },
  { number: '02', label: 'Contable' },
  { number: '03', label: 'Notarial' },
  { number: '04', label: 'Financiera' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const base = 'transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]';
  const line =
    'block text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.4rem]';

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-brand-900">
      <HeroBackground />

      <div className="relative z-10 flex min-h-screen w-full items-center">
        <div className="w-full px-6 pt-32 pb-32 md:px-10 md:pt-36 md:pb-36 lg:px-16">
          <div className="max-w-[62rem]">
            {/* Eyebrow */}
            <div className={`flex items-center gap-4 ${base} ${fade}`}>
              <span className="h-px w-10 bg-brand-light"></span>
              <span className="text-[11.5px] font-medium uppercase tracking-[0.42em] text-warm/80 md:text-[12.5px]">
                Giampaoli · Business &amp; Law
              </span>
            </div>

            <span
              className={`mt-6 block text-[11.5px] font-medium uppercase tracking-[0.36em] text-brand-light md:text-[12.5px] ${base} ${fade}`}
              style={{ transitionDelay: '80ms' }}
            >
              Multidisciplinary advisory firm
            </span>

            {/* Claim — protagonist of the screen */}
            <h1 className="mt-6 font-hero font-medium uppercase leading-[1.0] tracking-[-0.01em] text-warm md:mt-8">
              <span className={`${line} ${base} ${fade}`} style={{ transitionDelay: '160ms' }}>
                Expertise que impulsa
              </span>
              <span className={`${line} ${base} ${fade}`} style={{ transitionDelay: '300ms' }}>
                <span className="italic font-normal text-brand-light">Resultados</span>
                <span className="text-brand-light">.</span>
              </span>
            </h1>

            {/* Supporting text — Inicio info */}
            <div
              className={`mt-9 max-w-[46rem] md:mt-11 ${base} ${fade}`}
              style={{ transitionDelay: '440ms' }}
            >
              <p className="text-sm font-light leading-relaxed text-warm/75 md:text-base">
                Una firma que integra diversas áreas de servicios profesionales —{' '}
                <span className="text-warm">Legal, Contable, Notarial y Financiera</span> — bajo una
                misma estructura, para que cada empresa resuelva su negocio, de principio a fin, con
                un solo interlocutor en lugar de coordinar proveedores dispersos.
              </p>
              <p className="mt-4 text-sm font-light italic leading-relaxed text-warm/60 md:text-[17.5px]">
                «La fragmentación tiene un costo. La integración, un resultado.»
              </p>
              <p className="mt-5 text-[12.5px] font-medium uppercase tracking-[0.24em] text-warm/55">
                Rosario · Alcance a todo el país y la región
              </p>
            </div>

            {/* Single action */}
            <div
              className={`mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-12 ${base} ${fade}`}
              style={{ transitionDelay: '600ms' }}
            >
              <a
                href="#a-quienes"
                className="btn-heartbeat group inline-flex items-center gap-3 whitespace-nowrap bg-brand px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-brand-dark"
              >
                Conocé cómo trabajamos
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: scroll indicator + discipline numbering */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 md:px-10 md:pb-10 lg:px-16">
        <div className="flex items-end justify-end gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {disciplines.map((d) => (
              <li
                key={d.number}
                className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.28em] text-warm/45"
              >
                <span className="text-brand-light">{d.number}</span>
                <span>{d.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
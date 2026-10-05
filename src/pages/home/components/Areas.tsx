import Reveal from '@/components/base/Reveal';
import ZoomImage from '@/components/base/ZoomImage';
import { areas } from '@/mocks/giampaoli';

export default function Areas() {
  return (
    <section id="areas" className="brand-texture w-full">
      <div className="w-full px-4 md:px-10 lg:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-warm/50"></span>
            <span className="text-[12.5px] tracking-[0.35em] uppercase text-warm/60">
              Áreas de expertise
            </span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[1.04] text-warm">
              Cuatro disciplinas,
              <br />
              un mismo <span className="italic text-brand-200">equipo.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 flex lg:items-end">
            <p className="text-base md:text-lg text-warm/75 font-light leading-relaxed lg:pb-2">
              Cada área trabaja de forma coordinada con las demás para que ninguna decisión de tu
              empresa quede resuelta de forma aislada.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {areas.map((area, i) => (
            <Reveal key={area.number} delay={(i % 2) * 120}>
              <article className="group h-full flex flex-col bg-white border border-brand-900/10">
                <div className="relative overflow-hidden w-full aspect-[16/9] bg-brand-100">
                  <ZoomImage
                    src={area.image}
                    alt={`Área ${area.name}`}
                    title={`${area.name} — Giampaoli Business & Law`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/35 via-transparent to-transparent"></div>
                  <span className="absolute top-5 left-5 font-serif text-4xl md:text-5xl font-medium text-white/90">
                    {area.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="font-serif text-3xl md:text-4xl font-medium text-brand-900">
                    {area.name}
                  </h3>
                  <span className="mt-4 block h-px w-14 bg-brand"></span>
                  <p className="mt-5 text-sm md:text-base text-brand-900/70 font-light leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.fields.map((field) => (
                      <span
                        key={field}
                        className="text-[11.5px] tracking-[0.08em] uppercase text-brand-900/60 border border-brand-900/15 px-3 py-1.5 transition-colors duration-300 group-hover:border-brand/40"
                      >
                        {field}
                      </span>
                    ))}
                  </div>

                  <p className="mt-auto pt-6 font-serif italic text-sm text-brand-900/70">
                    {area.concepts}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
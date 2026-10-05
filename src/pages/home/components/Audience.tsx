import Reveal from '@/components/base/Reveal';
import ZoomImage from '@/components/base/ZoomImage';

const audiences = [
  {
    title: 'MiPyMEs',
    subtitle: 'Micro, pequeñas y medianas empresas',
    description:
      'Emprendimientos y compañías en plena etapa de crecimiento, que necesitan un asesoramiento de nivel corporativo sin la estructura de costos ni la rigidez de un estudio tradicional. Muchas veces enfrentan por primera vez decisiones legales, impositivas o financieras sin un criterio interno formado para resolverlas.',
    note: 'El alcance se define según cada caso.',
    image: '/images/audience-mipymes.jpg',
  },
  {
    title: 'Grandes Empresas',
    subtitle: 'Corporaciones & grupos empresarios',
    description:
      'Compañías consolidadas, grupos empresariales y corporaciones que requieren un socio capaz de coordinar múltiples disciplinas sobre un mismo objetivo de negocio, con la agilidad de respuesta que una estructura corporativa interna no siempre logra sostener.',
    note: 'El alcance se define según cada caso.',
    image: '/images/audience-grandes-empresas.jpg',
  },
];

const grupos = [
  {
    label: 'Sectores de la economía',
    items: ['Primario', 'Secundario', 'Terciario', 'Cuaternario'],
  },
  {
    label: 'Foco especial',
    items: ['Agroindustria', 'Energía', 'Economía del conocimiento'],
  },
  {
    label: 'Tipo de capital',
    items: ['Público', 'Privado', 'Mixto'],
  },
];

export default function Audience() {
  return (
    <section id="a-quienes" className="bg-warm w-full">
      <div className="w-full px-4 md:px-10 lg:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brand"></span>
            <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/55">
              A quiénes ayudamos
            </span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[1.04] text-brand-900">
              Segmentamos por tamaño,
              <br />
              acompañamos por
              <span className="italic text-brand"> necesidad.</span>
            </h2>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5 flex lg:items-end">
            <p className="text-base md:text-lg text-brand-900/70 font-light leading-relaxed lg:pb-2">
              Adaptamos la profundidad del trabajo a la escala y la naturaleza de cada organización,
              sin importar su estadío de desarrollo.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {audiences.map((item, i) => (
            <Reveal key={item.title} delay={i * 140}>
              <article className="group flex h-full flex-col bg-white">
                <div className="relative overflow-hidden w-full aspect-[16/10] bg-brand-100">
                  <ZoomImage
                    src={item.image}
                    alt={item.title}
                    title={`${item.title} — Giampaoli Business & Law`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-brand/35"></div>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <span className="text-[11.5px] tracking-[0.28em] uppercase text-brand font-medium">
                    {item.subtitle}
                  </span>

                  <h3 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-brand-900">
                    {item.title}
                  </h3>

                  <span className="mt-4 block h-px w-14 bg-brand"></span>

                  <p className="mt-5 text-sm md:text-base text-brand-900/70 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <p className="mt-auto pt-6 text-[12.5px] tracking-[0.18em] uppercase text-brand-900/45 font-medium">
                    {item.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 md:mt-16">
          <div className="border border-brand-900/12 bg-white p-7 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {grupos.map((grupo) => (
                <div key={grupo.label}>
                  <span className="text-[12.5px] tracking-[0.28em] uppercase text-brand-900/55 font-medium">
                    {grupo.label}
                  </span>

                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                    {grupo.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm md:text-base text-brand-900/80 font-light flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-9 pt-7 border-t border-brand-900/12 text-sm md:text-base text-brand-900/70 font-light leading-relaxed max-w-4xl">
              Dentro del primer segmento, el ritmo de crecimiento y la etapa de financiación de una
              empresa tecnológica pueden catalogarla como{' '}
              <span className="text-brand font-medium">startup</span> o{' '}
              <span className="text-brand font-medium">scaleup</span>, lo cual requiere una dinámica
              de trabajo particular para la cual estamos especialmente capacitados.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
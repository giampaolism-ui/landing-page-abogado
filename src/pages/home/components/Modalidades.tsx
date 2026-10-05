import Reveal from '@/components/base/Reveal';

const modalidades = [
  {
    number: '01',
    icon: 'ri-time-line',
    title: 'Por hora',
    description:
      'Honorarios calculados según el tiempo efectivamente dedicado. Es la modalidad adecuada para consultas puntuales o asesoramiento acotado, donde el alcance del trabajo no justifica un proyecto cerrado ni un abono permanente.',
    example: 'Ej.: una comparecencia por citación judicial.',
    featured: false,
  },
  {
    number: '02',
    icon: 'ri-file-list-3-line',
    title: 'Por proyecto',
    description:
      'Honorarios definidos de antemano para un objetivo concreto y delimitado en el tiempo —una constitución societaria, una reestructuración, una due diligence—. El cliente conoce el costo total antes de iniciar el trabajo, independientemente de las horas que insuma.',
    example: 'Ej.: RIMI o RIGI.',
    featured: false,
  },
  {
    number: '03',
    icon: 'ri-calendar-check-line',
    title: 'Abono mensual',
    description:
      'Acompañamiento continuo de una o varias áreas, con dedicación estable y previsible en el tiempo. Es la modalidad propia de los vínculos de partner estratégico o tercerización, donde GBL opera como una extensión permanente de la estructura del cliente.',
    example: '',
    featured: false,
  },
  {
    number: '04',
    icon: 'ri-alarm-warning-line',
    title: 'Urgencias',
    description:
      'Atención inmediata ante situaciones que no admiten demora. Ej.: explosión, incendio o derrame con daño ambiental de gran magnitud, que dispara obligaciones de denuncia inmediata ante organismos ambientales y expone a la empresa y a sus directivos a responsabilidad penal. Es la única modalidad fuera del horario habitual: 24 horas, los 7 días de la semana.',
    example: '',
    featured: true,
  },
];

export default function Modalidades() {
  return (
    <section id="modalidades" className="bg-brand-50 w-full">
      <div className="w-full px-4 md:px-10 lg:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brand"></span>
            <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/55">
              Modalidades de contratación
            </span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[1.04] text-brand-900">
              Cuatro formas de
              <br />
              contratar nuestros
              <span className="italic text-brand"> servicios.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 flex lg:items-end">
            <p className="text-base md:text-lg text-brand-900/70 font-light leading-relaxed lg:pb-2">
              Pensadas para adaptarse a la naturaleza de cada necesidad: no todas las consultas
              requieren el mismo tipo de vínculo comercial.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modalidades.map((mod, i) => (
            <Reveal key={mod.number} delay={(i % 4) * 100} className="h-full">
              <article className="group h-full flex flex-col p-7 md:p-8 border border-brand-900/30 brand-texture-card text-warm transition-colors duration-500">
                <span className="flex h-12 w-12 items-center justify-center border border-warm/30 text-warm transition-colors duration-500">
                  <i className={`${mod.icon} text-xl`}></i>
                </span>

                <span className="mt-7 text-[11.5px] tracking-[0.28em] uppercase font-medium text-warm/60">
                  Modalidad {mod.number}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-medium text-warm">{mod.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-warm/80">
                  {mod.description}
                </p>
                {mod.example && (
                  <p className="mt-auto pt-5 text-xs font-light italic text-warm/70">
                    {mod.example}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
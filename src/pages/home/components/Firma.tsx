import Reveal from '@/components/base/Reveal';
import ZoomImage from '@/components/base/ZoomImage';

const pillars = [
  {
    label: 'Lógica de eficiencia',
    text: 'Contratar un equipo que ya trabaja de forma coordinada reduce los costos y los tiempos muertos que implica contratar y coordinar varios prestadores por separado.',
  },
  {
    label: 'Diferencial de mercado',
    text: 'Cuando GBL se fundó, esta clase de servicios era un privilegio reservado a las estructuras corporativas más grandes. Nuestras formas de trabajo y de contratación ampliaron ese panorama a todo el espectro empresarial.',
  },
  {
    label: 'Alcance',
    text: 'Con sede principal en Rosario, acompañamos a empresas de capital nacional y extranjero a lo largo de todo su ciclo de negocio, con alcance a todo el país y la región sur del continente.',
  },
];

const disciplines = ['Legal', 'Contable', 'Notarial', 'Financiera'];

export default function Firma() {
  return (
    <section id="firma" className="bg-white w-full">
      <div className="w-full px-4 md:px-10 lg:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brand"></span>
            <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/55">
              Quiénes somos · La firma
            </span>
          </div>
        </Reveal>

        <Reveal className="mt-10 md:mt-14">
          <h2 className="font-serif font-medium text-3xl md:text-5xl lg:text-6xl leading-[1.06] text-brand-900 max-w-[60rem]">
            Las empresas no fallan por falta de asesoramiento, sino por falta de
            <span className="italic text-brand"> coordinación.</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-stretch">
          <Reveal className="lg:col-span-5 lg:h-full">
            <div className="group relative overflow-hidden w-full aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[520px] bg-brand-100">
              <ZoomImage
                src="/images/firma-equipo.jpg"
                alt="Equipo de Giampaoli analizando una decisión empresarial"
                title="Quiénes somos — Giampaoli Business & Law"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-brand/40"></div>
              <div className="absolute bottom-5 left-5">
                <span className="text-[11.5px] tracking-[0.3em] uppercase text-white/80">
                  Multidisciplinary advisory firm
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base md:text-lg text-brand-900/70 font-light leading-relaxed">
                Giampaoli: Business &amp; Law nació de un diagnóstico concreto: las empresas no fallan
                por falta de asesoramiento, sino por falta de coordinación entre quienes las asesoran.
                Un abogado que desconoce el impacto contable de una cláusula, un contador que no
                participa de la decisión societaria, un asesor financiero que no accede al contrato que
                rige la operación: cada disciplina resuelve su parte, pero nadie mira el negocio
                completo.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-6">
              <p className="text-base md:text-lg text-brand-900/70 font-light leading-relaxed">
                Sobre esa idea, <strong className="font-semibold text-brand-900">Miguel Angel Giampaoli</strong>{' '}
                fundó GBL como una Multidisciplinary Advisory Firm que integra las áreas Legal, Contable,
                Notarial y Financiera bajo una misma lógica de trabajo: un equipo multidisciplinario, con
                comunicación permanente entre ellas y miras a las necesidades puntuales de cada cliente.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-8">
              <div className="border-l-2 border-brand pl-6">
                <p className="font-serif text-xl md:text-2xl font-light italic leading-snug text-brand-900">
                  No se trata de cuatro servicios ofrecidos bajo una misma marca, sino de un único
                  criterio de negocio aplicado desde cuatro disciplinas distintas.
                </p>
              </div>
            </Reveal>

            <Reveal delay={280} className="mt-8">
              <p className="text-base md:text-lg text-brand-900/70 font-light leading-relaxed">
                Esa integración responde, además, a una lógica de eficiencia: contratar un equipo que ya
                trabaja de forma coordinada reduce los costos y los tiempos muertos que implica contratar
                varios prestadores por separado, y coordinarlos por cuenta propia. Pero el diferencial de
                fondo no es sólo organizacional, es de mercado. Cuando GBL se fundó, esta clase de
                servicios no solía ser una opción que estuviese al alcance de todo emprendedor: era un
                privilegio reservado a las estructuras corporativas más grandes. Fueron nuestras
                innovadoras formas de trabajo y de contratación las que ampliaron el panorama a todo el
                espectro empresarial. Con su sede principal en la ciudad de Rosario, GBL acompaña hoy a
                empresas de capital nacional y extranjero a lo largo de todo su ciclo de negocio, desde su
                constitución hasta sus decisiones de expansión, financiamiento y gobierno corporativo
                (corporate governance), con alcance a todo el país y la región sur del continente.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-900/10 border border-brand-900/10">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 110}>
              <div className="h-full bg-white p-7 md:p-8">
                <span className="text-[11.5px] tracking-[0.28em] uppercase text-brand font-semibold">
                  {p.label}
                </span>
                <p className="mt-4 text-sm text-brand-900/70 font-light leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 md:mt-16">
          <div className="border border-brand bg-brand px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              {disciplines.map((d, i) => (
                <span key={d} className="flex items-center gap-4">
                  <span className="text-[12.5px] md:text-xs tracking-[0.22em] uppercase font-medium text-white">
                    {d}
                  </span>
                  {i < disciplines.length - 1 && <span className="text-white/60">×</span>}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white text-lg">→</span>
              <span className="text-[12.5px] md:text-xs tracking-[0.3em] uppercase font-semibold text-white">
                Estrategia
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
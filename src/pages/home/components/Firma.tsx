import Reveal from '@/components/base/Reveal';
import ZoomImage from '@/components/base/ZoomImage';

export default function Firma() {
  return (
    <section id="firma" className="bg-white w-full">
      <div className="w-full px-4 md:px-10 lg:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brand"></span>
            <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/70">
              Nosotros
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
                <span className="text-[11.5px] tracking-[0.3em] uppercase text-white/95">
                  Multidisciplinary advisory firm
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base md:text-lg text-brand-900/85 font-light leading-relaxed">
                Giampaoli: business &amp; law (GBL) nació de un diagnóstico concreto: la complejidad de las decisiones empresariales exige una mirada integral que contemple las distintas dimensiones de cada negocio.
                Un abogado que desconoce el impacto contable de una cláusula, un contador que no
                participa de la decisión societaria, un asesor financiero que no accede al contrato que
                rige la operación: cada disciplina resuelve su parte, pero nadie mira el negocio
                completo. 
              </p>
            </Reveal>


            <Reveal delay={120} className="mt-6">
              <p className="text-base md:text-lg text-brand-900/85 font-light leading-relaxed">
                Sobre esa idea, <a href="https://www.linkedin.com/in/miguelangelgiampaoli/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-900 underline decoration-brand/30 decoration-1 underline-offset-4 transition-colors duration-300 hover:text-brand hover:decoration-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">Miguel Angel Giampaoli</a>{' '}
                fundó GBL como una Multidisciplinary Advisory Firm que integra las áreas Legal, Contable,
                Notarial y Financiera bajo una misma lógica de trabajo, basada en la coordinación y comunicación permanente entre ellas y en una atención adaptada a las necesidades particulares de cada cliente.
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
              <p className="text-base md:text-lg text-brand-900/85 font-light leading-relaxed">
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

      </div>
    </section>
  );
}

import Reveal from '@/components/base/Reveal';

const modos = [
  {
    number: '01',
    icon: 'ri-team-line',
    title: 'Partners estratégicos',
    description:
      'GBL se integra a la operación de la empresa como socio, una parte integrante del negocio, no un proveedor externo al que se consulta una vez tomada la decisión. Participamos activamente en las decisiones estratégicas a medida que surgen, como parte del proceso que las define.',
  },
  {
    number: '02',
    icon: 'ri-share-forward-line',
    title: 'Tercerización de tareas o servicios',
    description:
      'La empresa delega en GBL la gestión completa de una o más de sus áreas internas —legal, contable, notarial o financiera—, sin necesidad de sostener esa estructura puertas adentro ni de coordinar personalmente a distintos prestadores. GBL asume la responsabilidad operativa del área tercerizada como si formara parte de la propia organización del cliente, manteniendo su autonomía e independencia. Aplica tanto a las tareas internas como a los servicios que la empresa ofrece a sus propios clientes.',
  },
  {
    number: '03',
    icon: 'ri-customer-service-2-line',
    title: 'Asesoramiento externo',
    description:
      'El cliente recurre a nosotros por consultas puntuales o proyectos específicos de carácter eventual, sin necesidad de un vínculo permanente. La empresa conserva su estructura de asesoramiento habitual y acude a GBL para una intervención acotada, con el mismo estándar de análisis interdisciplinario que aplicamos en los vínculos de largo plazo.',
  },
];

export default function Vinculacion() {
  return (
    <section id="vinculacion" className="bg-white w-full">
      <div className="w-full px-4 md:px-10 lg:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brand"></span>
            <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/55">
              Modos de vinculación
            </span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[1.04] text-brand-900">
              No hay una única
              <br />
              forma de trabajar
              <span className="italic text-brand"> con GBL.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 flex lg:items-end">
            <p className="text-base md:text-lg text-brand-900/70 font-light leading-relaxed lg:pb-2">
              El vínculo se adapta a la necesidad concreta de cada cliente y puede sostenerse en el
              tiempo o resolverse en una única intervención.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-900/10 border border-brand-900/10">
          {modos.map((modo, i) => (
            <Reveal key={modo.number} delay={i * 110}>
              <article className="group h-full bg-white p-7 md:p-9 transition-colors duration-500 hover:bg-[#E9D4D7] flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-brand-900/15 text-brand transition-colors duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <i className={`${modo.icon} text-xl`}></i>
                  </span>
                  <span className="font-serif text-3xl font-medium text-brand-900/20">
                    {modo.number}
                  </span>
                </div>
                <h3 className="mt-7 font-serif text-2xl font-medium text-brand-900">
                  {modo.title}
                </h3>
                <p className="mt-4 text-sm text-brand-900/65 font-light leading-relaxed">
                  {modo.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
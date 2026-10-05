import LocalClock from '@/components/base/LocalClock';

const mercosur = [
  { country: 'Argentina', flag: 'https://flagcdn.com/w80/ar.png' },
  { country: 'Brasil', flag: 'https://flagcdn.com/w80/br.png' },
  { country: 'Paraguay', flag: 'https://flagcdn.com/w80/py.png' },
  { country: 'Uruguay', flag: 'https://flagcdn.com/w80/uy.png' },
  { country: 'Chile', flag: 'https://flagcdn.com/w80/cl.png' },
];

const legalItems = [
  {
    label: 'Política de privacidad',
    description:
      'Tratamiento de datos personales conforme a la Ley 25.326 de Protección de Datos Personales.',
    href: '#',
  },
  {
    label: 'Política de cookies',
    description: '',
    href: '#',
  },
  {
    label: 'Términos y condiciones de uso del sitio',
    description: '',
    href: '#',
  },
  {
    label: 'Aviso legal',
    description:
      'El contenido de este sitio tiene carácter informativo y no constituye asesoramiento profesional vinculante. Para el análisis de un caso concreto, contactar al equipo de GBL a través de los canales indicados.',
    href: '#',
  },
];

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-brand text-warm">
      <div className="w-full px-4 md:px-10 lg:px-16 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-6">
          <div className="lg:col-span-4">
            <a
              href="#inicio"
              className="group flex items-center gap-3 leading-none w-fit"
              aria-label="Giampaoli Business and Law"
            >
              <img
                src="/images/logo-gbl-marco-blanco.webp"   
                alt="Logo Giampaoli Business & Law"
                className="h-10 w-10 object-contain transition-transform duration-500 md:h-12 md:w-12 group-hover:scale-[1.04]"
              />
              <img
                src="/images/nombre-logo-gbl.webp"
                alt="Giampaoli Business & Law"
                className="h-6 w-auto object-contain transition-transform duration-500 md:h-8 group-hover:scale-[1.02]"
              />
            </a>
            <p className="mt-4 text-sm text-warm/75 max-w-xs leading-relaxed">
              Rosario, Santa Fe, Argentina — con alcance a todo el país y la región.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[12.5px] font-semibold tracking-[0.2em] uppercase text-warm/45 mb-3">
              Horario de atención
            </h4>
            <p className="text-sm text-warm/75 leading-relaxed">
              Lunes a viernes, de 8 a 18 hs (hora de Argentina, GMT-3). Para consultas realizadas
              desde otros husos horarios, la respuesta se procesa dentro de nuestro horario habitual,
              salvo que se trate de una urgencia.
            </p>

            <div className="mt-4 inline-flex items-center gap-3 border border-warm/25 rounded-full pl-3 pr-4 py-2">
              <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse"></span>
              <span className="text-[11px] tracking-[0.18em] uppercase text-warm/55">
                Hora local en Argentina
              </span>
              <span className="text-sm font-semibold text-warm">
                <LocalClock /> <span className="text-warm/55 font-medium">ART · GMT-3</span>
              </span>
            </div>

            <p className="mt-3 text-sm text-warm leading-relaxed">
              <span className="font-semibold">Urgencias:</span> 24 horas, los 7 días de la semana.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[12.5px] font-semibold tracking-[0.2em] uppercase text-warm/45 mb-3">
              Alcance internacional
            </h4>
            <p className="text-sm text-warm/75 leading-relaxed">
              Acompañamos a empresas e inversores de toda la región.
            </p>
            <ul className="mt-4 flex flex-wrap items-center gap-3">
              {mercosur.map((item) => (
                <li
                  key={item.country}
                  className="w-12 h-8 rounded-[3px] overflow-hidden border border-warm/20 bg-warm/10"
                >
                  <img
                    src={item.flag}
                    alt={`Bandera de ${item.country}`}
                    title={`Mercosur — ${item.country}`}
                    className="w-full h-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-warm/20">
          <h4 className="text-[12.5px] font-semibold tracking-[0.2em] uppercase text-warm/45 mb-4">
            Legal
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {legalItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-warm/85 hover:text-white link-underline transition-colors font-medium"
                >
                  {item.label}
                </a>
                {item.description && (
                  <p className="mt-2 text-xs text-warm/55 leading-relaxed">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 pt-5 border-t border-warm/20">
          <p className="text-xs text-warm/55">
            © Giampaoli: business &amp; law. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
import { useState, type FormEvent } from 'react';
import Reveal from '@/components/base/Reveal';

const areaOptions = [
  'Legal',
  'Contable',
  'Notarial',
  'Financiera',
  'Necesito asesoramiento integral',
  'Otro',
];

const contactChannels = [
  {
    icon: 'ri-mail-line',
    label: 'Email',
    value: 'contacto@giampaoli.ar',
    description:
      'El canal indicado para consultas formales, propuestas institucionales y comunicaciones que requieren respaldo documentado. La vía preferida cuando el vínculo con GBL recién comienza.',
    cta: 'Escribinos',
    href: 'mailto:contacto@giampaoli.ar',
  },
  {
    icon: 'ri-whatsapp-line',
    label: 'WhatsApp',
    value: '+54 9 341 692 0444',
    description:
      'Contacto directo para consultas ágiles y atención inmediata, incluyendo la activación del servicio de urgencias fuera del horario habitual.',
    cta: 'Chatear ahora',
    href: 'https://wa.me/5493416920444',
  },
];

const socials = [
  {
    icon: 'ri-linkedin-fill',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/giampaoli-business-law/',
  },
  {
    icon: 'ri-instagram-fill',
    label: 'Instagram',
    href: 'https://www.instagram.com/Giampaolibusiness',
  },
  {
    icon: 'ri-facebook-fill',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/16tuDi56VE/?mibextid=wwXIfr',
  },
];

export default function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get('website_alt') || '').trim();

    if (honeypot) {
      setStatus('success');
      form.reset();
      return;
    }

    formData.delete('website_alt');

    setStatus('loading');
    setFormError('');

    try {
      formData.append('form-name', 'contacto');

      const res = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            String(value),
          ])
        ).toString(),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setFormError(
          'Hubo un problema al enviar tu consulta. Intentalo nuevamente.'
        );
      }
    } catch {
      setStatus('error');
      setFormError(
        'Hubo un problema de conexión. Intentalo nuevamente.'
      );
    }
  };

  return (
    <section id="contacto" className="bg-white w-full">
      <div className="w-full px-4 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-brand"></span>
                <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/55">
                  Vías de contacto
                </span>
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-serif font-medium text-5xl md:text-6xl lg:text-7xl text-brand-900">
                Conversemos<span className="text-brand">.</span>
              </h2>
            </Reveal>

            <Reveal delay={100} className="mt-6">
              <p className="text-base md:text-lg text-brand-900/70 font-light leading-relaxed max-w-md">
                Contanos brevemente qué decisión, proyecto o desafío estás
                evaluando.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {contactChannels.map((c, i) => (
                <Reveal key={c.label} delay={i * 100}>
                  <div className="border border-brand-900/12 bg-brand-50/50 p-6 md:p-7">
                    <div className="flex items-center gap-4">
                      <span className="w-11 h-11 flex items-center justify-center border border-brand-900/15 text-brand">
                        <i className={`${c.icon} text-lg`}></i>
                      </span>

                      <div>
                        <p className="text-[11.5px] tracking-[0.2em] uppercase text-brand-900/55">
                          {c.label}
                        </p>
                        <p className="text-sm text-brand-900 mt-1">
                          {c.value}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-brand-900/65 font-light leading-relaxed">
                      {c.description}
                    </p>

                    <a
                      href={c.href}
                      className="mt-5 inline-flex items-center gap-3 whitespace-nowrap bg-brand text-white text-[12.5px] font-semibold tracking-[0.2em] uppercase px-6 py-3 hover:bg-brand-dark transition-colors duration-300"
                    >
                      {c.cta}
                      <span>→</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <form
                name="contacto"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="w-full"
                noValidate={false}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nombre"
                      className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/55"
                    >
                      Nombre
                    </label>

                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 placeholder:text-brand-900/35 focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="empresa"
                      className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/55"
                    >
                      Empresa
                    </label>

                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nombre de la empresa"
                      className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 placeholder:text-brand-900/35 focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/55"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 placeholder:text-brand-900/35 focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="telefono"
                      className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/55"
                    >
                      Teléfono
                    </label>

                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+54 9 341 000 0000"
                      className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 placeholder:text-brand-900/35 focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  <label
                    htmlFor="area"
                    className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/55"
                  >
                    ¿En qué podemos ayudarte?
                  </label>

                  <select
                    id="area"
                    name="area"
                    defaultValue=""
                    required
                    className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 focus:outline-none focus:border-brand transition-colors cursor-pointer"
                  >
                    <option value="" disabled>
                      Seleccioná un área
                    </option>

                    {areaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  <label
                    htmlFor="mensaje"
                    className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/55"
                  >
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    maxLength={500}
                    required
                    placeholder="Contanos tu situación..."
                    className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 placeholder:text-brand-900/35 focus:outline-none focus:border-brand transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <input
                    id="privacidad"
                    name="privacidad"
                    type="checkbox"
                    required
                    className="mt-1 accent-brand w-4 h-4 cursor-pointer"
                  />

                  <label
                    htmlFor="privacidad"
                    className="text-xs text-brand-900/65 leading-relaxed cursor-pointer"
                  >
                    Acepto el tratamiento de mis datos personales de acuerdo con
                    la política de privacidad.
                  </label>
                </div>

                <input
                  type="text"
                  name="website_alt"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                  className="hp-field"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-8 whitespace-nowrap group inline-flex items-center gap-3 bg-brand text-white text-[14px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-brand-dark transition-colors duration-300 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {status === 'success' && (
                  <p className="mt-5 text-sm text-brand font-medium">
                    Gracias por tu consulta. Nos pondremos en contacto a la
                    brevedad.
                  </p>
                )}

                {status === 'error' && (
                  <p className="mt-5 text-sm text-brand font-medium">
                    {formError}
                  </p>
                )}
              </form>
            </Reveal>

            <Reveal delay={200} className="mt-14">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-brand"></span>
                <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/55">
                  Nuestras redes
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="social-heartbeat w-14 h-14 flex items-center justify-center border border-brand-900/15 text-brand hover:bg-brand hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className={`${s.icon} text-2xl`}></i>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
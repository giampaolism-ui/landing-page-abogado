import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';

const areaOptions = [
  'Contable',
  'Financiera',
  'Legal',
  'Necesito asesoramiento integral',
  'No lo sé todavía',
  'Notarial',
  'Otro',
  'Servicio integral',
];

const contactChannels = [
  {
    icon: 'ri-whatsapp-line',
    label: 'WhatsApp',
    value: '+54 9 341 692 0444',
    description:
      'Contacto directo para consultas ágiles y atención inmediata, incluyendo la activación del servicio de urgencias fuera del horario habitual.',
    cta: 'Chatear ahora',
    href: 'https://wa.me/5493416920444',
  },
  {
    icon: 'ri-mail-line',
    label: 'Email',
    value: 'contacto@giampaoli.ar',
    description:
      'El canal indicado para consultas formales, propuestas institucionales y comunicaciones que requieren respaldo documentado. La vía preferida cuando el vínculo con GBL recién comienza.',
    cta: 'Escribinos',
    href: 'mailto:contacto@giampaoli.ar',
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
  const location = useLocation();
  const areaRef = useRef<HTMLSelectElement>(null);
  const companyTypeRef = useRef<HTMLSelectElement>(null);
  const automaticArea = useRef(false);
  const automaticCompanyType = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const requested = params.get('area');
    const area = areaOptions.find((option) => option.toLowerCase() === requested);
    if (areaRef.current) areaRef.current.value = area || '';
    automaticArea.current = Boolean(area);
    const companyType = { mipyme: 'MiPyME', 'gran-empresa': 'Gran empresa' }[params.get('tipo_empresa') || ''];
    if (companyTypeRef.current) companyTypeRef.current.value = companyType || '';
    automaticCompanyType.current = Boolean(companyType);

    if (location.hash === '#contacto') {
      const frame = requestAnimationFrame(() => {
        areaRef.current?.closest('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [location.key, location.search, location.hash]);

  useEffect(() => {
    const section = document.getElementById('contacto');
    if (!section) return;
    let visited = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visited = true;
      } else if (visited) {
        // A later visit by scrolling should not retain an automatic selection.
        if (automaticArea.current && areaRef.current) areaRef.current.value = '';
        if (automaticCompanyType.current && companyTypeRef.current) companyTypeRef.current.value = '';
        automaticArea.current = false;
        automaticCompanyType.current = false;
      }
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [formError, setFormError] = useState('');
  const [motivo, setMotivo] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ email: '', telefono: '' });
  const [requiredErrors, setRequiredErrors] = useState({ nombre: false, mensaje: false });

  const validateContactField = (input: HTMLInputElement) => {
    let error = '';
    if (input.name === 'email') {
      if (input.validity.valueMissing) error = 'Este campo es obligatorio.';
      else if (input.validity.typeMismatch) error = 'Ingresá un email válido, por ejemplo nombre@empresa.com.';
    } else if (input.name === 'telefono') {
      const value = input.value.trim();
      const digits = value.replace(/\D/g, '');
      if (value && (!/^\+?[\d\s().-]+$/.test(value) || digits.length < 7 || digits.length > 15)) {
        error = 'Ingresá un teléfono válido de 7 a 15 dígitos, con código de país si corresponde.';
      }
      input.setCustomValidity(error);
    }
    setFieldErrors((current) => ({ ...current, [input.name]: error }));
  };

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
                <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/70">
                  Vías de contacto
                </span>
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-serif font-medium text-[clamp(2rem,9vw,3rem)] md:text-6xl lg:text-7xl text-brand-900">
                Conversemos<span className="text-brand">.</span>
              </h2>
            </Reveal>

            <Reveal delay={100} className="mt-6">
              <p className="text-base md:text-lg text-brand-900/85 font-light leading-relaxed max-w-md">
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
                        <p className="text-[11.5px] tracking-[0.2em] uppercase text-brand-900/70">
                          {c.label}
                        </p>
                        <p className="text-sm text-brand-900 mt-1">
                          {c.value}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-brand-900/80 font-light leading-relaxed">
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
                onInvalid={(e) => {
                  e.preventDefault();
                  e.currentTarget.querySelector<HTMLElement>(':invalid')?.focus();
                }}
                onReset={() => {
                  setMotivo('');
                  setFieldErrors({ email: '', telefono: '' });
                  setRequiredErrors({ nombre: false, mensaje: false });
                  automaticArea.current = false;
                  automaticCompanyType.current = false;
                  const phone = document.getElementById('telefono') as HTMLInputElement | null;
                  phone?.setCustomValidity('');
                }}
                className="w-full scroll-mt-28"
                noValidate={false}
              >
                <p className="mb-6 text-xs text-brand-900/80">Los campos con * son obligatorios. Los demás son opcionales.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nombre"
                      className="text-[12.5px] tracking-[0.15em] uppercase text-black"
                    >
                      Nombre <span aria-hidden="true" className="text-2xl font-bold leading-none text-brand">*</span>
                    </label>

                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      aria-invalid={requiredErrors.nombre}
                      aria-describedby={requiredErrors.nombre ? 'nombre-error' : undefined}
                      onInvalid={() => setRequiredErrors((current) => ({ ...current, nombre: true }))}
                      onChange={(e) => {
                        const missing = !e.currentTarget.value;
                        setRequiredErrors((current) => ({ ...current, nombre: current.nombre && missing }));
                      }}
                      placeholder="Tu nombre"
                      className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-black placeholder:text-black/70 focus:outline-none focus:border-brand transition-colors"
                    />
                    {requiredErrors.nombre && <p id="nombre-error" role="alert" className="text-sm font-medium text-brand">Este campo es obligatorio.</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="empresa"
                      className="text-[12.5px] tracking-[0.15em] uppercase text-black"
                    >
                      Empresa
                    </label>

                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nombre de la empresa"
                      className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-black placeholder:text-black/70 focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[12.5px] tracking-[0.15em] uppercase text-black"
                    >
                      Email <span aria-hidden="true" className="text-2xl font-bold leading-none text-brand">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      onBlur={(e) => validateContactField(e.currentTarget)}
                      onChange={(e) => { if (fieldErrors.email) validateContactField(e.currentTarget); }}
                      onInvalid={(e) => validateContactField(e.currentTarget)}
                      placeholder="tu@email.com"
                      className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-black placeholder:text-black/70 focus:outline-none focus:border-brand transition-colors"
                    />
                    {fieldErrors.email && <p id="email-error" role="alert" className="text-sm font-medium text-brand">{fieldErrors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="telefono"
                      className="text-[12.5px] tracking-[0.15em] uppercase text-black"
                    >
                      Teléfono
                    </label>

                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      aria-invalid={Boolean(fieldErrors.telefono)}
                      aria-describedby={fieldErrors.telefono ? 'telefono-error' : undefined}
                      onBlur={(e) => validateContactField(e.currentTarget)}
                      onChange={(e) => validateContactField(e.currentTarget)}
                      onInvalid={(e) => validateContactField(e.currentTarget)}
                      placeholder="+54 9 341 000 0000"
                      className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-black placeholder:text-black/70 focus:outline-none focus:border-brand transition-colors"
                    />
                    {fieldErrors.telefono && <p id="telefono-error" role="status" className="text-xs text-brand">{fieldErrors.telefono}</p>}
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <input id="preferencia-whatsapp" name="preferencia_whatsapp" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-brand cursor-pointer" />
                  <label htmlFor="preferencia-whatsapp" className="text-xs text-brand-900/80 leading-relaxed cursor-pointer">
                    Prefiero que me contacten por WhatsApp. Si elegís esta opción, dejá tu número en el campo Teléfono.
                  </label>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex min-w-0 flex-col gap-2">
                    <label htmlFor="motivo" className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/70">Motivo</label>
                    <select id="motivo" name="motivo" defaultValue="" onChange={(e) => setMotivo(e.target.value)} className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 focus:outline-none focus:border-brand transition-colors cursor-pointer">
                      <option value="">Seleccioná un motivo</option>
                      <option value="Primera consulta">Primera consulta</option>
                      <option value="Propuesta de alianza">Propuesta de alianza</option>
                      <option value="Urgencia">Urgencia</option>
                    </select>
                  </div>
                  <div className="flex min-w-0 flex-col gap-2">
                    <label htmlFor="tipo-empresa" className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/70">Tipo de empresa</label>
                    <select ref={companyTypeRef} id="tipo-empresa" name="tipo_empresa" defaultValue="" onChange={() => { automaticCompanyType.current = false; }} className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 focus:outline-none focus:border-brand transition-colors cursor-pointer">
                      <option value="">Seleccioná un tipo de empresa</option>
                      <option value="MiPyME">MiPyME</option>
                      <option value="Gran empresa">Gran empresa</option>
                    </select>
                  </div>
                </div>

                {motivo === 'Urgencia' && (
                  <p role="status" className="mt-6 border-l-2 border-brand bg-brand-50 p-4 text-sm text-brand-900 leading-relaxed">
                    Si tu consulta es urgente, contactanos por{' '}
                    <a href="https://wa.me/5493416920444" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline underline-offset-4">WhatsApp</a>.
                    {' '}Este formulario se revisa dentro del horario habitual de atención y no se monitorea las 24 horas.
                  </p>
                )}

                <div className="mt-8 flex flex-col gap-2">
                  <label
                    htmlFor="area"
                    className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/70"
                  >
                    ¿En qué podemos ayudarte?
                  </label>

                  <select
                    ref={areaRef}
                    id="area"
                    name="area"
                    defaultValue=""
                    onChange={() => { automaticArea.current = false; }}
                    className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 focus:outline-none focus:border-brand transition-colors cursor-pointer"
                  >
                    <option value="">
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
                    className="text-[12.5px] tracking-[0.15em] uppercase text-brand-900/70"
                  >
                    Mensaje <span aria-hidden="true" className="text-2xl font-bold leading-none text-brand">*</span>
                  </label>

                  <p id="mensaje-confidencialidad" className="text-xs text-brand-900/80 leading-relaxed">
                    Por favor, no envíes información reservada o confidencial por este medio hasta formalizar el vínculo profesional.
                  </p>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    aria-describedby={`mensaje-confidencialidad${requiredErrors.mensaje ? ' mensaje-error' : ''}`}
                    aria-invalid={requiredErrors.mensaje}
                    onInvalid={() => setRequiredErrors((current) => ({ ...current, mensaje: true }))}
                    onChange={(e) => {
                      const missing = !e.currentTarget.value;
                      setRequiredErrors((current) => ({ ...current, mensaje: current.mensaje && missing }));
                    }}
                    rows={4}
                    maxLength={500}
                    required
                    placeholder="Contanos tu situación..."
                    className="w-full border-b border-brand-900/20 bg-transparent py-3 text-sm text-brand-900 placeholder:text-brand-900/50 focus:outline-none focus:border-brand transition-colors resize-none"
                  ></textarea>
                  {requiredErrors.mensaje && <p id="mensaje-error" role="alert" className="text-sm font-medium text-brand">Este campo es obligatorio.</p>}
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <input
                    id="privacidad"
                    name="privacidad"
                    type="checkbox"
                    className="mt-1 accent-brand w-4 h-4 cursor-pointer"
                  />

                  <label
                    htmlFor="privacidad"
                    className="text-xs text-brand-900/80 leading-relaxed cursor-pointer"
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
                <span className="text-[12.5px] tracking-[0.35em] uppercase text-brand-900/70">
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

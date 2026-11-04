import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface RecaptchaApi {
  render(container: HTMLElement, options: {
    sitekey: string;
    theme: 'light';
    size: 'compact';
    callback: () => void;
    'expired-callback': () => void;
    'error-callback': () => void;
  }): number;
  getResponse(id: number): string;
  reset(id: number): void;
}

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
    gblRecaptchaLoaded?: () => void;
  }
}

let apiPromise: Promise<RecaptchaApi> | undefined;

function loadApi(): Promise<RecaptchaApi> {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const fail = () => {
      clearTimeout(timeout);
      script.remove();
      delete window.gblRecaptchaLoaded;
      apiPromise = undefined;
      reject(new Error('reCAPTCHA unavailable'));
    };
    const timeout = window.setTimeout(fail, 20000);
    window.gblRecaptchaLoaded = () => {
      clearTimeout(timeout);
      delete window.gblRecaptchaLoaded;
      if (window.grecaptcha?.render) resolve(window.grecaptcha);
      else fail();
    };
    script.src = 'https://www.google.com/recaptcha/api.js?onload=gblRecaptchaLoaded&render=explicit&hl=es';
    script.async = true;
    script.defer = true;
    script.onerror = fail;
    document.head.appendChild(script);
  });
  return apiPromise;
}

export interface RecaptchaHandle {
  getResponse(): string;
  reset(): void;
}

const Recaptcha = forwardRef<RecaptchaHandle>(function Recaptcha(_, ref) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<{ api: RecaptchaApi; id: number } | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [message, setMessage] = useState('Cargando verificación de seguridad…');
  const [failed, setFailed] = useState(false);

  useImperativeHandle(ref, () => ({
    getResponse: () => widget.current?.api.getResponse(widget.current.id) || '',
    reset: () => {
      if (widget.current) widget.current.api.reset(widget.current.id);
      setMessage('Completá la verificación de seguridad.');
    },
  }), []);

  useEffect(() => {
    const host = container.current;
    if (!host) return;
    let active = true;
    setFailed(false);
    setMessage('Cargando verificación de seguridad…');
    if (!__RECAPTCHA_SITE_KEY__) {
      setMessage('La verificación de seguridad no está disponible. Contactanos por email o WhatsApp.');
      return;
    }
    // A fresh child prevents duplicate rendering during React StrictMode remounts.
    const target = document.createElement('div');
    host.appendChild(target);
    loadApi().then((api) => {
      if (!active) return;
      const id = api.render(target, {
        sitekey: __RECAPTCHA_SITE_KEY__,
        theme: 'light',
        size: 'compact',
        callback: () => { if (active) { setFailed(false); setMessage('Verificación completada.'); } },
        'expired-callback': () => { if (active) setMessage('La verificación venció. Completala nuevamente.'); },
        'error-callback': () => {
          if (active) {
            widget.current?.api.reset(widget.current.id);
            setFailed(true);
            setMessage('No se pudo completar la verificación. Revisá tu conexión y reintentá.');
          }
        },
      });
      widget.current = { api, id };
      setMessage('Completá la verificación de seguridad.');
    }).catch(() => {
      if (active) {
        setFailed(true);
        setMessage('No se pudo cargar la verificación. Revisá tu conexión y reintentá.');
      }
    });
    return () => {
      active = false;
      if (widget.current) widget.current.api.reset(widget.current.id);
      widget.current = null;
      target.remove();
    };
  }, [attempt]);

  return (
    <div className="mt-8">
      <div ref={container} />
      <p role="status" aria-live="polite" className="mt-3 text-xs text-brand-900/80">{message}</p>
      {failed && (
        <button type="button" onClick={() => setAttempt((value) => value + 1)} className="mt-2 text-sm font-semibold text-brand underline underline-offset-4">
          Reintentar verificación
        </button>
      )}
    </div>
  );
});

export default Recaptcha;

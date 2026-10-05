import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Nosotros', href: '#firma' },
  { label: 'Institucional', href: '#a-quienes' },
  { label: 'Áreas de Práctica', href: '#areas' },
  { label: 'Vinculación', href: '#vinculacion' },
  { label: 'Modalidades', href: '#modalidades' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        footerVisible
          ? 'pointer-events-none -translate-y-full opacity-0'
          : transparent
            ? 'border-b border-transparent bg-transparent py-6'
            : 'border-b border-white/10 bg-black/25 py-3 backdrop-blur-xl'
      }`}
    >
      <div className="w-full px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            className="group flex items-center gap-3 leading-none"
            aria-label="Giampaoli Business and Law"
          >
            <img
              src="/images/logo-gbl-marco-blanco.webp"
              alt="Logo Giampaoli Business & Law"
              className="h-9 w-9 object-contain transition-transform duration-500 md:h-11 md:w-11 group-hover:scale-[1.04]"
            />
            <img
              src="/images/nombre-logo-gbl.webp"
              alt="Giampaoli Business & Law"
              className="h-6 w-auto object-contain transition-transform duration-500 md:h-8 group-hover:scale-[1.02]"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-[12.5px] font-medium uppercase tracking-[0.22em] text-white/85 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-heartbeat inline-flex items-center gap-2 whitespace-nowrap bg-white px-5 py-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-brand transition-all duration-300 hover:bg-white/90"
            >
              Conversemos
              <i className="ri-chat-3-line text-base"></i>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="flex h-11 w-11 items-center justify-center text-white transition-colors duration-300 md:hidden"
          >
            <i className={`text-2xl ${open ? 'ri-close-line' : 'ri-menu-3-line'}`}></i>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? 'max-h-96 border-t border-white/10 bg-black/40 backdrop-blur-xl' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn-heartbeat mt-3 inline-flex items-center justify-center gap-2 bg-white py-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-brand transition-colors hover:bg-white/90"
          >
            Conversemos
            <i className="ri-chat-3-line text-base"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}
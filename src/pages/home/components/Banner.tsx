import Reveal from '@/components/base/Reveal';
import ZoomImage from '@/components/base/ZoomImage';

export default function Banner() {
  return (
    <section className="relative w-full h-[420px] md:h-[560px] overflow-hidden bg-warm">
      <div className="absolute inset-0">
        <ZoomImage
          src="/images/banner-institucional.jpg"
          alt="Composición abstracta institucional"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50/90 via-brand-50/50 to-brand-50/90"></div>
      </div>

      <div className="relative z-10 h-full w-full px-4 md:px-10 lg:px-16 flex items-center">
        <Reveal>
          <h2 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-brand-900">
            Anticipar.
            <br />
            Analizar.
            <br />
            <span className="italic text-brand">Decidir.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
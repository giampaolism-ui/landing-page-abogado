import { useEffect, useRef, useState } from 'react';

interface ZoomImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

/**
 * Image with a slow, continuous "Ken Burns" zoom that runs while the
 * image is inside the viewport (not only on hover). The zoom class is
 * toggled by an IntersectionObserver so it pauses once the section
 * leaves the screen.
 */
export default function ZoomImage({ src, alt, title, className = '' }: ZoomImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      title={title}
      className={`${className} ${inView ? 'kenburns' : ''}`}
    />
  );
}
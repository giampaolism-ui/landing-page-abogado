import { useEffect, useState } from 'react';

interface LocalClockProps {
  timeZone?: string;
}

export default function LocalClock({ timeZone = 'America/Argentina/Buenos_Aires' }: LocalClockProps) {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15000);
    return () => window.clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat('es-AR', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  return <span className="tabular-nums">{time}</span>;
}
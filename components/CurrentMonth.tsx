'use client';

import { useEffect, useState } from 'react';

export default function CurrentMonth() {
  const [month, setMonth] = useState('');

  useEffect(() => {
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const currentMonth = new Date().getMonth();
    setMonth(months[currentMonth]);
  }, []);

  // Return empty during SSR to avoid hydration mismatch
  if (!month) return <span>este mes</span>;

  return <span>{month}</span>;
}

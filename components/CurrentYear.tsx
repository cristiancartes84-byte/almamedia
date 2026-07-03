'use client';

import { useEffect, useState } from 'react';

export default function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Muestra el año actual, o null durante SSR para evitar hydration mismatch
  return <>{year}</>;
}

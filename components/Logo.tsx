'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/chile-flag-animation.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Error loading animation:', err));
  }, []);

  if (!animationData) {
    // Fallback mientras carga
    return (
      <div className={className} style={{ backgroundColor: '#1E3A8A', borderRadius: '50%' }} />
    );
  }

  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

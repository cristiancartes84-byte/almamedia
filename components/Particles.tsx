'use client';

import { useEffect, useState, useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const delay = isMobile ? 2000 : 0;

    console.log(`🎨 Particles: Inicializando en ${isMobile ? 'móvil' : 'desktop'} (delay: ${delay}ms)`);

    const timer = setTimeout(() => {
      setInit(true);
      console.log('🎨 Particles: Init completado, renderizando...');
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    console.log('✅ tsParticles engine cargado');
  }, []);

  const particlesLoaded = useCallback(async () => {
    console.log('✅ Partículas renderizadas en DOM');
  }, []);

  if (!init) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Particles
      id="particles-js"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
      options={{
        background: {
          color: {
            value: 'transparent'
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: !isMobile,
              mode: 'grab'
            },
            onClick: {
              enable: !isMobile,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        particles: {
          color: {
            value: ['#C8FF00', '#9FCC00', '#ffffff']
          },
          links: {
            color: '#C8FF00',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out'
            },
            random: true,
            speed: 1.5,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: isMobile ? 40 : 80
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              sync: false
            }
          }
        },
        detectRetina: true
      }}
    />
  );
}

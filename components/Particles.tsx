'use client';

import { useEffect, useState, useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Detectar si es móvil para optimización
    const isMobile = window.innerWidth < 768;

    // En móvil, esperar 2s antes de cargar (prioridad baja)
    const delay = isMobile ? 2000 : 0;

    console.log(`🎨 Particles: Inicializando en ${isMobile ? 'móvil' : 'desktop'} (delay: ${delay}ms)`);

    const timer = setTimeout(() => {
      setInit(true);
      console.log('🎨 Particles: Init completado, renderizando...');
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    // Cargar solo el slim bundle (más ligero)
    await loadSlim(engine);
    console.log('✅ tsParticles cargado exitosamente');
  }, []);

  if (!init) return null;

  // Detectar móvil para ajustar cantidad de partículas
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Particles
      id="particles-js"
      init={particlesInit}
      className="fixed w-full h-full top-0 left-0 pointer-events-none"
      style={{ zIndex: 1 }}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: isMobile ? 40 : 80, // 50% menos en móvil
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ['#C8FF00', '#9FCC00', '#ffffff']
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: '#C8FF00',
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'out'
            }
          }
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: !isMobile, // Desactivar en móvil
              mode: 'grab'
            },
            onClick: {
              enable: !isMobile, // Desactivar en móvil
              mode: 'push'
            },
            resize: {
              enable: true,
              delay: 0.5
            }
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
        detectRetina: true
      }}
    />
  );
}

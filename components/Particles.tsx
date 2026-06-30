'use client';

import { useEffect, useCallback } from 'react';

export default function ParticlesBackground() {
  useEffect(() => {
    // Solo cargar particles en el cliente
    if (typeof window !== 'undefined') {
      loadParticles();
    }
  }, []);

  const loadParticles = useCallback(async () => {
    const particlesJS = (window as any).particlesJS;

    if (particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
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
              opacity_min: 0.1
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1
            }
          },
          line_linked: {
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
            out_mode: 'out'
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return <div id="particles-js" className="fixed w-full h-full top-0 left-0 z-0 pointer-events-none" />;
}

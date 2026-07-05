'use client';

import { useEffect } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function Particles() {
  useEffect(() => {
    console.log('🎨 Starting direct tsParticles initialization...');

    const initParticles = async () => {
      try {
        console.log('🎨 Loading slim bundle...');
        await loadSlim(tsParticles);
        console.log('✅ Slim bundle loaded!');

        console.log('🎨 Creating particles container...');
        await tsParticles.load({
          id: 'particles-js',
          options: {
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: ['#C8FF00', '#9FCC00', '#ffffff'],
              },
              links: {
                color: '#C8FF00',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'out',
                },
                random: true,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          },
        });

        console.log('✅ Particles container created successfully!');
      } catch (error) {
        console.error('❌ Error initializing particles:', error);
      }
    };

    initParticles();

    // Cleanup no es necesario - tsParticles maneja el cleanup automáticamente
    // cuando el div se desmonta
  }, []);

  console.log('🎨 Rendering Particles component');

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}

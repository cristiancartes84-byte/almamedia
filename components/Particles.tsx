'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log('🎨 Initializing tsParticles engine...');
    await loadSlim(engine);
    console.log('✅ tsParticles engine loaded!');
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log('✅ Particles container loaded!', container);
  }, []);

  const options: ISourceOptions = {
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
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  console.log('🎨 Rendering Particles component...');

  return (
    <Particles
      id="particles-js"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}

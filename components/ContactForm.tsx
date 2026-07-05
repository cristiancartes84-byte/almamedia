'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const result = await emailjs.send(
        'service_dzaae1u',
        'template_3g3zoce',
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone || 'No proporcionado',
          service: formData.service || 'No especificado',
          message: formData.message,
        },
        'tQ5gNltQu7Sk4zIVy'
      );

      if (result.status === 200) {
        setStatus('success');
        // Limpiar formulario
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
          service: '',
          message: '',
        });

        // Reset después de 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error: any) {
      console.error('Error enviando email:', error);
      setStatus('error');
      setErrorMessage(error.text || 'Error al enviar el mensaje. Intenta de nuevo.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">Envía tu consulta</h2>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <p className="text-green-400 font-semibold">✅ ¡Mensaje enviado exitosamente!</p>
          <p className="text-sm text-green-300 mt-1">Te responderemos en menos de 24 horas.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 font-semibold">❌ Error al enviar</p>
          <p className="text-sm text-red-300 mt-1">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="from_name" className="block text-sm font-semibold mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors disabled:opacity-50"
            placeholder="Juan Pérez"
          />
        </div>

        <div>
          <label htmlFor="from_email" className="block text-sm font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors disabled:opacity-50"
            placeholder="juan@empresa.cl"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={status === 'sending'}
            className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors disabled:opacity-50"
            placeholder="+56 9 1234 5678"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold mb-2">
            Servicio de interés
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={status === 'sending'}
            className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors disabled:opacity-50"
          >
            <option value="">Selecciona un servicio</option>
            <option value="Diseño Web">Diseño Web</option>
            <option value="SEO">SEO</option>
            <option value="SEO Local">SEO Local</option>
            <option value="Fotografía de Producto">Fotografía de Producto</option>
            <option value="Video de Producto">Video de Producto</option>
            <option value="Paquete Completo">Paquete Completo</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Cuéntanos sobre tu proyecto *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            disabled={status === 'sending'}
            className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none disabled:opacity-50"
            placeholder="Describe brevemente qué necesitas..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'sending' ? '⏳ Enviando...' : 'Enviar Consulta'}
        </button>

        <p className="text-sm text-[var(--color-muted)] text-center">
          * Campos obligatorios
        </p>
      </form>
    </div>
  );
}

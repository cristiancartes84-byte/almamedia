'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/admin/dashboard');
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Credenciales incorrectas');
        setLoading(false);
      } else {
        router.push('/admin/dashboard');
        router.refresh();
      }
    } catch (error) {
      setError('Error al iniciar sesión');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0a0a0a' }}>
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Logo Alma Media - Solo texto */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-1">
            <span className="text-3xl font-black" style={{ color: '#C8FF00' }}>Alma</span>
            <span className="text-3xl font-black text-white">Media</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2 text-white">
          Panel de Administración
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Ingresa tus credenciales para continuar
        </p>

        {error && (
          <div className="bg-red-900/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
              placeholder="admin@almamedia.cl"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-bold transition-all disabled:opacity-50 hover:shadow-[0_0_20px_rgba(200,255,0,0.3)]"
            style={{ backgroundColor: '#C8FF00', color: '#0a0a0a' }}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Alma Media © 2026
        </p>
      </div>
    </div>
  );
}

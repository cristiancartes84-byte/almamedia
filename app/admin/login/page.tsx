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
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #064E38 0%, #10B981 100%)' }}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10" viewBox="0 0 512 512" fill="#F59E0B">
              <path d="M104,480H64a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,104,480Z"/>
              <path d="M232,480H192a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,232,480Z"/>
              <path d="M360,480H320a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,360,480Z"/>
              <path d="M488,480H448a24,24,0,0,1-24-24V88a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,488,480Z"/>
              <path d="M104,168c-5.1,0-10.2-2-14.1-5.9L36,108.1c-7.8-7.8-7.8-20.5,0-28.3l53.9-53.9c7.8-7.8,20.5-7.8,28.3,0l107,107,91-91c7.8-7.8,20.5-7.8,28.3,0l120,120c3.9,3.9,5.9,9,5.9,14.1s-2,10.2-5.9,14.1l-16,16c-7.8,7.8-20.5,7.8-28.3,0l-89.9-89.9-91,91c-7.8,7.8-20.5,7.8-28.3,0l-107-107-39.9,39.9C114.2,166,109.1,168,104,168z"/>
            </svg>
            <div>
              <span className="text-2xl font-bold" style={{ color: '#064E38' }}>Divisa</span>
              <span className="text-2xl font-bold" style={{ color: '#F59E0B' }}>Chile</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2" style={{ color: '#064E38' }}>
          Panel de Administración
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Ingresa tus credenciales para continuar
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="admin@divisachile.cl"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-bold text-white transition-colors disabled:opacity-50"
            style={{ backgroundColor: '#10B981' }}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '', newEmail: '', newName: '' });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'ok' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      setForm(f => ({ ...f, newEmail: session.user?.email || '', newName: session.user?.name || '' }));
    }
  }, [session]);

  if (status === 'loading' || !session) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      setMessage({ type: 'error', text: 'Las contraseñas nuevas no coinciden' });
      return;
    }
    if (form.newPassword && form.newPassword.length < 8) {
      setMessage({ type: 'error', text: 'La contraseña debe tener al menos 8 caracteres' });
      return;
    }
    if (!form.currentPassword) {
      setMessage({ type: 'error', text: 'Ingresa tu contraseña actual para confirmar cambios' });
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword || undefined,
          newEmail: form.newEmail || undefined,
          newName: form.newName || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: 'error', text: data.error || 'Error al guardar' });
      } else {
        setMessage({ type: 'ok', text: 'Cambios guardados. Cierra sesión y vuelve a ingresar.' });
        setForm(f => ({ ...f, currentPassword: '', newPassword: '', confirmPassword: '' }));
        await update({ name: form.newName, email: form.newEmail });
      }
    } catch {
      setMessage({ type: 'error', text: 'Error de conexión' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 512 512" fill="#F59E0B">
                <path d="M104,480H64a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,104,480Z"/>
                <path d="M232,480H192a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,232,480Z"/>
                <path d="M360,480H320a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,360,480Z"/>
                <path d="M488,480H448a24,24,0,0,1-24-24V88a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,488,480Z"/>
                <path d="M104,168c-5.1,0-10.2-2-14.1-5.9L36,108.1c-7.8-7.8-7.8-20.5,0-28.3l53.9-53.9c7.8-7.8,20.5-7.8,28.3,0l107,107,91-91c7.8-7.8,20.5-7.8,28.3,0l120,120c3.9,3.9,5.9,9,5.9,14.1s-2,10.2-5.9,14.1l-16,16c-7.8,7.8-20.5,7.8-28.3,0l-89.9-89.9-91,91c-7.8,7.8-20.5,7.8-28.3,0l-107-107-39.9,39.9C114.2,166,109.1,168,104,168z"/>
              </svg>
              <div>
                <span className="text-xl font-bold" style={{ color: '#064E38' }}>Divisa</span>
                <span className="text-xl font-bold" style={{ color: '#F59E0B' }}>Chile</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
                ← Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/admin/login' })}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Configuración de cuenta</h1>
        <p className="text-gray-500 mb-8">Actualiza tu email, nombre y contraseña</p>

        {/* Sesión activa */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Sesión activa</h2>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-white text-xl font-bold">
              {session.user?.name?.charAt(0) || 'A'}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{session.user?.name}</p>
              <p className="text-sm text-gray-500">{session.user?.email}</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full font-medium">Admin</span>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSave} className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Modificar datos</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              value={form.newName}
              onChange={e => setForm(f => ({ ...f, newName: e.target.value }))}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={form.newEmail}
              onChange={e => setForm(f => ({ ...f, newEmail: e.target.value }))}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <hr className="border-gray-100" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nueva contraseña <span className="text-gray-400 font-normal">(dejar en blanco para no cambiar)</span></label>
            <input
              type="password"
              value={form.newPassword}
              onChange={e => setForm(f => ({ ...f, newPassword: e.target.value }))}
              placeholder="Mínimo 8 caracteres"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {form.newPassword && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar nueva contraseña</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={e => setForm(f => ({ ...f, confirmPassword: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          )}

          <hr className="border-gray-100" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña actual <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={form.currentPassword}
              onChange={e => setForm(f => ({ ...f, currentPassword: e.target.value }))}
              placeholder="Requerida para confirmar cualquier cambio"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {message && (
            <div className={`px-4 py-3 rounded-lg text-sm ${message.type === 'ok' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-700'}`}>
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            className="w-full py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50"
          >
            {saving ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </form>

        {/* Cerrar sesión */}
        <div className="mt-6 bg-white rounded-xl border border-red-100 p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Sesión</h2>
          <p className="text-sm text-gray-600 mb-4">Al cerrar sesión deberás volver a ingresar tus credenciales.</p>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { mockExchangeRates } from '@/data/mockData';
import { formatCLP, formatChileanNumber } from '@/lib/utils';

export default function CalculatorUF() {
  const [ufAmount, setUfAmount] = useState<string>('1');
  const [clpAmount, setClpAmount] = useState<string>('');
  const [mode, setMode] = useState<'uf-to-clp' | 'clp-to-uf'>('uf-to-clp');

  const ufValue = mockExchangeRates.UF;

  const calculateUFtoCLP = (uf: string) => {
    const ufNum = parseFloat(uf.replace(/\./g, '').replace(',', '.')) || 0;
    return formatCLP(ufNum * ufValue, false);
  };

  const calculateCLPtoUF = (clp: string) => {
    const clpNum = parseFloat(clp.replace(/\./g, '').replace(',', '.')) || 0;
    return formatChileanNumber(clpNum / ufValue, 4);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🧮 Calculadora UF</h3>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('uf-to-clp')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'uf-to-clp'
              ? 'text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          style={mode === 'uf-to-clp' ? { backgroundColor: '#10B981' } : {}}
        >
          UF → CLP
        </button>
        <button
          onClick={() => setMode('clp-to-uf')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'clp-to-uf'
              ? 'text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          style={mode === 'clp-to-uf' ? { backgroundColor: '#10B981' } : {}}
        >
          CLP → UF
        </button>
      </div>

      <div className="space-y-4">
        {mode === 'uf-to-clp' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad en UF
              </label>
              <input
                type="text"
                value={ufAmount}
                onChange={(e) => setUfAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent"
                placeholder="100"
              />
            </div>
            <div className="rounded-lg p-4" style={{ backgroundColor: '#ECFDF5', border: '2px solid #10B981' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#065F46' }}>
                Equivale a
              </div>
              <div className="text-2xl font-bold" style={{ color: '#064E38' }}>
                {calculateUFtoCLP(ufAmount)} CLP
              </div>
              <div className="text-xs text-gray-600 mt-2">
                1 UF = {formatCLP(ufValue)}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad en CLP
              </label>
              <input
                type="text"
                value={clpAmount}
                onChange={(e) => setClpAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent"
                placeholder="1.000.000"
              />
            </div>
            <div className="rounded-lg p-4" style={{ backgroundColor: '#ECFDF5', border: '2px solid #10B981' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#065F46' }}>
                Equivale a
              </div>
              <div className="text-2xl font-bold" style={{ color: '#064E38' }}>
                {calculateCLPtoUF(clpAmount)} UF
              </div>
              <div className="text-xs text-gray-600 mt-2">
                1 UF = {formatCLP(ufValue)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

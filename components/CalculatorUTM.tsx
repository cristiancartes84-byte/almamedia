'use client';

import { useState } from 'react';
import { mockExchangeRates } from '@/data/mockData';
import { formatCLP, formatChileanNumber } from '@/lib/utils';

export default function CalculatorUTM() {
  const [utmAmount, setUtmAmount] = useState<string>('1');
  const utmValue = mockExchangeRates.UTM;

  const calculateUTMtoCLP = (utm: string) => {
    const utmNum = parseFloat(utm.replace(/\./g, '').replace(',', '.')) || 0;
    return formatCLP(utmNum * utmValue, false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Calculadora UTM</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cantidad en UTM
          </label>
          <input
            type="text"
            value={utmAmount}
            onChange={(e) => setUtmAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent"
            placeholder="10"
          />
        </div>

        <div className="rounded-lg p-4" style={{ backgroundColor: '#ECFDF5', border: '2px solid #10B981' }}>
          <div className="text-xs font-semibold mb-1" style={{ color: '#065F46' }}>
            Equivale a
          </div>
          <div className="text-2xl font-bold" style={{ color: '#064E38' }}>
            {calculateUTMtoCLP(utmAmount)} CLP
          </div>
          <div className="text-xs text-gray-600 mt-2">
            1 UTM = {formatCLP(utmValue)}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-800">
            <strong>UTM Junio 2026:</strong> La UTM se actualiza mensualmente por el SII.
            Úsala para multas, trámites y pagos tributarios.
          </p>
        </div>
      </div>
    </div>
  );
}

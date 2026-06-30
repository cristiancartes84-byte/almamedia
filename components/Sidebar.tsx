'use client';

import { useState } from 'react';
import { mockExchangeRates } from '@/data/mockData';
import { formatCLP, formatChileanNumber } from '@/lib/utils';
import CurrencySelector from './CurrencySelector';
import { useIndicators } from '@/lib/hooks/useIndicators';

export default function Sidebar() {
  const [amount, setAmount] = useState<string>('1.000');
  const [fromCurrency, setFromCurrency] = useState<string>('CLP');
  const [toCurrency, setToCurrency] = useState<string>('USD');
  const [history, setHistory] = useState<Array<{from: string, to: string, amount: string, result: string}>>([]);

  const { exchangeRates } = useIndicators();
  const rates = Object.keys(exchangeRates).length > 0 ? exchangeRates : mockExchangeRates;

  // Formatear entrada con puntos de miles
  const formatInput = (value: string): string => {
    // Remover todo excepto números
    const numbers = value.replace(/[^\d]/g, '');
    if (!numbers) return '';

    // Agregar puntos cada 3 dígitos desde la derecha
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInput(e.target.value);
    setAmount(formatted);
  };

  const currencies = [
    { code: 'CLP', name: 'Peso Chileno', flag: 'cl', isCrypto: false },
    { code: 'USD', name: 'Dólar USA', flag: 'us', isCrypto: false },
    { code: 'EUR', name: 'Euro', flag: 'eu', isCrypto: false },
    { code: 'GBP', name: 'Libra Esterlina', flag: 'gb', isCrypto: false },
    { code: 'BRL', name: 'Real Brasileño', flag: 'br', isCrypto: false },
    { code: 'ARS', name: 'Peso Argentino', flag: 'ar', isCrypto: false },
    { code: 'MXN', name: 'Peso Mexicano', flag: 'mx', isCrypto: false },
    { code: 'JPY', name: 'Yen Japonés', flag: 'jp', isCrypto: false },
    { code: 'CNY', name: 'Yuan Chino', flag: 'cn', isCrypto: false },
    { code: 'UF', name: 'UF', flag: 'cl', isCrypto: false },
    { code: 'UTM', name: 'UTM', flag: 'cl', isCrypto: false },
    { code: 'BTC', name: 'Bitcoin', flag: 'btc', isCrypto: true },
    { code: 'ETH', name: 'Ethereum', flag: 'eth', isCrypto: true }
  ];

  const addToHistory = () => {
    const result = convertAmount();
    const newEntry = {
      from: fromCurrency,
      to: toCurrency,
      amount: amount,
      result: result
    };
    setHistory(prev => [newEntry, ...prev].slice(0, 5)); // Mantener solo las últimas 5
  };

  const convertAmount = (): string => {
    const amountNum = parseFloat(amount.replace(/\./g, '').replace(',', '.')) || 0;

    if (fromCurrency === 'CLP') {
      const rate = rates[toCurrency as keyof typeof rates];
      return formatChileanNumber(amountNum / rate, 2);
    } else if (toCurrency === 'CLP') {
      const rate = rates[fromCurrency as keyof typeof rates];
      return formatCLP(amountNum * rate, false);
    } else {
      const fromRate = rates[fromCurrency as keyof typeof rates];
      const toRate = rates[toCurrency as keyof typeof rates];
      return formatChileanNumber((amountNum * fromRate) / toRate, 2);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Conversor Rápido</h3>

      <div className="space-y-4">
        {/* Cantidad */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad</label>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent"
            placeholder="1.000"
          />
        </div>

        {/* De */}
        <CurrencySelector
          value={fromCurrency}
          onChange={setFromCurrency}
          currencies={currencies}
          label="De"
        />

        {/* Botón de intercambio */}
        <div className="flex justify-center -my-2">
          <button
            onClick={() => {
              const temp = fromCurrency;
              setFromCurrency(toCurrency);
              setToCurrency(temp);
            }}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Intercambiar monedas"
          >
            <svg className="w-5 h-5" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        {/* A */}
        <CurrencySelector
          value={toCurrency}
          onChange={setToCurrency}
          currencies={currencies}
          label="A"
        />

        {/* Resultado */}
        <div className="rounded-lg p-4 mt-4" style={{ backgroundColor: '#ECFDF5', border: '2px solid #10B981' }}>
          <div className="text-xs font-semibold mb-1" style={{ color: '#065F46' }}>Resultado</div>
          <div className="text-2xl font-bold" style={{ color: '#064E38' }}>
            {convertAmount()} {toCurrency}
          </div>
        </div>

        {/* Botón para guardar en historial */}
        <button
          onClick={addToHistory}
          className="w-full px-4 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: '#10B981' }}
        >
          💾 Guardar Conversión
        </button>

        {/* Historial de conversiones */}
        {history.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-bold text-gray-700 mb-2">📋 Historial Reciente</h4>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="text-xs bg-gray-50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {item.amount} {item.from}
                    </span>
                    <span className="text-gray-400">→</span>
                    <span className="font-bold text-gray-800">
                      {item.result} {item.to}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setHistory([])}
              className="text-xs text-red-600 hover:text-red-800 mt-2 underline"
            >
              Limpiar historial
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

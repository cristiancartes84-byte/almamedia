'use client';

import { useState, useRef, useEffect } from 'react';

interface Currency {
  code: string;
  name: string;
  flag: string;
  isCrypto: boolean;
}

interface CurrencySelectorProps {
  value: string;
  onChange: (value: string) => void;
  currencies: Currency[];
  label: string;
}

export default function CurrencySelector({ value, onChange, currencies, label }: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCurrency = currencies.find(c => c.code === value);
  const filteredCurrencies = currencies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>

      {/* Botón selector */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent bg-white text-left flex items-center justify-between hover:border-gray-400 transition-colors"
      >
        <span className="flex items-center gap-3">
          {selectedCurrency?.isCrypto ? (
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              {selectedCurrency.flag === 'btc' ? '₿' : 'Ξ'}
            </span>
          ) : (
            <img
              src={`https://flagcdn.com/w40/${selectedCurrency?.flag}.png`}
              alt={selectedCurrency?.name}
              className="w-8 h-6 rounded shadow-sm object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://flagcdn.com/w40/cl.png`;
              }}
            />
          )}
          <div>
            <div className="text-sm font-medium text-gray-900">{selectedCurrency?.name}</div>
            <div className="text-xs text-gray-500">{selectedCurrency?.code}</div>
          </div>
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-xl max-h-80 overflow-hidden">
          {/* Buscador */}
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar moneda..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-tertiary focus:border-transparent"
              autoFocus
            />
          </div>

          {/* Lista de monedas */}
          <div className="overflow-y-auto max-h-64">
            {filteredCurrencies.map(currency => (
              <button
                key={currency.code}
                type="button"
                onClick={() => {
                  onChange(currency.code);
                  setIsOpen(false);
                  setSearch('');
                }}
                className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left ${
                  value === currency.code ? 'bg-green-50 border-l-4 border-green-500' : ''
                }`}
              >
                {currency.isCrypto ? (
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                    {currency.flag === 'btc' ? '₿' : 'Ξ'}
                  </span>
                ) : (
                  <img
                    src={`https://flagcdn.com/w40/${currency.flag}.png`}
                    alt={currency.name}
                    className="w-10 h-7 rounded shadow-sm object-cover flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = `https://flagcdn.com/w40/cl.png`;
                    }}
                  />
                )}
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">{currency.name}</div>
                  <div className="text-xs text-gray-500">{currency.code}</div>
                </div>
                {value === currency.code && (
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

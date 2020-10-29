import React, { createContext, useState } from 'react';

const userCurrency = createContext(undefined);

const allCurency = {
    RUB: { cost: 90, type: '₽' },
    USD: { cost: 1, type: '$' },
    EUR: { cost: 1 / 1.2, type: '€' },
    GBP: { cost: 1 / 1.1, type: '£' },
    CHF: { cost: 1 / 1.12, type: '₣' }
}

export function CurrencyProvider(props,{ children }) {
    console.log(props);
    const [currency, setCurrency] = useState('USD');
    const { cost, type } = allCurency[currency];
    const newSumCurrencyAmount = (count) => {
        `${(count * cost).toFixed(2)} ${type}`
    }

    return (
        <userCurrency.Provider value={{ currency, setCurrency, newSumCurrencyAmount }}>
            {children}
        </userCurrency.Provider>
    );
}
export default userCurrency;
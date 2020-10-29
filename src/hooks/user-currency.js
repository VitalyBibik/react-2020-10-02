import currencyContext from '../context/user-сurrency'
import { useContext } from 'react';

export function useCurrency() {
    const { curMoney } = useContext(currencyContext);
    return curMoney;
}
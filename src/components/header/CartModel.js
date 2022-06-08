import { useEffect } from 'react';
import { useGlobalStates } from '../hooks/useGlobalState';

const CartModel = () => {
    const { globalState, setChangeGlobalState, productName } = useGlobalStates();

    const handleDeleteProduct = () => {
        setChangeGlobalState(oldValue => ({
            ...oldValue,
            hasSubmit: false
        }))
    };

    const handleCheckout = (event) => {
        setChangeGlobalState(oldValue => ({
            ...oldValue,
            productCheckout: true,
        }));
    }

    useEffect(() => {
        if (!globalState.productCheckout) return;

        setChangeGlobalState(oldValue => ({ ...oldValue, hasSubmit: false }))
    }, [globalState.productCheckout])

    return {
        globalState, productName, handleDeleteProduct, handleCheckout
    }
};

export default CartModel;
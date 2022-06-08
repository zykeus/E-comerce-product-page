import { useState, useEffect } from 'react';
import { useGlobalStates } from '../../../hooks/useGlobalState';

const SectionDetailsModel = () => {
	const [productAmount, setProductAmount] = useState({
		amount: 0,
		price: 250,
		price_discount: 125
	});

	const { productName, setChangeGlobalState, } = useGlobalStates();

	const handleProductAmount = (event) => {

		const btnSubmit = event.target.closest('button#submit');

		if (event.target.textContent === '+') {
			setProductAmount(oldValue => ({
				...oldValue,
				amount: oldValue.amount + 1,
				price: oldValue.amount >= 1 ? oldValue.price + 250 : 250,
				price_discount: oldValue.amount >= 1 ? oldValue.price_discount + 125 : 125

			}))
		};

		if (productAmount.amount === 0) return;

		if (event.target.textContent === '-') setProductAmount(oldValue => ({
			...oldValue,
			amount: oldValue.amount - 1,
			price: oldValue.amount <= 1 ? 250 : oldValue.price - 250,
			price_discount: oldValue.amount <= 1 ? 125 : oldValue.price_discount - 125
		}));

		if (btnSubmit?.lastChild.textContent === 'Add to cart' && productAmount.amount > 0) {
			setChangeGlobalState(oldValue => ({
				...oldValue,
				hasSubmit: true,
				productCheckout: false,
			}))
		}
	};

	useEffect(() => {
		if (!productAmount.amount) return;
		setChangeGlobalState(oldValue => ({
			...oldValue,
			productAmount: productAmount.amount,
			finalProductCost: productAmount.price_discount,
			productDefaultPrice: productAmount.price_discount / productAmount.amount
		}))

	}, [productAmount.amount, productAmount.price, productAmount.price_discount])

	return { productAmount, productName, handleProductAmount }
};

export default SectionDetailsModel;
import { useState, useEffect, useCallback } from 'react';
import { useGlobalStates } from '../../../hooks/useGlobalState';

const FigureProductsModel = () => {
	const [getBtnSlide, setGetBtnSlide] = useState({
		btnSlide: '',
	})
	const { globalState: { currSlide }, setChangeGlobalState, slideProduct } = useGlobalStates();

	const handleGetBtnSlide = useCallback((event) => {

		const btnEL = event.target.closest('button');

		if (btnEL.id === 'prev-slide') {
			setChangeGlobalState(oldValue => ({ ...oldValue, currSlide: currSlide - 1 }))
			setGetBtnSlide({ btnSlide: 'prev-slide' })
		} else {
			setGetBtnSlide({ btnSlide: 'next-slide' })
			setChangeGlobalState(oldValue => ({ ...oldValue, currSlide: currSlide + 1 }))
		}
	}, [currSlide, getBtnSlide.btnSlide])

	useEffect(() => {
		if (getBtnSlide.btnSlide === 'prev-slide') {
			slideProduct.current.forEach(slide => {
				const datasetValue = Number(slide.dataset.slide) === currSlide
				if (datasetValue) {
					slide.classList.replace('opacity-0', 'opacity-100')
					setChangeGlobalState(oldValue => ({ ...oldValue, productImageUrl: slide.src }))
				}
				else {
					slide.classList.replace('opacity-100', 'opacity-0')
				}
			})
			if (currSlide < 0) {
				setChangeGlobalState(oldValue => ({ ...oldValue, currSlide: slideProduct.current.length - 1 }))
				slideProduct.current.forEach(slide => {
					const datasetValue = Number(slide.dataset.slide) === currSlide
					if (datasetValue) {
						slide.classList.replace('opacity-0', 'opacity-100')
						setChangeGlobalState(oldValue => ({ ...oldValue, productImageUrl: slide.src }))
					}
					else {
						slide.classList.replace('opacity-100', 'opacity-0')
					}
				})
				return;
			}
		} else {
			slideProduct.current.forEach(slide => {
				const datasetValue = Number(slide.dataset.slide) === currSlide
				if (datasetValue) {
					slide.classList.replace('opacity-0', 'opacity-100')
					setChangeGlobalState(oldValue => ({ ...oldValue, productImageUrl: slide.src }))
				}
				else slide.classList.replace('opacity-100', 'opacity-0')
			})
			if (currSlide >= slideProduct.current.length) {
				setChangeGlobalState(oldValue => ({ ...oldValue, currSlide: 0 }))
				setGetBtnSlide({ btnSlide: 'next-slide' })
				slideProduct.current.forEach(slide => {
					slide.classList.replace('opacity-100', 'opacity-0')
					const image = Number(slide.dataset.slide) === currSlide
					if (image) {
						slide.classList.replace('opacity-0', 'opacity-100')
						setChangeGlobalState(oldValue => ({ ...oldValue, productImageUrl: slide.src }))
					}
				})
				return;
			}
		}
	}, [currSlide, getBtnSlide.btnSlide])

	return {
		slideProduct, handleGetBtnSlide
	}
};

export default FigureProductsModel
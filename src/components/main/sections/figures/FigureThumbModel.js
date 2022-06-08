import { useState, useEffect, useCallback } from 'react';
import { useGlobalStates } from '../../../hooks/useGlobalState';

const FigureThumbModel = () => {
	const [getFigureEl, setGetFigureEl] = useState({
		currentLiEl: null,
		oldLiEl: null,
		currentImgEL: null,
		oldImgEl: null,
	});

	const { globalState, setChangeGlobalState, slideProduct, slideThumb } = useGlobalStates();

	const handleGetFigureEl = useCallback((event) => {
		const imgEl = event.target.closest('img');
		const liEl = event.target.closest('li');

		if (!imgEl && !liEl) return;

		setGetFigureEl(oldValue => {
			return {
				currentLiEl: liEl,
				oldLiEl: oldValue.oldLiEl ? oldValue.currentLiEl : liEl,
				currentImgEL: imgEl,
				oldImgEl: oldValue.oldImgEl ? oldValue.currentImgEL : imgEl
			}
		})
		if (event.target.closest('img')) {
			setChangeGlobalState(oldValue => ({ ...oldValue, currSlide: Number(event.target.dataset.thumb), productImageUrl: event.target.src }))
			slideProduct.current.forEach(slide => {
				if (slide.dataset.slide === event.target.dataset.thumb) {
					slide.classList.replace('opacity-0', 'opacity-100')
				}
				else slide.classList.replace('opacity-100', 'opacity-0')
			})
			imgEl.classList.replace('opacity-100', 'opacity-30')


		} if (liEl) {
			liEl.classList.replace('border-transparent', 'border-primary');
			liEl.classList.add('rounded-lg')
			liEl.classList.replace('bg-none', 'bg-white')
		}

	}, [getFigureEl.currentLiEl, getFigureEl.oldLiEl, getFigureEl.currentImgEL, getFigureEl.oldImgEl, globalState.currSlide]);

	useEffect(() => {
		if (getFigureEl.oldImgEl && getFigureEl.oldImgEl !== getFigureEl.currentImgEL) {
			getFigureEl.oldImgEl.classList.replace('opacity-30', 'opacity-100')
		}

		if (getFigureEl.oldLiEl && getFigureEl.oldLiEl !== getFigureEl.currentLiEl) {
			getFigureEl.oldLiEl.classList.replace('border-primary', 'border-transparent')
			getFigureEl.oldLiEl.classList.replace('bg-white', 'bg-none')
		}

		slideThumb.current.forEach(thumb => {
			if (Number(thumb.dataset.thumb) === globalState.currSlide) {
				thumb.classList.replace('opacity-100', 'opacity-30');
				thumb.parentElement.classList.replace('border-transparent', 'border-primary')
				thumb.parentElement.classList.add('rounded-lg')
				thumb.parentElement.classList.replace('bg-none', 'bg-white')
				setChangeGlobalState(oldValue => ({ ...oldValue, productImageUrl: thumb.src }))
			} else {
				thumb.classList.replace('opacity-30', 'opacity-100')
				thumb.parentElement.classList.replace('border-primary', 'border-transparent')
				thumb.parentElement.classList.replace('bg-white', 'bg-none')
			}

		})


	}, [getFigureEl.currentLiEl, getFigureEl.oldLiEl, getFigureEl.currentImgEL, getFigureEl.oldImgEl, globalState.currSlide])
	return {
		handleGetFigureEl, slideThumb
	}
};

export default FigureThumbModel;
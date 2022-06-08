import { Children } from 'react'
import { ReactComponent as IconNext } from '../../../../assets/svg/icon-next.svg';
import { ReactComponent as IconPrev } from '../../../../assets/svg/icon-previous.svg';

import firstProduct from '../../../../assets/images/image-product-1.jpg';
import secondProduct from '../../../../assets/images/image-product-2.jpg';
import thirdProduct from '../../../../assets/images/image-product-3.jpg';
import fourthProduct from '../../../../assets/images/image-product-4.jpg';

const PRODUCTS = [firstProduct, secondProduct, thirdProduct, fourthProduct];

const FigureProductsView = ({ hasOpenModal, handleGetBtnSlide, handleOpenFigureModal, slideProduct, openCart }) => {
	return (
		<div className={` relative w-full h-full md:row-start-1 md:row-span-2`}>
			<figure className='h-full'>
				<ul className='h-full'>
					{Children.toArray(
						PRODUCTS.map((product, index) => {
							return (
								<li>
									<img onClick={handleOpenFigureModal} ref={element => slideProduct.current[index] = element} className={`absolute left-0 top-0 object-cover h-full w-full transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'} md:rounded-2xl cursor-pointer z-0`}
										src={product} alt={`Product ${index + 1}`} data-slide={index} />
								</li>
							)
						})
					)}
				</ul>
			</figure>
			<button id='prev-slide' onClick={handleGetBtnSlide} className={`flex justify-center items-center absolute inset-y-0 my-auto border-2 bg-white h-10 ml-4 w-10 sm:w-12 sm:h-12 sm-md:w-14 sm-md:h-14 rounded-full text-sm ${openCart ? 'hidden' : 'inline-block'} ${hasOpenModal ? 'md:visible ml-0 -left-5' : 'md:invisible'} `}>
				<IconPrev className='inline-block' />
			</button>
			<button id='next-slide' onClick={handleGetBtnSlide} className={`flex justify-center items-center absolute inset-y-0 my-auto right-0 border-2 bg-white h-10 mr-4 w-10 sm:w-12 sm:h-12 sm-md:w-14 sm-md:h-14 rounded-full
	        	text-sm ${openCart ? 'hidden' : 'inline-block'} ${hasOpenModal ? 'md:visibile mr-0 -right-5' : 'md:invisible'} `}>
				<IconNext className='inline-block' />
			</button>
		</div>

	)
};

export default FigureProductsView
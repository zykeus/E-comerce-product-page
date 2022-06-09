import { Children } from 'react'

import firstProductThumb from '../../../../assets/images/image-product-1-thumbnail.jpg';
import secondProductThumb from '../../../../assets/images/image-product-2-thumbnail.jpg';
import thirdProductThumb from '../../../../assets/images/image-product-3-thumbnail.jpg';
import fourthProductThumb from '../../../../assets/images/image-product-4-thumbnail.jpg';

const THUMB_PRODUCTS = [firstProductThumb, secondProductThumb, thirdProductThumb, fourthProductThumb];

const FigureThumbView = ({ handleGetFigureEl, slideThumb, hasOpenModal }) => {
	return (
		<figure className={` ${hasOpenModal ? 'visible' : 'hidden'} row-start-3 relative md:block mt-4 md:mt-0 h-full w-full`}>
			<ul className={`flex justify-between h-full w-full ${hasOpenModal ? 'px-8 mt-5' : 'px-0 mt-0'} `}>
				{Children.toArray(
					THUMB_PRODUCTS.map((thumbs, index) => {
						return (
							<li onClick={handleGetFigureEl} className='relative group mr-4 
	        					last:mr-0 border-transparent grow cursor-pointer border-2 h-fit bg-none'>
								<img ref={element => slideThumb.current[index] = element} className={`rounded-lg transition-all object-fit w-full 	
	        							h-fit lg:h-20 xl:h-20 hover:opacity-30 opacity-100`
								}
									src={thumbs}
									alt={`Product thumbnail ${index + 1}`}
									data-thumb={`${index}`} />
							</li>
						)
					})
				)}
			</ul>
		</figure>
	)
};

export default FigureThumbView;
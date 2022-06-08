import { ReactComponent as IconCart} from '../../../../assets/svg/icon-cart.svg';

const SectionDetailsView = ({model, productName, handleProductAmount}) => {
	return (
		<section className='md:relative pt-4 px-6 pb-6 font-bold font-primary sm-md:px-8 md:px-6 md:col-start-7 md:col-span-full md-lg:col-start-5 md-lg:col-span-full md:mt-6 md-lg:mt-10 lg:h-fit xl:h-auto xl:relative xl:mt-16 md-lg:px-0 md-lg:py-0'>
	        <p className='uppercase text-primary text-sm'>Sneaker Company</p>
	        <h2 ref={productName} className='capitalize pt-2 text-3xl sm:text-4xl sm-md:text-5xl text-vark-blue md-sm:text-[3.5rem] md:text-3xl md-lg:text-4xl xl:mb-4 xl:text-5xl xl:pt-4'>
	          Fall Limited Edition Sneakers
	        </h2>

	        <p className='text-dark-gray-blue text-[.95rem] sm:text-xl sm-md:text-[1.4rem] font-normal pt-4 text-sm md:text-base md-lg:text-base lg:text-lg xl:text-base'>
	          These low-profile sneakers are your perfect
	          casual wear companion. Featuring a durable
	          rubber outer sole, they'll withstand everthing
	          the weather can offer.
	        </p>

	        <div className='flex justify-between mt-6 items-center md-lg:block'>
	          <p className='flex items-center'>
	            <strong className='text-2xl text-vark-blue sm:text-3xl'>${`${model.price_discount.toFixed(2)}`}</strong>
	            <mark className='ml-4 bg-primary-light text-primary inline-block w-12 h-full text-center rounded-md sm:w-14 sm:h-full text-lg sm:text-xl'>50%</mark>
	          </p>

	          <p>
	            <del className='text-gray-blue font-bold'>${`${model.price.toFixed(2)}`}</del>
	          </p>
	        </div>

	        <div className='md:flex md:justify-between md:mt-4'>
		        <div className='flex justify-between py-2 px-6 md:px-4 bg-light-gray-blue rounded-lg mb-4 mt-6 items-center md:w-2/4 md:my-0 md:py-1 md:mr-3' id='price-amount'>
		          <button onClick={handleProductAmount} className='text-primary font-bold text-2xl hover:opacity-50'>-</button>
		          <p className='flex items-center md:pt-1'>{model.amount}</p>
		          <button onClick={handleProductAmount} className='text-primary font-bold text-2xl  hover:opacity-50'>+</button>
		        </div>
		        <button onClick={handleProductAmount} className='text-center w-full bg-primary rounded-lg py-3 text-white font-bold transition-opacity hover:opacity-50' id='submit'>
		          <span><IconCart className='inline-block mr-4 fill-white' /></span> <em className='not-italic'>Add to cart</em>
		        </button>
	        </div>
	   	</section>
	)
};

export default SectionDetailsView;
import { Fragment } from 'react';
import { ReactComponent as IconDelete } from '../../assets/svg/icon-delete.svg';

const CartView = ({ model, productName, handleDeleteProduct, handleCheckout, cart }) => {
    return (
        <div ref={cart} className={`hidden absolute w-11/12 inset-x-0 mx-auto top-[4.8rem] sm:top-28 bg-white rounded-lg md:right-2 md:top-20 md:w-80 md:inset-x-auto md:shadow-xl md-lg:right-8 lg:w-1/4 lg:right-12`}>
            <div className='py-5 px-6 border-b border-b-gray-blue flex items-center text-vark-blue sm:text-lg'>
                <h3 className='font-semibold'>Cart</h3>
            </div>
            <figure className='flex flex-col text-center text-dark-gray-blue bold h-52 sm:h-96 sm:text-lg shadow-2xl md:h-52 lg:min-h-52 font-extrabold'>
                {model.hasSubmit | model.productCheckout ?
                    <Fragment>
                        {model.productCheckout ?
                            <div className='h-full flex items-center justify-center'>
                                <p className='font-bold text-primary uppercase'>Product checkout!</p>
                            </div>
                            :
                            <div className='px-4 py-6'>
                                <figure className='relative flex items-center w-full'>
                                    <img className='h-14 w-14 rounded-lg mr-2 sm:h-20 sm:w-20 md-sm:h-24 md-sm:w-24 md:h-14 md:w-14' src={model.productImageUrl} />
                                    <footer className='relative sm-md:ml-2 md:ml-0'>
                                        <h3 className='text-base sm:text-xl font-medium text-dark-gray-blue sm-md:text-2xl md-sm:text-3xl md:text-sm'>
                                            {productName.current.textContent}
                                        </h3>
                                        <div className='text-left flex text-base sm:text-lg sm-md:text-xl md-sm:mt-2 md-sm:text-2xl md:mt-0 md:text-base font-medium'>
                                            <p className='mr-1'>${model.productDefaultPrice.toFixed(2)}</p>
                                            <p className='mr-1'>
                                                <span className='mr-1'>x</span>
                                                {model.productAmount}</p>
                                            <p className='text-vark-blue font-bold'>${model.finalProductCost.toFixed(2)}</p>
                                        </div>
                                    </footer>
                                    <button onClick={handleDeleteProduct} className='absolute right-0 inset-y-0 my-auto'>
                                        <IconDelete />
                                    </button>
                                </figure>
                                <button onClick={handleCheckout} className='flex justify-center items-center w-full bg-primary font-bold text-base text-white py-4 mt-6 rounded-lg sm:text-lg sm:mt-12 sm:py-8 sm:rounded-xl sm:text-xl md:mt-6 md:py-4 md:rounded-lg md:text-base hover:opacity-50'>Checkout
                                </button>
                            </div>
                        }
                    </Fragment>
                    :
                    <div className='h-full flex items-center'>
                        <p className='w-full'>Your cart is empty.</p>
                    </div>
                }
            </figure>
        </div>
    )
};

export default CartView;
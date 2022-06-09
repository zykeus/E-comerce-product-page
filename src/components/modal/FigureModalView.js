import { createPortal } from 'react-dom';

const FigureModalView = ({ hasOpenModal, FigureThumbController, FigureProductsController, handleCloseModal }) => {
	console.log(hasOpenModal)
	return createPortal(
		<div className={` hidden ${hasOpenModal ? 'md:flex' : 'md:invisible'} fixed w-full min-h-screen left-0 top-0 bg-black z-40 flex justify-center items-center`}>
			<div className='
					absolute md:w-1/2 md:h-fit md-lg:w-1/3 flex flex-col z-[100]'>
				<div className='relative h-full w-full'>{FigureProductsController}</div>
				<div>{FigureThumbController}</div>
				<button onClick={handleCloseModal} onKeyPress={handleCloseModal} className='absolute -top-10 text-white font-bold right-1 text-xl'>X</button>
			</div>
		</div>,
		document.getElementById('modal-figure')
	)
}

export default FigureModalView;
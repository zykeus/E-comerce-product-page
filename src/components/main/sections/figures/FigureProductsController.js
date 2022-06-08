import FigureProductsView from './FigureProductsView';
import FigureProductsModel from './FigureProductsModel';

const FigureProductsController = ({ hasOpenModal }) => {
	const { handleGetBtnSlide, handleOpenFigureModal, slideProduct, openCart } = FigureProductsModel();
	return (
		<FigureProductsView
			hasOpenModal={hasOpenModal} handleGetBtnSlide={handleGetBtnSlide}
			handleOpenFigureModal={handleOpenFigureModal}
			slideProduct={slideProduct} openCart={openCart} />
	)
};

export default FigureProductsController;
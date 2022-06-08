import FigureProductsView from './FigureProductsView';
import FigureProductsModel from './FigureProductsModel';

const FigureProductsController = ({ hasOpenModal }) => {
	const { handleGetBtnSlide, slideProduct } = FigureProductsModel();
	return (
		<FigureProductsView
			hasOpenModal={hasOpenModal} handleGetBtnSlide={handleGetBtnSlide}
			slideProduct={slideProduct} />
	)
};

export default FigureProductsController;
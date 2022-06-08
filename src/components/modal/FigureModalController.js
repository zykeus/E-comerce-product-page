import FigureModalView from './FigureModalView';
import FigureModalModel from './FigureModalModel';
import FigureProductsController from '../main/sections/figures/FigureProductsController';
import FigureThumbController from '../main/sections/figures/FigureThumbController';

const FigureModalController = () => {
	const { hasOpenModal, handleCloseModal } = FigureModalModel();

	return (
		<FigureModalView handleCloseModal={handleCloseModal} hasOpenModal={hasOpenModal} FigureThumbController={
			<FigureThumbController hasOpenModal={hasOpenModal} />}
			FigureProductsController={
				<FigureProductsController hasOpenModal={hasOpenModal} />}>
		</FigureModalView>
	)
}

export default FigureModalController;
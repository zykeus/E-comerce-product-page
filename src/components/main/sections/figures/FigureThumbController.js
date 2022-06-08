import FigureThumbView from './FigureThumbView';
import FigureThumbModel from './FigureThumbModel';

const FigureThumbController = ({ hasOpenModal }) => {
	const { handleGetFigureEl, slideThumb } = FigureThumbModel();
	return (
		<FigureThumbView
			hasOpenModal={hasOpenModal} handleGetFigureEl={handleGetFigureEl}
			slideThumb={slideThumb} />
	)
};

export default FigureThumbController;
import FigureThumbView from './FigureThumbView';
import FigureThumbModel from './FigureThumbModel';

const FigureThumbController = () => {
	const { handleGetFigureEl, slideThumb } = FigureThumbModel();
	return (
		<FigureThumbView
			handleGetFigureEl={handleGetFigureEl}
			slideThumb={slideThumb} />
	)
};

export default FigureThumbController;
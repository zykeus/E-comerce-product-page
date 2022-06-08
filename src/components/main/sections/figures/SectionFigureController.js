import FigureProductsController from './FigureProductsController';
import FigureThumbController from './FigureThumbController';
import SectionFigureView from './SectionFigureView';

const SectionFigureController = () => {

    return (
        <SectionFigureView>
            <FigureProductsController />
            <FigureThumbController />
        </SectionFigureView>
    )
};

export default SectionFigureController
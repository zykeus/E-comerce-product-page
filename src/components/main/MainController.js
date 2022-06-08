import MainView from './MainView';
import SectionFigureController from './sections/figures/SectionFigureController';
import SectionDetailsController from './sections/details/SectionDetailsController';

const MainController = () => {

    return (
        <MainView>
            <SectionFigureController />
            <SectionDetailsController />
        </MainView>
    )
};

export default MainController;
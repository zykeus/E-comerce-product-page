import HeaderController from './components/header/HeaderController';
import MainController from './components/main/MainController';
import FigureModalController from './components/modal/FigureModalController';
import { useMediaQuery } from 'react-responsive';
import { useGlobalStates } from './components/hooks/useGlobalState';

const menuLinks = ['collections', 'men', 'women', 'about', 'contact'];

function App() {
  const isMediumScreenOrHigher = useMediaQuery({ query: '(min-width: 768px)' });
  const { globalState: { hasOpenModal } } = useGlobalStates();

  return (
    <>
      <HeaderController menuLinks={menuLinks} />
      <MainController />
      {isMediumScreenOrHigher ?
        hasOpenModal && <FigureModalController /> : null
      }
    </>
  );
}

export default App;


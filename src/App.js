import HeaderController from './components/header/HeaderController';
import MainController from './components/main/MainController';
const menuLinks = ['collections', 'men', 'women', 'about', 'contact'];

function App() {

  return (
    <>
      <HeaderController menuLinks={menuLinks} />
      <MainController />
    </>
  );
}

export default App;


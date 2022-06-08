import HeaderController from './components/header/HeaderController';

const menuLinks = ['collections', 'men', 'women', 'about', 'contact'];

function App() {

  return (
    <>
      <HeaderController menuLinks={menuLinks} />
    </>
  );
}

export default App;


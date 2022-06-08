import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChangeGlobalStatesProvider from './components/hooks/useGlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChangeGlobalStatesProvider>
      <App />
    </ChangeGlobalStatesProvider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import Navegation from './Components/Navegation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navegation />
      <App />    
    </BrowserRouter>
  </React.StrictMode>
);


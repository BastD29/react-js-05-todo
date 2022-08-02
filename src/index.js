import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DATA from './data'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
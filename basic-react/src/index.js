import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hello from './hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello />
  </React.StrictMode>
);
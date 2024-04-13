import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // will cause the useEffect function executed twice
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

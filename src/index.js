import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/bicycleWorld.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the React root node from the HTML container.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the full application in strict mode.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

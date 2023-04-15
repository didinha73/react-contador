import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Lista from './Lista';
import Contador from './Contador';

const root = ReactDOM.createRoot(document.getElementById('root'));
//JSX parece html mas é JS
root.render(
    <div>
      <Contador valor={10} />
      <Contador valor={0} />
      <Contador valor={4} />
    </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

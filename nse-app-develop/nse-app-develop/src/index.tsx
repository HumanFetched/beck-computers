import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { webappStore } from './lib/state';

ReactDOM.render(
  <Provider store={webappStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

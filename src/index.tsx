import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css';
import './Index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <Provider store={store}> {/* Оставляем Provider для Redux */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
);


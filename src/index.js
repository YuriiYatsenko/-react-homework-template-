import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { MoviesProvider } from './components/Cinemania/context/MoviesContext';
import App from './components/App.jsx';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MoviesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MoviesProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


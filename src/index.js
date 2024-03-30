import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "./Css/sign.css";
import "./all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Css/card.css";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './rtk/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>     
      <Provider store={store}>
    < App />
    </Provider>
  
    </Router>
  </React.StrictMode>
);


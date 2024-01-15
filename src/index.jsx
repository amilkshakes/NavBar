import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Home from './Home';

// const root = document.getElementById('root');

// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   root
// );

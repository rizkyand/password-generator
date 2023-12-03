import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebIcon from './asset/image/mechanical.png';
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
      />
      <App />
  </React.StrictMode>
);

// Change the title
document.title = 'Password Generator';

// Change the favicon (icon)
function changeFavicon(link) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const existingFavicon = document.querySelector('link[rel="icon"]');
    const favicon = existingFavicon || document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = link;

    if (!existingFavicon) {
        head.appendChild(favicon);
    }
}

// Replace 'path/to/your/favicon.ico' with the path to your desired favicon
changeFavicon(WebIcon);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

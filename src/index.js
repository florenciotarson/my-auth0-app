import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1) Import Auth0Provider and your config
import { Auth0Provider } from '@auth0/auth0-react';
import authConfig from './auth_config.json';

const onRedirectCallback = (appState) => {
  // This ensures that after Auth0 redirects back,
  // your app knows where to continue from
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2) Wrap your app inside Auth0Provider */}
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app
reportWebVitals();

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router';

import { Layout } from './components';

import './assets/css/global.css';
import './assets/css/reset.css';
import { routes } from './routes/routes';

export const App = () => {
  const element = useRoutes(routes);
  return <Layout>{element}</Layout>;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

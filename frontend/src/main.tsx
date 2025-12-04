import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactModal from 'react-modal';
import { BrowserRouter, useRoutes } from 'react-router';

import { Layout } from './components';
import { AuthProvider } from './contexts/auth/AuthProvider.tsx';
import { routes } from './routes/routes.tsx';

import './assets/css/global.css';
import './assets/css/reset.css';

ReactModal.setAppElement('#root');

export const App = () => {
  const element = useRoutes(routes);
  return <Layout>{element}</Layout>;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

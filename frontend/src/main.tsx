import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from './components';
import Home from './pages/Home/Home.tsx';
import LandingPage from './pages/Landing/Landing.tsx';
import SignIn from './pages/SignIn/SignIn.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';

import './assets/css/global.css';
import './assets/css/reset.css';
import { routePaths } from './routes/routePaths.ts';

const { landingPage, home, signIn, signUp } = routePaths;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={landingPage().path} element={<LandingPage />} />
          <Route path={home().path} element={<Home />} />
          <Route path={signIn().path} element={<SignIn />} />
          <Route path={signUp().path} element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);

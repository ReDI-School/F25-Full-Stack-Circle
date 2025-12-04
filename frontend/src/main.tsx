import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactModal from 'react-modal';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from './components';
import Home from './pages/Home/Home.tsx';
import LandingPage from './pages/Landing/Landing.tsx';
import SignIn from './pages/SignIn/SignIn.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';

import './assets/css/global.css';
import './assets/css/reset.css';
import { routePaths } from './routes/routePaths.ts';
import ActivePlayer from './pages/ActivePlayer/ActivePlayer.tsx';

const { landingPage, home, signIn, signUp, activePlayer } = routePaths;

ReactModal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={landingPage().path} element={<LandingPage />} />
          <Route path={home().path} element={<Home />} />
          <Route path={signIn().path} element={<SignIn />} />
          <Route path={signUp().path} element={<SignUp />} />
          <Route path={activePlayer().path} element={<ActivePlayer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);

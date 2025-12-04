import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactModal from 'react-modal';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from './components';
import { AuthProvider } from './contexts/auth/AuthProvider.tsx';
import ActivePlayer from './pages/ActivePlayer/ActivePlayer.tsx';
import Home from './pages/Home/Home.tsx';
import LandingPage from './pages/Landing/Landing.tsx';
import Language from './pages/Language/Language.tsx';
import MyList from './pages/MyList/MyList.tsx';
import News from './pages/News/News.tsx';
import Shows from './pages/Shows/Shows.tsx';
import SignIn from './pages/SignIn/SignIn.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';
import { ProtectedRoute } from './routes/ProtectedRoute.tsx';
import { routePaths } from './routes/routePaths.ts';

import './assets/css/global.css';
import './assets/css/reset.css';

const { landingPage, home, shows, news, myList, language, signIn, signUp, activePlayer } =
  routePaths;

ReactModal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path={landingPage().path} element={<LandingPage />} />
            <Route path={signIn().path} element={<SignIn />} />
            <Route path={signUp().path} element={<SignUp />} />
            <Route
              path={home().path}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path={shows().path}
              element={
                <ProtectedRoute>
                  <Shows />
                </ProtectedRoute>
              }
            />
            <Route
              path={news().path}
              element={
                <ProtectedRoute>
                  <News />
                </ProtectedRoute>
              }
            />
            <Route
              path={myList().path}
              element={
                <ProtectedRoute>
                  <MyList />
                </ProtectedRoute>
              }
            />
            <Route
              path={language().path}
              element={
                <ProtectedRoute>
                  <Language />
                </ProtectedRoute>
              }
            />
            <Route
              path={activePlayer().path}
              element={
                <ProtectedRoute>
                  <ActivePlayer />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

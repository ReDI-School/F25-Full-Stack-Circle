import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components';
import Home from './pages/Home/Home.tsx';
import SignIn from './pages/SignIn/SignIn.tsx';
import WhoIsWatching from './pages/Profiles/WhoIsWatching.tsx';
import { ActivePlayer } from './pages/ActivePlayer';


import './assets/css/reset.css';
import './assets/css/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/browse" element={<WhoIsWatching />} />
          <Route path="/player" element={<ActivePlayer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);

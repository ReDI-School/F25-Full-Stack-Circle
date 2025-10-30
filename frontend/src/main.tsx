import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from './components';
import Home from './pages/Home/Home.tsx';
import WhoIsWatching from './pages/Profiles/WhoIsWatching.tsx';
import SignIn from './pages/SignIn/SignIn.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';

import './assets/css/global.css';
import './assets/css/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/browse" element={<WhoIsWatching />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);

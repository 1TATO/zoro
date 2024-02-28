import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Eligibility } from './pages/Eligibility';
import { Home } from './pages/Home';
import { Info } from './pages/Info';
import { Tokenomics } from './pages/Tokenomics';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
      </Route>
    </Routes>
  );
}

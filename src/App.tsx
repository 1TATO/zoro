import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import './styles/global.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen bg-[#D00003] px-[520px] py-7 relative font-acme font-bold max-sm:px-4">
        <Router />
      </div>
    </BrowserRouter>
  );
}

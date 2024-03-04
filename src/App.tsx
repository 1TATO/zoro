import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import './styles/global.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full bg-[#E40000] px-24 py-10 relative font-acme font-bold max-sm:px-4">
        <Router />
      </div>
    </BrowserRouter>
  );
}

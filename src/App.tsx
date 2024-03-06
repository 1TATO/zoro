import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import './styles/global.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full bg-[#e40000] px-24 py-10 relative font-carter max-sm:px-7">
        <Router />
      </div>
    </BrowserRouter>
  );
}

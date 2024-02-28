import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="flex items-center justify-between text-white text-xl max-sm:text-sm">
      <Link to={'/'}>Home</Link>
      <Link to={'/info'}>Info</Link>
      <Link to={'/eligibility'}>Eligibility</Link>
      <Link to={'/tokenomics'}>Tokenomics</Link>
    </div>
  );
}

import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="flex items-center justify-end gap-10 text-white text-xl max-sm:text-sm">
      <Link to={'/'}>Home</Link>
      <Link to={'/info'}>Info</Link>
      <Link to={'/eligibility'}>Eligibility</Link>
      <Link to={'/tokenomics'}>Tokenomics</Link>
      <Link
        to={'/'}
        className="bg-[rgb(255,10,10)] p-2 text-xl max-sm:text-3xl"
      >
        Whitelist
      </Link>
    </nav>
  );
}

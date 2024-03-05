import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <p className="text-white">Zasfasdfasd</p>

      <nav className="flex items-center justify-end gap-10 text-white text-xl max-sm:text-base">
        <Link to={'/'}>Home</Link>
        <Link to={'/info'}>Info</Link>
        <Link to={'/eligibility'}>Eligibility</Link>
        <Link to={'/tokenomics'}>Tokenomics</Link>
        <Link to={'/'} className="bg-[rgb(255,10,10)] p-2">
          Whitelist
        </Link>
      </nav>
    </div>
  );
}

import { Link } from 'react-router-dom';
import zoroGif from '../assets/zoroGif.gif';

export function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={zoroGif}
          alt=""
          className="h-[580px] w-[580px] max-sm:w-72 max-sm:h-72"
        />

        <h1 className="text-[#16231A] text-6xl mt-16 max-sm:text-4xl">
          $ZORO SRC-20
        </h1>

        <Link
          to={'https://forms.gle/P6bE8GeDA9ooqQUR9'}
          target="_blank"
          className="bg-[rgb(255,10,10)] p-6 text-5xl mt-10 max-sm:text-3xl"
        >
          Apply for Whitelist
        </Link>
      </div>
    </>
  );
}

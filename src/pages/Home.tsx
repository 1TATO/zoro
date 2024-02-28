import { Link } from 'react-router-dom';
import buyZoro from '../assets/buyZoro.png';
import zoroGif from '../assets/zoroGif.gif';

export function Home() {
  return (
    <>
      <img
        src={buyZoro}
        alt=""
        className="absolute right-4 bottom-0 max-sm:h-20"
      />

      <div className="flex flex-col items-center">
        <img
          src={zoroGif}
          alt=""
          className="h-[580px] w-[580px] max-sm:w-72 max-sm:h-72"
        />

        <h1 className="text-[#16231A] font-bold text-6xl mt-7 font-acme max-sm:text-4xl">
          $ZORO SRC-20
        </h1>

        <div className="mt-14 mb-28">
          <Link
            to={'https://forms.gle/P6bE8GeDA9ooqQUR9'}
            target="_blank"
            className="bg-[#ff5456] p-4 text-4xl font-acme font-bold max-sm:text-3xl"
          >
            Apply for Whitelist
          </Link>
        </div>
      </div>
    </>
  );
}

import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import buyZoro2 from '../assets/buyZoro2.png';

export function Tokenomics() {
  return (
    <div className="">
      <img
        src={buyZoro2}
        alt=""
        className="absolute right-0 w-96 top-20 max-sm:w-56"
      />

      <h1 className="text-[#16231A] font-bold text-6xl mt-52 text-center max-sm:text-5xl">
        Tokenomics:
      </h1>

      <ul className="text-center text-3xl mt-10 w-[480px] m-auto max-sm:text-xl max-sm:w-full">
        <li>1,000,000,000 Max Supply</li>
        <li>$0.00005 per token</li>
        <li>$50K FDV</li>
        <li>950,000,000 to whitelist</li>
        <li>5% to team/advisors</li>
      </ul>

      <div className="absolute flex flex-col bottom-0 left-[50%] -translate-x-[50%] mb-4">
        <div className="flex justify-center space-x-8 mt-[40%]">
          <Link to={'https://x.com/zorosrc'} target="_blank">
            <FontAwesomeIcon icon={faXTwitter} size="3x" />
          </Link>
          <Link to={'https://t.me/ZoroSRC/1'} target="_blank">
            <FontAwesomeIcon icon={faTelegram} size="3x" />
          </Link>
        </div>

        <p className="text-center mt-4">All rights reserved by ZOROSRC 2024</p>
      </div>
    </div>
  );
}

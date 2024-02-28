// import buyZoro from '../assets/buyZoro.png';
import buyZoro2 from '../assets/buyZoro2.png';

export function Info() {
  return (
    <>
      <img
        src={buyZoro2}
        alt=""
        className="absolute right-0 w-96 top-20 max-sm:w-56"
      />

      <h1 className="text-[#16231A] text-6xl mt-20 text-center max-sm:text-5xl max-sm:mt-32">
        Info:
      </h1>

      <ul className="list-disc text-center text-3xl mt-10 w-[480px] m-auto max-sm:text-xl max-sm:w-full max-sm:list-inside">
        <li className="pb-14">Created by a Stamps/SRC-20 OG</li>
        <li className="pb-14">
          Whitelist method to ensure fairer distribution (2.5% max wallets)
        </li>
        <li className="pb-14">
          Each holder of atleast 0.2% ($100) will receive utility relating to
          sub 1K stamps!
        </li>
        <li>Experienced SRC-20 advisors on board</li>
      </ul>
    </>
  );
}

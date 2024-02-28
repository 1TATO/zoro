import buyZoro from '../assets/buyZoro.png';

export function Eligibility() {
  return (
    <>
      <img
        src={buyZoro}
        alt=""
        className="absolute right-4 top-20 max-sm:w-56"
      />

      <h1 className="text-[#16231A] font-bold text-6xl font-kdam mt-20 text-center max-sm:text-5xl max-sm:mt-32">
        WL Eligible:
      </h1>

      <p className="mt-14 p-4 text-4xl font-kdam font-bold text-center max-sm:text-3xl max-sm:mt-2">
        WL available to holders of (one of these):
      </p>

      <ul className="text-center text-3xl mt-10 w-[480px] m-auto max-sm:text-xl max-sm:w-full max-sm:mt-2">
        <li>$STAMP &gt; 22000</li>
        <li>$KEVIN &gt; 116000</li>
        <li>$STMAP &gt; 20000</li>
        <li>$LUFFY &gt; 1000000</li>
        <li>$PAD &gt; 150</li>
        <li>$STUNK &gt; 500000</li>
        <li>$ SWP &gt; 100000</li>

        <li className="mt-4">At least one StamPunk</li>
      </ul>
    </>
  );
}

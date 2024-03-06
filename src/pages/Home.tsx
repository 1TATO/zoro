import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import zoroArt from '../assets/zoroArt.png';
import zoroGif from '../assets/zoroGif.gif';

export function Home() {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const homeSec = useRef<null | HTMLElement>(null);
  const infoSec = useRef<null | HTMLElement>(null);
  const eligibilitySec = useRef<null | HTMLElement>(null);
  const tokenomicsSec = useRef<null | HTMLElement>(null);

  const infoClick = () => {
    infoSec.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpenState(false);
  };

  const eligibilityClick = () => {
    eligibilitySec.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpenState(false);
  };

  const tokenomicsClick = () => {
    tokenomicsSec.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpenState(false);
  };

  function toggleMenu() {
    setMenuOpenState(!menuOpenState);
  }

  const styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '24px',
      height: '20px',
      right: '20px',
      top: '1px',
    },
    bmBurgerBars: {
      background: '#FFFFFF',
    },
    bmBurgerBarsHover: {
      background: '#FFFFFF',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      padding: '35px',
    },
    bmCross: {
      background: '#FFF',
      height: '30px',
      top: '14px',
      right: '10px',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      right: '0px',
      width: '240px',
      top: '0px',
    },
    bmMenu: {
      background: '#ff0a0a',
      padding: '2.5em 1em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#FFF',
      // padding: '0.8em',
    },
    bmItem: {
      display: 'block',
      fontSize: '1.5em',
      paddingBottom: '12px',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0)',
      top: '0px',
    },
  };

  return (
    <>
      <section ref={homeSec} />

      {/* BURGER MENU */}
      <div className="sm:hidden">
        <div className="flex flex-row items-center justify-between">
          <p className="text-white text-4xl font-oleo sm:hidden absolute top-5">
            Z
          </p>

          <button
            className="absolute h-5 w-5 right-5 top-5 text-white z-50 pb-16 pl-24 pr-10"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} />
          </button>
        </div>

        <Menu
          right
          width={'10%'}
          isOpen={menuOpenState}
          customBurgerIcon={false}
          styles={styles}
        >
          <button className="text-white text-2xl font-oleo sm:hidden sm:absolute sm:right-5 sm:top-50 mb-10 -mt-4">
            Z
          </button>
          <button>Home</button>
          <button onClick={infoClick}>Info</button>
          <button onClick={eligibilityClick}>Eligibility</button>
          <button onClick={tokenomicsClick}>Tokenomics</button>
          <Link
            to={'https://forms.gle/P6bE8GeDA9ooqQUR9'}
            target="_blank"
            className="bg-[#E3E700] text-black p-4 rounded-full mt-10 text-center"
          >
            Whitelist
          </Link>
        </Menu>
      </div>

      {/* HEADER */}
      <section className="flex flex-row items-center justify-between">
        <p className="text-white text-2xl font-oleo max-sm:hidden">Z</p>

        <nav className="flex items-center justify-end gap-10 text-white text-xl gap-y-5 max-sm:text-xs max-sm:hidden">
          <button>Home</button>
          <button onClick={infoClick}>Info</button>
          <button onClick={eligibilityClick}>Eligibility</button>
          <button onClick={tokenomicsClick}>Tokenomics</button>
          <Link
            to={'https://forms.gle/P6bE8GeDA9ooqQUR9'}
            target="_blank"
            className="bg-[#E3E700] text-black p-4 rounded-full text-center max-sm:hidden"
          >
            Whitelist
          </Link>
        </nav>
      </section>

      {/* HOME */}
      <div className="max-sm:hidden max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:mt-48">
        <img
          src={zoroGif}
          alt=""
          className="h-[580px] w-[580px] fixed mt-96 -ml-28 z-40 max-sm:w-[22rem] max-sm:h-[22rem] max-sm:absolute max-sm:m-auto"
        />
      </div>

      <div className="h-[70%] flex flex-col items-center justify-between">
        <img
          src={zoroGif}
          alt=""
          className="sm:hidden max-sm:w-[22rem] max-sm:h-[22rem]"
        />

        <h1 className="text-white text-[14rem] mt-52 max-sm:text-7xl max-sm:mb-5 max-sm:mt-6">
          $ZORO
        </h1>

        <Link
          to={'https://forms.gle/P6bE8GeDA9ooqQUR9'}
          target="_blank"
          className="bg-[#E3E700] p-6 text-5xl rounded-full mt-1 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 max-sm:text-2xl max-sm:z-50"
        >
          Apply for Whitelist
        </Link>
      </div>

      {/* INFO */}
      <section ref={infoSec}>
        <div className="relative bg-white text-[#E40000] p-20 rounded-2xl w-[70%] m-auto mb-20 mt-56 max-sm:px-1 max-sm:py-16 max-sm:w-full max-sm:mt-28">
          <div className="absolute right-2 top-2">
            <img src={zoroArt} alt="" className="h-32 max-sm:h-14" />
          </div>

          <h1 className=" text-6xl text-center max-sm:text-5xl max-sm:mt-10">
            Info:
          </h1>

          <ul className="list-disc text-center text-3xl font-inter mt-10 w-[480px] m-auto max-sm:text-xl max-sm:w-full max-sm:list-inside">
            <li className="pb-14">Created by a Stamps/SRC-20 OG</li>
            <li className="pb-14">
              Whitelist method to ensure fairer distribution (2.5% max wallets)
            </li>
            <li className="pb-14">
              Each holder of atleast 0.2% ($100) will receive utility relating
              to sub 1K stamps!
            </li>
            <li>Experienced SRC-20 advisors on board</li>
          </ul>
        </div>
      </section>

      {/* WL Eligibility */}
      <section ref={eligibilitySec}>
        <div>
          <h1 className="text-6xl mt-32 text-center max-sm:text-5xl max-sm:mt-20">
            WL Eligibility:
          </h1>

          <p className="mt-14 p-4 text-4xl text-center max-sm:text-3xl max-sm:mt-2">
            WL available to holders of (one of these):
          </p>

          <ul className="text-center text-3xl font-inter mt-10 w-[480px] m-auto max-sm:text-xl max-sm:w-full max-sm:mt-2">
            <li>$STAMP &gt; 22000</li>
            <li>$KEVIN &gt; 116000</li>
            <li>$STMAP &gt; 20000</li>
            <li>$LUFFY &gt; 1000000</li>
            <li>$PAD &gt; 150</li>
            <li>$STUNK &gt; 500000</li>
            <li>$ SWP &gt; 100000</li>

            <li className="mt-4">At least one StamPunk</li>
          </ul>
        </div>
      </section>

      {/* Tokenomics */}
      <section ref={tokenomicsSec}>
        <div className="relative bg-white text-[#E40000] p-20 w-[70%] m-auto rounded-2xl mt-32 mb-48 max-sm:mt-20 max-sm:w-full max-sm:mb-64 max-sm:px-1 max-sm:py-16">
          <h1 className="font-bold text-6xl text-center max-sm:text-5xl">
            Tokenomics:
          </h1>

          <ul className="text-center text-3xl font-inter mt-10 w-[480px] m-auto max-sm:text-xl max-sm:w-full">
            <li>1,000,000,000 Max Supply</li>
            <li>$0.00005 per token</li>
            <li>$50K FDV</li>
            <li>950,000,000 to whitelist</li>
            <li>5% to team/advisors</li>
          </ul>

          <div className="absolute right-1 bottom-1">
            <img src={zoroArt} alt="" className="h-32 max-sm:h-14" />
          </div>
        </div>
      </section>

      <div className="absolute flex flex-col bottom-0 left-[50%] -translate-x-[50%] max-sm:pb-20">
        <div className="flex justify-center space-x-8">
          <Link to={'https://x.com/zorosrc'} target="_blank">
            <FontAwesomeIcon icon={faXTwitter} size="3x" />
          </Link>
          <Link to={'https://t.me/ZoroSRC/1'} target="_blank">
            <FontAwesomeIcon icon={faTelegram} size="3x" />
          </Link>
        </div>

        <p className="text-center mt-4">All rights reserved by ZOROSRC 2024</p>
      </div>
    </>
  );
}

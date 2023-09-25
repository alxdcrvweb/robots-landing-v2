import classNames from "classnames";
import { observer } from "mobx-react";
import type { NextPage } from "next";
import s from "./home.module.sass";
import RoundedButton from "../components/buttons/roundedButtons";
import { useRouter } from "next/router";
import Footer from "../components/layout/footer";
import { useEffect, useState } from "react";
import { Web3Store } from "../stores/WalletStore";
import { useInjection } from "inversify-react";
const Home: NextPage = observer((props) => {
  const router = useRouter();
  const [animation, setAnimation] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverBnb, setHoverBnb] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  const { setConnect, web3, getBlockNumber, blockNumber } =
    useInjection(Web3Store);
  useEffect(() => {
    setConnect();
  }, []);
  useEffect(() => {
    if (web3) {
      getBlockNumber();

      let interval = setInterval(() => {
        getBlockNumber();
      }, 10000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [web3]);
  return (
    <div className={classNames(s.container, s.main)}>
      <div className={classNames(s.banner)}>
        <a
          onMouseLeave={() => {
            setHover(false);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          href="https://testnet.bscscan.com"
          target="_blank"
        >
          <img
            className={s.explore__left__image}
            style={{ opacity: !hover ? 1 : 0 }}
            src="../../left__image.svg"
          />
          <img
            className={s.explore__left__image}
            style={{ opacity: hover ? 1 : 0 }}
            src="../../left__image__hover.svg"
          />
        </a>
        <div className={s.explore__right__image}>
          <div className={s.explore__right__text}>{blockNumber}</div>
          <div onMouseEnter={() => setHoverBnb(true)} onMouseLeave={() => setHoverBnb(false)}>
            <img
              src="../../bnb.svg"
              style={{ opacity: !hoverBnb ? 1 : 0, position: "absolute", cursor:'pointer' }}
            />
            <img src="../../bnb__hover.svg" style={{ opacity: hoverBnb ? 1 : 0, cursor:'pointer'  }} />
          </div>
          <div className={s.explore__right__tba}>TBA</div>
        </div>
        <img className={classNames(s.shade)} src="../backgrounds/shade.svg" />
        <div className={s.explore__header}>
          <div
            className={classNames(
              s.explore__header__text,
              !animation
                ? s.explore__header__text__left__animated
                : s.explore__header__static__left
            )}
          >
            EXPLORE
          </div>
          <img
            className={classNames(
              s.explore__header__text,
              !animation
                ? s.explore__header__image__rotate
                : s.explore__header__image
            )}
            src="../../banner__head.svg"
          />
          <div
            className={classNames(
              s.explore__header__text,
              !animation
                ? s.explore__header__text__right__animated
                : s.explore__header__static__right
            )}
          >
            TO EARN
          </div>
        </div>
        <div
          className={classNames(s.cryptera)}
          style={{ marginBottom: "23px" }}
        >
          <div className={classNames(s.explore__img)}>
            <img
              className={classNames(!animation ? s.animation2 : s.static)}
              src="../separator__left.svg"
            />
          </div>
          <img src="../crypterra.svg" />
          <div className={classNames(s.explore__img)}>
            <img
              src="../separator__right.svg"
              className={classNames(!animation ? s.animation : s.static)}
            />
          </div>
        </div>
        <div className={classNames(s.separator)}></div>
        <div className={classNames(s.text)}>
          Crypterra is a play-to-earn NFT game set in a sci-fi universe,
          featuring precise mechanics, extensive lore, and modern artwork. The
          game is designed to provide each player with a journey of earning
          rewards through using strategical thinking, exploration, and various
          events.
        </div>
        <RoundedButton
          title="EXPLORE"
          color="#FAE232"
          take={() => {
            router.push("https://beta.crypterra.app/");
          }}
        />
      </div>
      <Footer />
    </div>
  );
});

export default Home;

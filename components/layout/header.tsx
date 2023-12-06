import styles from "./header.module.sass";
import connect from "./connect.module.scss";
import ConnectButtonCustom from "./connectButtonCustom";
import Link from "next/link";
import { UIStore } from "../../stores/UIStore";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import { addressSlice } from "../../utils/utilities";
import Burger from "../svgs/icons/burger";
import HeaderBg from "../svgs/backgrounds/HeaderBg";
import { TypeAnimation } from "react-type-animation";
import classNames from "classnames";
const links = ["LEARN", "TOKENOMICS", "BUY TOKEN"];

const Header = observer(() => {
  const address = "";
  const [consoleType, setConsoleType] = useState("");
  const [menu, setMenu] = useState(false);
  const [play, setPlay] = useState(99);
  const [next, setNext] = useState(false);

  return (
    <div>
      <HeaderBg />
      <div className={styles.header}>
        <div className={styles.header__link}>
          <img />
          <div style={{ marginRight: "5px" }}>
            <div className={styles.header__text}>
              {!next ? (
                <TypeAnimation
                  sequence={[
                    "We designed Crypterra to provide fun and earnings for our players, regardless of the unstable conditions of the crypto market.",
                    () => {
                      setNext(true);
                    },
                  ]}
                  repeat={0}
                  speed={80}
                  cursor={true}
                  className={styles.type__text}
                />
              ) : (
                "We designed Crypterra to provide fun and earnings for our players, regardless of the unstable conditions of the crypto market."
              )}
            </div>
          </div>
        </div>
        <div className={connect.console__header}>
          {links.map((el, i) => {
            const styled =
              el == consoleType
                ? { transform: "translateX(0px) translateY(-25px)" }
                : {};
            return (
              <div
                key={i}
                className={connect.console__link}
                style={{
                  transform: el == "TOKENOMICS" ? "translateX(-23px)" : "none",
                }}
                onMouseEnter={() => {
                  setPlay(i);
                }}
                onMouseLeave={() => {
                  setPlay(99);
                }}
              >
                <a>
                  {play == i || consoleType == el ? (
                    <RandomReveal
                      isPlaying={play == i}
                      duration={0.5}
                      revealDuration={1}
                      characters={el}
                    />
                  ) : (
                    el
                  )}
                </a>
                <div className={connect.console__animation}>
                  <div
                    style={{
                      ...styled,
                      backgroundColor: "#FAE232",
                      color: "#FAE232",
                    }}
                  >
                    {el}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.menu__icon} onClick={() => setMenu(!menu)}>
          <Burger color="#FAE232" />
        </div>
        <div
          className={styles.menu__open}
          style={{ display: menu ? "flex" : "none" }}
        >
          <div className={styles.menu__header}>
            <img src="./icons/back.svg" onClick={() => setMenu(!menu)} />
            <img src="../../logo.svg" />
          </div>
          {links.map((el, i) => {
            return (
              <Link href={el} key={i}>
                {el}
              </Link>
            );
          })}
          <a href={`https://goerli.basescan.org/address/${address}`} target="_blank">
            Contract address
          </a>
        </div>
      </div>
    </div>
  );
});
export default Header;

import styles from "./header.module.sass";
import connect from "./connect.module.scss";
import Link from "next/link";
import { observer } from "mobx-react";
import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import Burger from "../svgs/icons/burger";
import HeaderBg from "../svgs/backgrounds/HeaderBg";
import { TypeAnimation } from "react-type-animation";

const links = [
  {title:"DOCS",link:"https://docs.crypterra.app/"}, 
  {title:"TOKENOMICS", link:"https://docs.crypterra.app/economy/tokenomics"}
];
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
                    "WE DESIGNED CRYPTERRA TO PROVIDE A GATEWAY TO THE ONCHAIN WORLDS FOR EVERYONE.",
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
                "WE DESIGNED CRYPTERRA TO PROVIDE A GATEWAY TO THE ONCHAIN WORLDS FOR EVERYONE."
              )}
            </div>
          </div>
        </div>
        <div className={connect.console__header}>
          {links.map((el, i) => {
            const styled =
              el.title == consoleType
                ? { transform: "translateX(0px) translateY(-25px)" }
                : {};
            return (
              <div
                key={i}
                className={connect.console__link}
                style={{
                  transform: el.title == "TOKENOMICS" ? "translateX(-23px)" : "none",
                }}
                onMouseEnter={() => {
                  setPlay(i);
                }}
                onMouseLeave={() => {
                  setPlay(99);
                }}
              >
                <a href={el.link} target="_blank">
                  {play == i || consoleType == el.title ? (
                    <RandomReveal
                      isPlaying={play == i}
                      duration={0.5}
                      revealDuration={1}
                      characters={el.title}
                    />
                  ) : (
                    el.title
                  )}
                </a>
                <div className={connect.console__animation}>
                  <div
                    style={{
                      ...styled,
                      backgroundColor: "#FAE232",
                      color: "#FAE232",
                      marginTop:'-2px'
                    }}
                  >
                    {el.title}
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
              <a href={el.link} key={i}>
                {el.title}
              </a>
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

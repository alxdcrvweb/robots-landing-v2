import { useEffect, useState } from "react";
import Discord from "../svgs/socials/discord";
import Medium from "../svgs/socials/medium";
import Telegram from "../svgs/socials/telegram";
import Twitter from "../svgs/socials/twitter";
import style from "./footer.module.scss";
import FooterBg from "../svgs/backgrounds/FooterBg";
import Play from "../svgs/icons/play";
import classNames from "classnames";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import { UserStore } from "../../stores/UserStore";
const songs = [
  {
    title: "Peripheral Context - Cobby Costa",
    music: "../../music/Peripheral Context - Cobby Costa.mp3",
  },
  {
    title: "Stellar Finale - FormantX",
    music: "../../music/Stellar Finale - FormantX.mp3",
  },
  {
    title: "Fuzzy Logic - Nihoni",
    music: "../../music/Fuzzy Logic - Nihoni.mp3",
  },
];
const Footer = observer(() => {
  const [on, setOn] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [animation, setAnimation] = useState(false)
  const [hover, setHover] = useState(0)
  const [active, setActive] = useState(0);
  const { setVolume, currentSound, playSound } = useInjection(UserStore);
  useEffect(() => {
    if (!disabled) {
      if (!currentSound) {
        playSound(songs[active].music, 0.3);
      } else {
        setVolume(0.3);
      }
    } else if (disabled && currentSound) {
      setVolume(0);
    }
  }, [disabled]);
  useEffect(()=>{
    let tt = setTimeout(()=>{
      setAnimation(!animation)
    },1000)
    return () => clearTimeout(tt)
  },[animation])
  useEffect(() => {
    if (!disabled) {
      playSound(songs[active].music, 0.3);
    }
  }, [active]);
  return (
    <div>
      <div className={style.footer}>
        <FooterBg />
        <div className={style.footer__player}>
          <div
            className={style.music}
            onClick={() => {
              setDisabled(!disabled);
            }}
          >
            {Array.from({ length: 5 }).map((el, i) => {
              return (
                <span
                  className={classNames(
                    style.stroke,
                    disabled && style.disabled
                  )}
                  key={i}
                ></span>
              );
            })}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (active < 2) {
                setActive(active + 1);
              } else {
                setActive(0);
              }
            }}
          >
            <Play />
          </div>
          {songs[active].title}
        </div>

        <div className={style.footer__right}>
          <div className={style.footer__right__el} onMouseEnter={()=>{setHover(1)}} onMouseLeave={()=>{setHover(0)}}>
            <div className={style.footer__right__el__before} style={{background: animation || hover == 1 ? 'white' : 'none' }}/>
            About
          </div>
          <div className={style.footer__right__el} onMouseEnter={()=>{setHover(2)}} onMouseLeave={()=>{setHover(0)}}>
            <div className={style.footer__right__el__before} style={{background: animation || hover == 2 ? 'white' : 'none' }}/>
            location // <span>on-chain</span>
          </div>
          <a className={style.footer__right__el} onMouseEnter={()=>{setHover(3)}} onMouseLeave={()=>{setHover(0)}}>
            <div className={style.footer__right__el__before} style={{background: animation || hover == 3 ? 'white' : 'none' }}/>
            Contract address
          </a>
        </div>
        <div className={style.footer__socials}>
          <div
            className={style.footer__element}
            onMouseEnter={() => {
              setOn("twitter");
            }}
            onMouseLeave={() => {
              setOn("");
            }}
          >
            <Twitter on={on == "twitter"} />
          </div>
          <div
            className={style.footer__element}
            onMouseEnter={() => {
              setOn("telegram");
            }}
            onMouseLeave={() => {
              setOn("");
            }}
          >
            <Telegram on={on == "telegram"} />
          </div>
          <div
            className={style.footer__element}
            onMouseEnter={() => {
              setOn("discord");
            }}
            onMouseLeave={() => {
              setOn("");
            }}
          >
            <Discord on={on == "discord"} />
          </div>
          <div
            className={style.footer__element}
            onMouseEnter={() => {
              setOn("medium");
            }}
            onMouseLeave={() => {
              setOn("");
            }}
          >
            <Medium on={on == "medium"} />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Footer;

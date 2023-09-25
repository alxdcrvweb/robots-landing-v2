import { observer } from "mobx-react";
import Header from "./header";
import { useEffect, useRef } from "react";
import style from "./header.module.sass";
import Loader from "./loader";
import { useLoader } from "../hooks/useLoader";
import classNames from "classnames";

const Layout = observer(({ children }: any) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { status, current } = useLoader(wrapperRef);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.click();
    }
  }, [wrapperRef]);
  return (
    <div ref={wrapperRef}>
      {status && <Header></Header>}
      <Loader ready={status} current={current} />
      <div
        style={{
          display: "block",
          height: "auto",
          overflowY: "hidden",
          overflowX: "hidden",
        }}
      >
        {/* @ts-ignore */}
        {/* <ReactPlayer
          loop
          controls={false}
          muted
          onReady={() => {
            setReady(true);
          }}
          onProgress={(d) => {
            if(d.playedSeconds>1) {
              setStart(true)
            }
            
          }}
          playing={ready}
          className={style.bg}
          style={{opacity: startVideo ? 1 : 0}}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
              embedOptions: {suggestedQuality: 'hd720'}
            }}}
          url="https://www.youtube.com/watch?v=5eWENudjNMA&ab_channel=radius-co"
        /> */}
        <img src="../../../yellowguys.png" className={classNames(style.bg)} />
        {status && children}
      </div>
    </div>
  );
});
export default Layout;

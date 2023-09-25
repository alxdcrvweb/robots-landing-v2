import { useState } from "react";
import style from "./header.module.sass";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import { UIStore } from "../../stores/UIStore";
import { UserStore } from "../../stores/UserStore";

const Loader = observer(
  ({ ready, current }: { ready: boolean; current: number }) => {
    // const { isClicked } = useInjection(UserStore);
    return (
      <div
        className={style.loader}
        style={{ display: ready ? "none" : "flex" }}

      >
        <div className={style.loader__values}>
          <div>{`[ ${current}% ]`} loading</div>
          <div>
            {!ready
              ? `/kx-021/mecha/engine/${Math.round(800 + current / 10)}`
              : "succsess"}
          </div>
        </div>
        <div className={style.loader__bar}>
          <div
            className={style.loader__bar__full}
            style={{ width: `${current}%` }}
          ></div>
        </div>
      </div>
    );
  }
);
export default Loader;

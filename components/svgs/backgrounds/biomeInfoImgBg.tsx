import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { UIStore } from "../../../stores/UIStore";
import style from "../svg.module.scss";
const BiomeInfoImgBg = observer(() => {
  const { color } = useInjection(UIStore);
  return (
    <div className={style.bg}>
    <svg
      width="172"
      height="168"
      viewBox="0 0 172 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8.02567e-08L8.0257e-08 1.83607L18.3607 1.83607L18.3607 -7.22313e-07L0 8.02567e-08Z"
        fill={color}
      />
      <path
        d="M8.0257e-07 18.3607L1.83607 18.3607L1.83607 -8.0257e-08L0 8.02567e-08L8.0257e-07 18.3607Z"
        fill={color}
      />
      <path
        d="M8.02567e-08 168L1.83607 168L1.83606 149.639L-1.52488e-06 149.639L8.02567e-08 168Z"
        fill={color}
      />
      <path
        d="M18.3607 168L18.3607 166.164L-1.60514e-07 166.164L8.02567e-08 168L18.3607 168Z"
        fill={color}
      />
      <path
        d="M171.672 8.02567e-08L171.672 1.83607L153.311 1.83607L153.311 -7.22313e-07L171.672 8.02567e-08Z"
        fill={color}
      />
      <path
        d="M171.672 18.3607L169.836 18.3607L169.836 -8.0257e-08L171.672 8.02567e-08L171.672 18.3607Z"
        fill={color}
      />
      <path
        d="M171.672 168L169.836 168L169.836 149.639L171.672 149.639L171.672 168Z"
        fill={color}
      />
      <path
        d="M153.311 168L153.311 166.164L171.672 166.164L171.672 168L153.311 168Z"
        fill={color}
      />
    </svg>
    </div>
  );
});
export default BiomeInfoImgBg;

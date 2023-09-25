import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { UIStore } from "../../../stores/UIStore";
import style from '../svg.module.scss'
const ModalChoseBg = observer(() => {
  const { color } = useInjection(UIStore);
  return (
    <div className={style.bg}>
      <svg
        width="297"
        height="465"
        viewBox="0 0 297 465"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_105_4588)">
          <path d="M56 3L13.5 3L3 13.5L3 49" stroke={color} strokeWidth="5" />
        </g>
        <g filter="url(#filter1_b_105_4588)">
          <path
            d="M241 462L282 462L294 449.5L294 414"
            stroke={color}
            stroke-width="5"
          />
        </g>
      </svg>
    </div>
  );
});
export default ModalChoseBg;

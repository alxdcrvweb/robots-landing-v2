import { useInjection } from "inversify-react";
import { UIStore } from "../../../stores/UIStore";
import { observer } from "mobx-react";

const CloseBg = observer(() => {
  const { color } = useInjection(UIStore);
  return (
    <div style={{position:'absolute', zIndex:1}}>
      <svg
        width="385"
        height="189"
        viewBox="0 0 385 189"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_100_3911)">
          <g filter="url(#filter0_b_100_3911)">
            <path
              d="M333.5 154.959V11.9035L319.809 -1H209.758H1V154.959L11.4394 168H48.9197H65.9491H319.809L333.5 154.959Z"
              fill="#151515"
              fill-opacity="0.6"
            />
            <path
              d="M333.845 155.321L334 155.173V154.959V11.9035V11.6877L333.843 11.5396L320.152 -1.36387L320.007 -1.5H319.809H209.758H1H0.5V-1V154.959V155.135L0.609663 155.272L11.049 168.312L11.1992 168.5H11.4394H48.9197H65.9491H319.809H320.009L320.153 168.362L333.845 155.321Z"
              stroke={color}
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_b_100_3911"
            x="-15"
            y="-17"
            width="364.5"
            height="201"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_100_3911"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_100_3911"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_100_3911">
            <rect width="385" height="189" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
});
export default CloseBg;

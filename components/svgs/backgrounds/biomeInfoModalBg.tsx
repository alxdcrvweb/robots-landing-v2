import { useInjection } from "inversify-react";
import { UIStore } from "../../../stores/UIStore";
import { observer } from "mobx-react";
const BiomeInfoModalBg = observer(() => {
  const { color } = useInjection(UIStore);
  return (
    <div style={{position:'absolute', zIndex:-1}}>
      <svg
        width="614"
        height="497"
        viewBox="0 0 614 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_100_2143)">
          <path
            d="M612.438 481.646V16.1458L598.749 2.4375H209.721L116.938 1H15.9375L1 16.1458V481.646L11.4375 495.5H48.9111H65.9375H598.749L612.438 481.646Z"
            fill="#151515"
            fill-opacity="0.6"
          />
          <path
            d="M612.793 481.997L612.938 481.851V481.646V16.1458V15.9389L612.791 15.7925L599.102 2.0842L598.956 1.9375H598.749H209.725H209.721L116.945 0.50006V0.5H116.938H15.9375H15.7284L15.5815 0.648903L0.644007 15.7947L0.5 15.9407V16.1458V481.646V481.813L0.600649 481.947L11.0381 495.801L11.1882 496H11.4375H48.9111H65.9375H598.749H598.957L599.104 495.851L612.793 481.997Z"
            stroke={color}
          />
        </g>
        <defs>
          <filter
            id="filter0_b_100_2143"
            x="-15"
            y="-15"
            width="643.438"
            height="526.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_100_2143"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_100_2143"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
});
export default BiomeInfoModalBg;

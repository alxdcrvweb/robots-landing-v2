import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { UIStore } from "../../../stores/UIStore";

const ZonesBg = observer(() => {
  const { color } = useInjection(UIStore);
  return (
    <div style={{position:'absolute', zIndex:1}}>
      <svg
        width="242"
        height="635"
        viewBox="0 0 242 635"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_100_3822)">
          <path
            d="M240.025 629.5L215.66 629.5L212.18 633.014L9.03908 633.014L1.00046 625.063L1.0001 127.5L1.00005 112.5L1.0001 31.9996L12.0385 18.0136L139.039 18.0136L151.039 0.999519L228.539 0.999513L240.025 18.0136L240.025 629.5Z"
            fill="#151515"
            fill-opacity="0.5"
          />
          <path
            d="M240.025 630L240.525 630L240.525 629.5L240.525 18.0136L240.525 17.8607L240.439 17.7338L228.953 0.719728L228.804 0.499513L228.539 0.499513L151.039 0.499519L150.779 0.49952L150.63 0.711312L138.779 17.5136L12.0385 17.5136L11.7962 17.5136L11.646 17.7039L0.607611 31.6898L0.500098 31.8261L0.500098 31.9996L0.50005 112.5L0.500098 127.5L0.500456 625.063L0.500456 625.272L0.648848 625.418L8.68747 633.369L8.83357 633.514L9.03908 633.514L212.18 633.514L212.388 633.514L212.535 633.366L215.869 630L240.025 630Z"
            stroke={color}
          />
        </g>
        <defs>
          <filter
            id="filter0_b_100_3822"
            x="-15"
            y="-15.0005"
            width="271.025"
            height="664.014"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_100_3822"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_100_3822"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
});
export default ZonesBg;

import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { UIStore } from "../../../stores/UIStore";

const ZonesInfoBg = observer(() => {
  const { color } = useInjection(UIStore);
  return (
    <div style={{position:'absolute', zIndex:1}}>
    <svg
      width="370"
      height="270"
      viewBox="0 0 370 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_100_3925)">
        <path
          d="M369 7.5H331.494L321.787 1H149L120 23.5H9.5L1 31.5V230.5L21.409 263.24H286.726L296.746 268.5H358.678L369 263.24L369 7.5Z"
          fill="#151515"
          fill-opacity="0.5"
        />
        <path
          d="M369 7H369.5V7.5V263.24V263.546L369.227 263.685L358.905 268.945L358.798 269H358.678H296.746H296.623L296.514 268.943L286.603 263.74H21.409H21.1315L20.9847 263.504L0.575684 230.764L0.5 230.643V230.5V31.5V31.284L0.657318 31.1359L9.15732 23.1359L9.3017 23H9.5H119.829L148.693 0.604957L148.829 0.5H149H321.787H321.939L322.065 0.584536L331.646 7H369Z"
          stroke={ color }
        />
      </g>
      <path
        d="M354.266 266H356.434L343.368 260H341.2L347.733 263L354.266 266ZM333.801 260H335.97L349.036 266H346.867L333.801 260ZM326.381 260H328.55L341.616 266H339.447L326.381 260ZM318.983 260H321.151L334.217 266H332.049L318.983 260Z"
        fill={ color }
      />
      <path
        d="M325.297 266H327.466L314.4 260H312.231L325.297 266ZM304.833 260H307.001L320.067 266H317.899L304.833 260ZM297.413 260H299.582L312.647 266H310.479L297.413 260ZM290.015 260H292.183L305.249 266H303.08L290.015 260Z"
        fill={ color }
      />
      <defs>
        <filter
          id="filter0_b_100_3925"
          x="-5"
          y="-5"
          width="380"
          height="279.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_100_3925"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_100_3925"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    </div>
  );
});
export default ZonesInfoBg;

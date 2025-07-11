const FooterBg = () => {
  return (
    <div style={{ position: "absolute", zIndex: 1, height: '71px' }}>
      <svg
        width="100vw"
        height="71"
        viewBox="0 0 1538 71"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_285_2436)">
          <path
            d="M1 2.87167V2.87167C1 2.54141 1.26759 2.2736 1.59786 2.27334L246.312 2.0791H851.703L1536 2.27353C1536.55 2.27369 1537 2.72136 1537 3.27353V68.0791C1537 68.6314 1536.55 69.0791 1536 69.0791H1528.4H265.672H196.276H43.5411H2C1.44771 69.0791 1 68.6314 1 68.0791V2.87167Z"
            fill="#151515"
            fillOpacity="0.45"
          />
          <path
            d="M246.312 1.5791L246.312 1.5791L1.59746 1.77334C0.991211 1.77382 0.5 2.26542 0.5 2.87167V68.0791C0.5 68.9075 1.17157 69.5791 2 69.5791H43.5411H196.276H265.672H1528.4H1536C1536.83 69.5791 1537.5 68.9075 1537.5 68.0791V3.27353C1537.5 2.44529 1536.83 1.77377 1536 1.77353L851.703 1.5791L246.312 1.5791Z"
            stroke="#FAE232"
            strokeOpacity="0.56"
          />
        </g>
        <path
          d="M1 3.15833C1 1.41403 2.41403 0 4.15833 0H1533.84C1535.59 0 1537 1.41403 1537 3.15833V3.15833H1V3.15833Z"
          fill="#FAE232"
        />
        <defs>
          <filter
            id="filter0_b_285_2436"
            x="-16.0417"
            y="-14.9626"
            width="1570.08"
            height="101.083"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.02083" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_285_2436"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_285_2436"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
export default FooterBg;

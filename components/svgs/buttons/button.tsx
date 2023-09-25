import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { UIStore } from "../../../stores/UIStore";

const Button = observer(() => {
  const { color } = useInjection(UIStore);
  return (
    <div style={{position:'absolute'}}>
      <svg
        width="130"
        height="38"
        viewBox="0 0 130 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M130 4.37112e-08L130 1L120 1L120 -3.93403e-07L130 4.37112e-08Z"
          fill={color}
        />
        <path
          d="M130 10L129 10L129 -4.37114e-08L130 4.37112e-08L130 10Z"
          fill={color}
        />
        <path d="M4.37112e-08 0H1V10H4.37112e-08V0Z" fill={color} />
        <path d="M10 0V1L0 0.999999L4.37112e-08 0H10Z" fill={color} />
        <path
          d="M130 37.2122L129 37.2122L129 27.2122L130 27.2122L130 37.2122Z"
          fill={color}
        />
        <path
          d="M120 37.2122L120 36.2122L130 36.2122L130 37.2122L120 37.2122Z"
          fill={color}
        />
        <path
          d="M0 37.2122L1.31134e-07 36.2122L10 36.2122L10 37.2122L0 37.2122Z"
          fill={color}
        />
        <path
          d="M1.31134e-06 27.2122L1 27.2122L0.999999 37.2122L0 37.2122L1.31134e-06 27.2122Z"
          fill={color}
        />
      </svg>
    </div>
  );
});
export default Button;

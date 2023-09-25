import { useInjection } from "inversify-react";
import { UserStore } from "../../../stores/UserStore";
import { UIStore } from "../../../stores/UIStore";
import { observer } from "mobx-react";

const Burger = (({color}) => {
  
  return (
    <svg
      width="29"
      height="17"
      viewBox="0 0 29 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 2H29" stroke={color} stroke-width="3" />
      <path d="M0 8.5H29" stroke={color} stroke-width="3" />
      <path d="M0 15.5H29" stroke={color} stroke-width="3" />
    </svg>
  );
});
export default Burger;

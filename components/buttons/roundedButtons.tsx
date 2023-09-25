import { useState } from "react";
import ButtonBiome from "../svgs/buttons/buttonBiome";
import ButtonMain from "../svgs/buttons/buttonMain";
import style from "./buttons.module.scss";
const RoundedButton = ({
  color,
  take,
  title,
}: {
  title: string;
  color: string;
  take: () => void;
}) => {
  const [on, setOn] = useState(false);
  return (
    <button
      className={style.rounded__button}
      onClick={take}
      style={{color: !on ? "white": "black"}}
      onMouseEnter={() => {
        setOn(true);
      }}
      onMouseLeave={()=>{
        setOn(false)
      }}
    >
      {title}
      <ButtonMain color={color} hover={on} />
    </button>
  );
};
export default RoundedButton;

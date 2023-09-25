
import ButtonLearn from "../svgs/buttons/buttonLearn";
import style from "./buttons.module.scss";

const WelcomeButton = ({
  color,
  take,
  title,
}: {
  title: string;
  color: string;
  take: () => void;
}) => {
  return (
    <button className={style.welcome__button} style={{ color:  color  }} onClick={take}>
      <ButtonLearn />
      <p>{title}</p>
    </button>
  );
};
export default WelcomeButton;

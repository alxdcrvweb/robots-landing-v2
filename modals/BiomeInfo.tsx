import { observer } from "mobx-react";
import { ModalsEnum } from ".";
import ModalContainer from "./ModalContainer";
import style from "./Modal.module.sass";
import { useInjection } from "inversify-react";
import { UIStore } from "../stores/UIStore";
import { ModalStore } from "../stores/ModalStore";
import BiomeInfoModalBg from "../components/svgs/backgrounds/biomeInfoModalBg";
import BiomeInfoImgBg from "../components/svgs/backgrounds/biomeInfoImgBg";
interface modalProps {
  key: ModalsEnum;
  data?: any;
  idx: ModalsEnum;
}

export const BiomeInfoModal = observer(({ key, data, idx }: modalProps) => {
  const { zone, color } = useInjection(UIStore);
  const { hideAllModals } = useInjection(ModalStore);
  return (
    <ModalContainer heading={""} modalKey={key} idx={idx}>
      <BiomeInfoModalBg />
      <div className={style.biome__info}>
        <div className={style.biome__row}>
          <div className={style.biome__title} style={{color:color}}>
            new biome is here:
            <br />
            {zone?.name}
          </div>
          <div className={style.biome__img}>
            <img src={zone?.image} />
            <BiomeInfoImgBg />
          </div>
        </div>
        <div className={style.biome__time}>24.02.2023</div>
        <div className={style.biome__descr}>{zone?.descr}</div>
      </div>
    </ModalContainer>
  );
});

import { injectable } from "inversify";
import { makeObservable, observable } from "mobx";
import "reflect-metadata";
import { RootStore } from "./RootStore";

@injectable()
export class UIStore {
  @observable color: string = "white";

  @observable zone:any = {
    name: "Crypterra",
    descr: "twilight zone has an amazing ability to hypnotize the immature minds of travelers who wandered there ..."
  }
  public constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }
  async changeZone(zone: any) {
    
    if (this) {
      console.log(zone);
      this.zone = zone
    }
  }
  //get user data
  async changeColor(color: string) {
    this.color = color;
  }
}

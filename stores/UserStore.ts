import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import "reflect-metadata";
import { RootStore } from "./RootStore";
import { fetchProfile, IFetchProfileResponseData } from "../api/profile";

@injectable()
export class UserStore {
  @observable user?: IFetchProfileResponseData | null = null;
  @observable members: any[] = [];
  @observable deleted: any;
  @observable currentSound: any;
  public constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }
  @action setActiveMembers = (member: any) => {
    console.log(member, this, this?.members);
    if (this.members.length < 4) this.members = [...this.members, member];
  };
  @action deleteActiveMember = (member: any) => {
    let id = member.id;
    let ind = this.members.findIndex((el) => el.id == id);
    this.members.splice(ind, 1);
    this.deleted = member;
  };
  //get user data
  async getUser() {
    const { data } = await fetchProfile();
    //@ts-ignore
    this.user = data.user;
  }
  @action playSound = (soundLink: string, volume: number) => {
    this.stopSound();
    this.currentSound = new Audio(soundLink);
    this.currentSound.volume = volume;
    this.currentSound.play();
  };
  @action stopSound = () => {
    if (this.currentSound) {
      this.currentSound.volume = 0;
      this.currentSound.pause();
      this.currentSound.currentTime = 0;
    }
  };
  @action setVolume = (vol: number) => {
    this.currentSound.volume = vol;
  };
}

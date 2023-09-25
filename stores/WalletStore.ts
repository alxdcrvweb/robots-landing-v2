import { observable, action, makeObservable } from "mobx";
import { injectable } from "inversify";
import "reflect-metadata";
import { RootStore } from "./RootStore";
import { Signer, ethers } from "ethers";


import Web3 from "web3";


@injectable()
export class Web3Store {
  @observable address: undefined | string = undefined;
  @observable connected: boolean = false;
  @observable provider: any = undefined;
  @observable unsupported?: boolean;
  @observable signer?: any | null = undefined;
  @observable web3?: Web3;
  @observable socketWeb3?: Web3;
  @observable blockNumber?: number = 0
  public constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }

  @action setConnect = () => {
    this.web3 = new Web3(
      this.signer && !this.unsupported //@ts-ignore
        ? (this.signer.transport as any)
        : process.env.NEXT_PUBLIC_NODE
    );

  };
  @action setUser = (user: any) => {
    this.address = user.address;
  };

  disconnected = () => {
    this.address = undefined;
  };
  @action setSigner = (signer?: any | null, unsupported?: boolean) => {
    this.signer = signer;
    this.unsupported = unsupported;
  };
  @action getBlockNumber = async () => {
    try {
       let res = await this.web3.eth.getBlockNumber()
       console.log(res);
       this.blockNumber = Number(res)
    } catch (e) {
        console.log(e);
    }
  };
}
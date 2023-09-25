import { Container } from 'inversify'
import { ModalStore } from './ModalStore'
import { useMemo } from 'react'
import { Web3Store } from "./WalletStore";
import { UIStore } from './UIStore';
import "reflect-metadata";
import { UserStore } from './UserStore';

export class RootStore {
    public uiStore: UIStore
    public container: Container
    public modalStore: ModalStore
    public walletStore: Web3Store;
    public userStore: UserStore;
    public constructor() {
        this.uiStore = new UIStore(this)
        this.modalStore = new ModalStore(this)
        this.walletStore = new Web3Store(this);
        this.userStore = new UserStore(this)
        this.container = new Container()
        this.container.bind(UIStore).toConstantValue(this.uiStore)
        this.container.bind(ModalStore).toConstantValue(this.modalStore)
        this.container.bind(Web3Store).toConstantValue(this.walletStore);
        this.container.bind(Container).toConstantValue(this.container)
        this.container.bind(UserStore).toConstantValue(this.userStore)
    }
}

function initializeStore(initialData: unknown = null) {
    let store
    const _store = store ?? new RootStore()
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store
    return _store
}

export function useStore(initialState?: unknown) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}

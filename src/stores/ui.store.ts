import { makeAutoObservable } from 'mobx';

class UIStore {
  isRefreshingManually = false;

  constructor() {
    makeAutoObservable(this);
  }

  setRefreshing(value: boolean) {
    this.isRefreshingManually = value;
  }
}

export const uiStore = new UIStore();
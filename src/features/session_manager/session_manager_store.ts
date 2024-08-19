import { makeAutoObservable } from "mobx";
import { SessionManagerHttpRepository } from "./session_manager_http_repository";
import { SessionManagerLocalStorageRepository } from "./session_manager_local_storage_repository";

export class SessionManagerStore {
  sessionManagerHttpRepository = new SessionManagerHttpRepository();
  sessionManagerLocalStorageRepository =
    new SessionManagerLocalStorageRepository();
  isAuth = false;
  constructor() {
    makeAutoObservable(this);
  }
  init = async () => {
    if (this.sessionManagerLocalStorageRepository.getAll().length !== 0) {
      this.isAuth = true;
    } else {
      (await this.sessionManagerHttpRepository.auth()).map((model) => {
        this.sessionManagerLocalStorageRepository.create(model.auth);
        this.isAuth = true;
      });
    }
  };
}

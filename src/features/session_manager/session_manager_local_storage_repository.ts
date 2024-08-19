import { LocalStorageRepository } from "../../core/repository/local_storage_repository";

export class SessionManagerLocalStorageRepository extends LocalStorageRepository<string> {
  keyStorage: string = "auth";
}

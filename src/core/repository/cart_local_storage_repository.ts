import { Product } from "../../features/shop/shop_model";
import { LocalStorageRepository } from "./local_storage_repository";

export class CartLocalStorageRepository extends LocalStorageRepository<Product> {
  keyStorage: string = "/cart";
}

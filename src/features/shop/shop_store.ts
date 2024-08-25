import { makeAutoObservable } from "mobx";
import { StoreHttpRepository } from "./shop_http_repository";
import { Products } from "./shop_model";

export class ProductStore {
  isLoading = false;
  isError = false;
  products?: Products;
  storeHttpRepository = new StoreHttpRepository();
  constructor() {
    makeAutoObservable(this);
  }
  init = async () => {
    this.isLoading = true;
    (await this.storeHttpRepository.getProduct()).fold(
      (model) => {
        this.isLoading = false;
        this.products = model;
      },
      () => {
        this.isLoading = false;
        this.isError = true;
      }
    );
  };
}

import { makeAutoObservable } from "mobx";
import { ProductHttpRepository } from "./product_http_repository";

export class ProductStore {
  isLoading = false;
  isError = false;
  productHttpRepository = new ProductHttpRepository();
  constructor() {
    makeAutoObservable(this);
  }
  init = async () => {
    this.isLoading = true;
    (await this.productHttpRepository.getProduct()).fold(
      () => {
        this.isLoading = false;
        console.log(200);
      },
      () => {
        this.isLoading = false;
        this.isError = true;
      }
    );
  };
}

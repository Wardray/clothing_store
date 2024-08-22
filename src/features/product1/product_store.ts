import { makeAutoObservable } from "mobx";
import { ProductHttpRepository } from "./product_http_repository";
import { Product } from "../product/product_model";

export class ProductStore {
  productHttpRepository = new ProductHttpRepository();
  product?: Product;
  async init(id: string) {
    (await this.productHttpRepository.getProduct(id)).map((model) => {
      this.product = model;
    });
  }
  constructor() {
    makeAutoObservable(this);
  }
}

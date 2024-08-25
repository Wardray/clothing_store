import { makeAutoObservable, observable } from "mobx";
import { ProductHttpRepository } from "./product_http_repository";
import { Product } from "../shop/shop_model";

export class ProductStore {
  productHttpRepository = new ProductHttpRepository();
  product?: Product;
  async init(id: string) {
    (await this.productHttpRepository.getProduct(id)).map((model) => {
      this.product = model;
      makeAutoObservable(this)
    });
  }
  constructor() {
    makeAutoObservable(this);
  }
}

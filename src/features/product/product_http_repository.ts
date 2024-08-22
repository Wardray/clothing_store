import { HttpRepository } from "../../core/repository/http_repository";
import { Products } from "./product_model";

export class StoreHttpRepository extends HttpRepository {
  getProduct = () => this.authJsonRequest<Products>("/products");
}

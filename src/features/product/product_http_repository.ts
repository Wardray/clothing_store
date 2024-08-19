import { HttpRepository } from "../../core/repository/http_repository";

export class ProductHttpRepository extends HttpRepository {
  
  getProduct = () => this.authJsonRequest("/products");
}

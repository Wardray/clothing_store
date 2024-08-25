import { createBrowserRouter } from "react-router-dom";
import {
  MyCartScreen,
  MyCartScreenPath,
} from "../../features/my_cart/my_cart_screen";
import {
  MyCheckOutScreen,
  MyCheckOutScreenPath,
} from "../../features/check_out/check_out_screen";
import {
  ProductScreenPath,
  ProductScreen,
} from "../../features/product/product_screen";
import {
  ProductScreenPath1,
  ProductScreen1,
} from "../../features/shop/shop_screen";

export const router = createBrowserRouter([
  {
    path: ProductScreenPath1,
    element: <ProductScreen1 />,
  },
  {
    path: MyCartScreenPath,
    element: <MyCartScreen />,
  },
  {
    path: ProductScreenPath + ":id",
    element: <ProductScreen />,
  },
  {
    path: MyCheckOutScreenPath,
    element: <MyCheckOutScreen />,
  },
]);

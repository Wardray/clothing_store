import { createBrowserRouter } from "react-router-dom";
import {
  ProductScreen,
  ProductScreenPath,
} from "../../features/product/product_screen";
import {
  MyStoreScreen,
  MyStoreScreenPath,
} from "../../features/store/store_screen";
import {
  MyCartScreen,
  MyCartScreenPath,
} from "../../features/my_cart/my_cart_screen";
import { MyCheckOutScreen, MyCheckOutScreenPath } from "../../features/check_out/check_out_screen";

export const router = createBrowserRouter([
  {
    path: ProductScreenPath,
    element: <ProductScreen />,
  },
  {
    path: MyCartScreenPath,
    element: <MyCartScreen />,
  },
  {
    path: MyStoreScreenPath,
    element: <MyStoreScreen />,
  },
  {
    path: MyCheckOutScreenPath,
    element: <MyCheckOutScreen />,
  },
]);

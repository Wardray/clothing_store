import { useNavigate } from "react-router-dom";
import { Icon, IconType } from "../../core/ui/icon/icon";
import { MainPage } from "../../core/ui/page/main_page";
import { Typography, StrokePanel } from "../../core/ui/typography/typography";
import { CategoryCard } from "./ui/category_card";
import { ProductCard } from "./ui/shop_card";
import React, { useRef } from "react";
import { ProductStore } from "./shop_store";
import { observer } from "mobx-react-lite";
import { ProductScreenPath } from "../product/product_screen";

const products: IProduct[] = [
  {
    name: "",
    image: "https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg",
    price: 100,
  },
];
interface IProduct {
  name: string;
  image: string;
  price: number;
}
export const ProductScreenPath1 = "/";
export const ProductScreen1 = observer(() => {
  const navigate = useNavigate();
  const mainDivRef = useRef(null);

  const [store] = React.useState(new ProductStore());
  React.useEffect(() => {
    store.init();

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <MainPage
      leftIcon={
        <>
          <Icon
            backgroundColor="rgba(246, 246, 246, 1)"
            type={IconType.Circle}
            icon={"Menu"}
            onClick={() => {
              navigate(ProductScreenPath);
            }}
          />
        </>
      }
      rightIcon={
        <>
          <Icon
            backgroundColor="rgba(246, 246, 246, 1)"
            type={IconType.Circle}
            icon={"BagLine"}
          />
        </>
      }
      header={<Icon icon={"ZeloxIcon"} />}
      children={
        <div
          ref={mainDivRef}
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            height: "100%",
            width: "100%",

            paddingTop: 50,
          }}
        >
          {store.isError}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <CategoryCard
              text={"Trending \n Products"}
              color={"#F4C600"}
              icon={<Icon icon={"LeftArrow"} />}
            />
            <div style={{ width: 15 }}></div>
            <CategoryCard
              text={"Sale \n Products"}
              color={"#EB6434"}
              icon={<Icon icon={"LeftArrow"} />}
            />
          </div>
          <Typography
            onClick={() => {
              products.push({
                name: "name",
                image: "https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg",
                price: 1,
              });
            }}
            style={{ paddingTop: 30, paddingLeft: 45, paddingRight: 20 }}
            fontSize={16}
            strokePanel={StrokePanel.UltraBold}
            color={"black"}
            text={"POPULAR PRODUCTS"}
          />

          <div style={{ height: "100%" }}>
            {store.products?.products.map((el) => {
              return (
                <ProductCard
                  name={el.name}
                  image={el.image1}
                  price={el.price}
                  onClick={() => {
                    navigate(ProductScreenPath + el.id);
                  }}
                />
              );
            })}
          </div>
        </div>
      }
    />
  );
});

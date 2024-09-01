import { Icon, IconType } from "../../core/ui/icon/icon";
import { MainPage } from "../../core/ui/page/main_page";
import { Typography, StrokePanel } from "../../core/ui/typography/typography";
import { Button } from "../../core/ui/button/button";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { ProductStore } from "./product_store";
import { observer } from "mobx-react-lite";
import { Select } from "../../core/ui/select/select";
import { ProductScreenPath1 } from "../shop/shop_screen";
import { CartScreenPath } from "../cart/cart_screen";

export const ProductScreenPath = "/product/";
export const ProductScreen = observer(() => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [store] = React.useState(new ProductStore());
  React.useEffect(() => {
    store.init(id as string);
  }, []);
  return (
    <MainPage
      leftIcon={
        <>
          <Icon
            onClick={() => navigate(ProductScreenPath1)}
            backgroundColor="rgba(246, 246, 246, 1)"
            type={IconType.Circle}
            icon={"Back"}
          />
        </>
      }
      rightIcon={
        <>
          <Icon
            onClick={() => navigate(CartScreenPath)}
            backgroundColor="rgba(246, 246, 246, 1)"
            type={IconType.Circle}
            icon={"BagLine"}
          />
        </>
      }
      header={<Icon icon={"ZeloxIcon"} />}
      children={
        <div
          style={{
            display: "flex",
            height: 400,
            width: "100%",
            paddingTop: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div style={{ height: "100%" }}>
              <div
                style={{
                  justifyContent: "flex-end",
                  display: "flex",

                  height: 326,
                  width: 350,
                }}
              >
                <img src={store.product?.image1} alt={store.product?.name} />
                <div style={{ position: "absolute" }}>
                  <Icon style={{ width: 10, height: 20 }} icon={"Star"} />
                  <Typography
                    fontSize={14}
                    strokePanel={StrokePanel.Regular}
                    color={"#9F9F9F"}
                    text={"4.7"}
                  />
                </div>
              </div>
              <div style={{ padding: 10, display: "flex" }}>
                <img
                  style={{ height: 110, width: 110, backgroundColor: "orange" }}
                  src={store.product?.image2}
                  alt={store.product?.name}
                />
                <img
                  style={{
                    marginRight: 10,
                    marginLeft: 10,
                    height: 110,
                    width: 110,
                    backgroundColor: "skyblue",
                  }}
                  src={store.product?.image3}
                  alt={store.product?.name}
                />
                <img
                  style={{ height: 110, width: 110, backgroundColor: "orange" }}
                  src={store.product?.image4}
                  alt={store.product?.name}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    paddingTop: 20,
                    alignSelf: "center",
                    display: "flex",
                    height: 70,
                    width: 350,
                  }}
                >
                  <Typography
                    fontSize={22}
                    strokePanel={StrokePanel.UltraBold}
                    color={"black"}
                    text={store.product?.name}
                  />
                  <Icon icon={"bookmark"} />
                </div>
                <div
                  style={{
                    alignSelf: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    height: 110,
                    width: 350,
                  }}
                >
                  <div
                    style={{
                      borderRadius: 10,
                      backgroundColor: "#F5F5F5",
                      width: 169,
                    }}
                  >
                    <Typography
                      style={{ marginTop: 20, marginLeft: 20 }}
                      fontSize={14}
                      strokePanel={StrokePanel.Regular}
                      color={"black"}
                      text="CHOOSE "
                    />
                    <Typography
                      style={{ marginLeft: 20 }}
                      fontSize={14}
                      strokePanel={StrokePanel.Regular}
                      color={"black"}
                      text="COLOR"
                    />
                    <div style={{ height: 10 }}></div>
                    <Select
                      items={store.product?.colors ?? []}
                      value={store.product?.colors.at(0) ?? ""}
                      onChange={function (value: string): void {}}
                      style={{ width: 101, marginLeft: 30 }}
                      child={
                        <div
                          style={{
                            marginTop: 9,
                            borderRadius: 30,
                            width: 37,
                            height: 10,
                            backgroundColor: "red",
                          }}
                        ></div>
                      }
                    />
                  </div>

                  <div
                    style={{
                      width: 169,
                      height: "100%",
                      backgroundColor: "black",
                      borderRadius: 10,
                    }}
                  >
                    <Typography
                      style={{ marginTop: 20, marginLeft: 20 }}
                      fontSize={14}
                      strokePanel={StrokePanel.Regular}
                      color={"white"}
                      text="CHOOSE"
                    />
                    <Typography
                      style={{ marginLeft: 20 }}
                      fontSize={14}
                      strokePanel={StrokePanel.Regular}
                      color={"white"}
                      text="SIZE"
                    />
                    <div style={{ height: 10 }}></div>
                    <Select
                      items={store.product?.sizes ?? []}
                      value={store.product?.sizes.at(0) ?? ""}
                      onChange={function (value: string): void {}}
                      style={{ width: 101, marginLeft: 30 }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "center",
                    marginTop: 20,
                    height: 110,
                    width: 350,
                  }}
                >
                  <Button
                    onClick={() => store.checkout()}
                    background={"#EB6434"}
                    width={350}
                    height={82}
                    text={"Checkout"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
});

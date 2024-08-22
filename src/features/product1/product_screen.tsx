import { Icon, IconType } from "../../core/ui/icon/icon";
import { MainPage } from "../../core/ui/page/main_page";
import { Typography, StrokePanel } from "../../core/ui/typography/typography";
import { Button } from "../../core/ui/button/button";
import { useParams } from "react-router-dom";
import React from "react";
import { ProductStore } from "./product_store";
import { observer } from "mobx-react-lite";

export const ProductScreenPath = "/product/";
export const ProductScreen = observer(() => {
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
            backgroundColor="rgba(246, 246, 246, 1)"
            type={IconType.Circle}
            icon={"Back"}
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
                  <div style={{ borderRadius: 10 }}>
                    <Button
                      background={"#F5F5F5"}
                      width={169}
                      height={122}
                      text={"Choose color"}
                    />
                  </div>
                  <div style={{ borderRadius: 10 }}>
                    <Button
                      background={"#000000"}
                      width={169}
                      height={122}
                      text={"Choose Size"}
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

import { Navigate, useNavigate } from "react-router-dom";
import { cartStore } from "../..";
import { Button } from "../../core/ui/button/button";
import { Icon, IconType } from "../../core/ui/icon/icon";
import { Input } from "../../core/ui/input/input";
import { MainPage } from "../../core/ui/page/main_page";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";
import { ProductCart } from "./product_cart";
import { observer } from "mobx-react-lite";
import { ProductScreenPath1 } from "../shop/shop_screen";

export const CartScreenPath = "/2";

export const CartScreen = observer(() => {
  const navigate = useNavigate();
  return (
    <div>
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
              backgroundColor="rgba(246, 246, 246, 1)"
              type={IconType.Circle}
              icon={"BagLine"}
            />
          </>
        }
        header={<Icon icon={"MyCartIcon"} />}
        children={
          <div
            style={{
              display: "flex",
              height: 750,
              width: 350,
              paddingTop: 50,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {cartStore.products.map((el) => (
                <ProductCart
                  name={el.name}
                  price={el.price}
                  quality={el.quality ?? 1}
                  size={"123"}
                  image={el.image1}
                  delete={() => cartStore.removeProduct(el)}
                  addQuality={() => cartStore.addProductQuality(el)}
                  removeQuality={() => cartStore.removeProductQuality(el)}
                />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 352,
                height: 271,
                backgroundColor: "#F6F6F6",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "baseline",
                }}
              >
                <Typography
                  fontSize={12}
                  strokePanel={StrokePanel.Regular}
                  color={"black"}
                  text={"Promo Or voucher"}
                />
                <Input initialValue={"Fun10"} />
              </div>
              <div style={{ marginLeft: 25, marginTop: 17 }}>
                <Typography
                  fontSize={18}
                  strokePanel={StrokePanel.Regular}
                  color={"Black"}
                  text={"Payment Amount"}
                />
              </div>

              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    fontSize={16}
                    strokePanel={StrokePanel.Regular}
                    color={"#505050"}
                    text={"Sub Total"}
                  />
                  <Typography
                    fontSize={18}
                    strokePanel={StrokePanel.Regular}
                    color={"Black"}
                    text={"$2250"}
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    fontSize={16}
                    strokePanel={StrokePanel.Regular}
                    color={"#505050"}
                    text={"Shipping Fee"}
                  />
                  <Typography
                    fontSize={18}
                    strokePanel={StrokePanel.Regular}
                    color={"Black"}
                    text={"$20.00"}
                  />
                </div>
                <Icon icon={"StripeIcon"} />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    fontSize={16}
                    strokePanel={StrokePanel.Regular}
                    color={"#505050"}
                    text={"Total"}
                  />
                  <Typography
                    fontSize={18}
                    strokePanel={StrokePanel.Regular}
                    color={"Black"}
                    text={cartStore.getTotalAmount()}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Button
                background={"black"}
                width={352}
                height={71}
                text={"Checkout"}
              />
            </div>
          </div>
        }
      ></MainPage>
    </div>
  );
});

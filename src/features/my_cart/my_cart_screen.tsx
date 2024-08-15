import { Button } from "../../core/ui/button/button";
import { Icon, IconType } from "../../core/ui/icon/icon";
import { Input } from "../../core/ui/input/input";
import { MainPage } from "../../core/ui/page/main_page";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";

export const MyCartScreenPath = "/2";
export const MyCartScreen = () => {
  return (
    <div>
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
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    borderRadius: 20,
                    background:
                      "linear-gradient(121.27deg, #F5F6F1 18.66%, #E6E5E3 55.32%)",
                    width: 163,
                    height: 163,
                  }}
                ></div>
                <div
                  style={{
                    justifyContent: "space-around",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 10,

                    width: 163,
                    height: 163,
                  }}
                >
                  <Typography
                    fontSize={14}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                    text={"Avoine hooded quilted jacket"}
                  />
                  <Typography
                    fontSize={13}
                    strokePanel={StrokePanel.UltraBold}
                    color={"black"}
                    text={"Size: Medium"}
                  />
                  <Typography
                    fontSize={13}
                    strokePanel={StrokePanel.UltraBold}
                    color={"#EB6434"}
                    text={"$ 1500"}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        width: 73,
                        height: 28,
                        backgroundColor: "black",
                        borderRadius: 6,
                      }}
                    >
                      <Icon icon={"PlusIcon"} />
                      <Typography
                        fontSize={14}
                        strokePanel={StrokePanel.Regular}
                        color={"white"}
                        text={"1"}
                      />
                      <Icon icon={"MinusIcon"} />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        width: 28,
                        height: 28,
                        backgroundColor: "black",
                        borderRadius: 6,
                      }}
                    >
                      <Icon icon={"CrossIcon"} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 15,
                }}
              >
                <div
                  style={{
                    borderRadius: 20,
                    background:
                      "linear-gradient(121.27deg, #F5F6F1 18.66%, #E6E5E3 55.32%)",
                    width: 163,
                    height: 163,
                  }}
                ></div>
                <div
                  style={{
                    justifyContent: "space-around",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 10,
                    width: 163,
                    height: 163,
                  }}
                >
                  <Typography
                    fontSize={14}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                    text={"hooded metallic shell jacket"}
                  />
                  <Typography
                    fontSize={13}
                    strokePanel={StrokePanel.UltraBold}
                    color={"black"}
                    text={"Size: Medium"}
                  />
                  <Typography
                    fontSize={13}
                    strokePanel={StrokePanel.UltraBold}
                    color={"#F4C600"}
                    text={"$ 1,050"}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        width: 73,
                        height: 28,
                        backgroundColor: "black",
                        borderRadius: 6,
                      }}
                    >
                      <Icon icon={"PlusIcon"} />
                      <Typography
                        fontSize={14}
                        strokePanel={StrokePanel.Regular}
                        color={"white"}
                        text={"1"}
                      />
                      <Icon icon={"MinusIcon"} />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        width: 28,
                        height: 28,
                        backgroundColor: "black",
                        borderRadius: 6,
                      }}
                    >
                      <Icon icon={"CrossIcon"} />
                    </div>
                  </div>
                </div>
              </div>
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
                    text={"$2270"}
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
};

import { Icon, IconType } from "../../core/ui/icon/icon";
import { MainPage } from "../../core/ui/page/main_page";
import { Typography, StrokePanel } from "../../core/ui/typography/typography";

import { Button } from "../../core/ui/button/button";

export const MyStoreScreenPath = "/1";
export const MyStoreScreen = () => {
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
                  backgroundColor: "blue",
                  height: 326,
                  width: 350,
                }}
              >
                <Icon style={{ width: 10, height: 20 }} icon={"Star"} />
                <Typography
                  fontSize={14}
                  strokePanel={StrokePanel.Regular}
                  color={"#9F9F9F"}
                  text={"4.7"}
                />
              </div>
              <div style={{ padding: 10, display: "flex" }}>
                <div
                  style={{ height: 110, width: 110, backgroundColor: "orange" }}
                >
                  2
                </div>
                <div
                  style={{
                    marginRight: 10,
                    marginLeft: 10,
                    height: 110,
                    width: 110,
                    backgroundColor: "skyblue",
                  }}
                >
                  3
                </div>
                <div
                  style={{ height: 110, width: 110, backgroundColor: "green" }}
                >
                  4
                </div>
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
                    text={"Avoine hooded \n quilted jacket"}
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
};

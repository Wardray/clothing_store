import { flattenDiagnosticMessageText } from "typescript";
import { Button } from "../../core/ui/button/button";
import { Icon, IconType } from "../../core/ui/icon/icon";
import { Input } from "../../core/ui/input/input";
import { MainPage } from "../../core/ui/page/main_page";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";

export const MyCheckOutScreenPath = "/3";
export const MyCheckOutScreen = () => {
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
        header={<Icon icon={"CheckOutIcon"} />}
        children={
          <div
            style={{
              display: "flex",
              height: 750,
              width: 350,
              paddingTop: 30,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 316,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={18}
                strokePanel={StrokePanel.Regular}
                color={"black"}
                text={"Master Card"}
              />
              <Icon icon={"3DotsIcon"} />
            </div>
            <div
              style={{
                background: "linear-gradient(180deg, #EC3513 0%, #D82200 100%)",
                width: 328,
                height: 193,
                borderRadius: 19,
              }}
            >
              
            </div>
            <div
              style={{
                display: "flex",
                width: 316,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={18}
                strokePanel={StrokePanel.Regular}
                color={"black"}
                text={"Choose Payment"}
              />
              <Icon icon={"3DotsIcon"} />
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  width: 70,
                  height: 63,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 6,
                  border: "1px solid #EB6434",
                  marginRight: 10,
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Icon icon={"MasterCardIcon"} />
              </div>
              <div
                style={{
                  width: 70,
                  height: 63,
                  backgroundColor: "#F6F6F6",
                  borderRadius: 6,
                  marginRight: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Icon icon={"AppleIcon"} />
              </div>
              <div
                style={{
                  width: 70,
                  height: 63,
                  backgroundColor: "#F6F6F6",
                  borderRadius: 6,
                  marginRight: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Icon icon={"PayPalIcon"} />
              </div>
              <div
                style={{
                  width: 70,
                  height: 63,
                  backgroundColor: "#F6F6F6",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Icon icon={"VisaIcon"} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: 316,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={18}
                strokePanel={StrokePanel.Regular}
                color={"black"}
                text={"Promo Or voucher"}
              />
              <Icon icon={"3DotsIcon"} />
            </div>
            <div
              style={{
                background: "#F6F6F6",
                width: 316,
                height: 83,
                borderRadius: 15,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={12}
                strokePanel={StrokePanel.Regular}
                color={"black"}
                text={"Add your code"}
              />
              <Input initialValue={"Fun 10"} />
            </div>
            <div
              style={{
                width: 316,
                display: "flex",
                justifyContent: "space-between",
              }}
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
            <div style={{ display: "flex" }}>
              <Button
                background={"black"}
                width={352}
                height={71}
                text={"Make Payment"}
              />
            </div>
          </div>
        }
      ></MainPage>
    </div>
  );
};

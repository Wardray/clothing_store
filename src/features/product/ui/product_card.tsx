import { Button } from "../../../core/ui/button/button";
import { Icon } from "../../../core/ui/icon/icon";
import {
  Typography,
  StrokePanel,
} from "../../../core/ui/typography/typography";

interface IProductCard {
  name: string;
  image: string;
  price: number;
}

export const ProductCard = (props: IProductCard) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 280,
        width: 280,
        margin: 55,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: 250,
          width: 250,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Typography
          fontSize={16}
          strokePanel={StrokePanel.UltraBold}
          color={"black"}
          text={"Avoine hooded \n quilted jacket"}
        />
        <Button
          child={<></>}
          textPadding={10}
          background={"#EB6434"}
          width={100}
          height={30}
          text={"$ 1500"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-between",
          height: 250,
          width: 250,
          position: "absolute",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: 69,
            height: 29,
            background: "#FFFFFF",
            boxShadow: "0px 12.948px 58.266px -3.237px rgba(0, 0, 0, 0.03)",
            borderRadius: 11,
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
        <Icon icon={"BagLine"} />
      </div>

      <img
        src={props.image}
        alt={props.name}
        style={{ height: 280, width: 280, position: "relative" }}
      />
    </div>
  );
};

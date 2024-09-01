import { Icon } from "../../core/ui/icon/icon";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";
import { observer } from "mobx-react-lite";

interface ProductCartProps {
  name: string;
  price: number;
  quality: number;
  size: string;
  image: string;
  delete: Function;
  addQuality: Function;
  removeQuality: Function;
}

export const ProductCart = observer((props: ProductCartProps) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          src={props.image}
          style={{
            borderRadius: 20,
            width: 163,
            height: 163,
          }}
        />
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
            text={props.name}
          />
          <Typography
            fontSize={13}
            strokePanel={StrokePanel.UltraBold}
            color={"black"}
            text={`Size: ${props.size}`}
          />
          <Typography
            fontSize={13}
            strokePanel={StrokePanel.UltraBold}
            color={"#EB6434"}
            text={props.price}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <Icon icon={"PlusIcon"} onClick={() => props.addQuality()} />
              <Typography
                fontSize={14}
                strokePanel={StrokePanel.Regular}
                color={"white"}
                text={props.quality}
              />
              <Icon icon={"MinusIcon"} onClick={() => props.removeQuality()} />
            </div>
            <div
              onClick={() => props.delete()}
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
    </>
  );
});

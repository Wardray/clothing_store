import {
  Typography,
  StrokePanel,
} from "../../../core/ui/typography/typography";

interface ICategoryCard {
  text: string;
  color: string;
  icon: React.ReactNode;
}
export const CategoryCard = (props: ICategoryCard) => {
  return (
    <div
      style={{
        borderRadius: 20.61,
        height: 150,
        width: 150,
        background: props.color,
      }}
    >
      <Typography
        style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}
        fontSize={14}
        strokePanel={StrokePanel.Regular}
        color={"white"}
        text={props.text}
      />
      <Typography
        style={{ paddingLeft: 15 }}
        fontSize={52}
        strokePanel={StrokePanel.Regular}
        color={"#FFFFFF1A"}
        text={"Zelox"}
      />
      <div style={{ position: "relative", left: 80, top: -15 }}>
        {props.icon}
      </div>
    </div>
  );
};

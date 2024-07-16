import { Icon } from "../icon/icon";
import { StrokePanel, Typography } from "../text/text";

interface IPropsSelect {
  background: string;
  text: string;
  width: number;
  textColor: string;
}

export const Select = (props: IPropsSelect) => {
  return (
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        height: 30,
        width: props.width,
        background: props.background,
        borderRadius: 6,
      }}
    >
      <Typography
        style={{ paddingLeft: 10 }}
        fontSize={12}
        strokePanel={StrokePanel.Regular}
        color={props.textColor}
        text={props.text}
      />
      <Icon icon={"BottomIcon"} />
    </div>
  );
};

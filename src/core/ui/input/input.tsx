import { StrokePanel, Typography } from "../typography/typography";

interface IInputProps {
  initialValue: string;
}
export const Input = (props: IInputProps) => {
  return (
    <Typography
      contentEditable={true}
      fontSize={14}
      strokePanel={StrokePanel.Regular}
      color={"black"}
      text={props.initialValue}
      style={{
        display: "flex",
        alignItems: "center",
        height: 30,
        borderRadius: 6,
        border: "1px solid #EB6434",
        background: "#FFFFFF",
        width: 70,
        paddingLeft: 5,
      }}
    />
  );
};

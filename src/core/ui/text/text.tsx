export enum StrokePanel {
  Regular = "Regular",
  UltraBold = "UltraBold",
}
interface IPropsText {
  fontSize: number;
  strokePanel: StrokePanel;
  color: string;
  text: string;
  style?: React.CSSProperties;
}

export const Typography = (props: IPropsText) => {
  return (
    <div
      style={Object.assign(
        {
          textTransform: "uppercase",
          fontFamily: "Monument Extended Regular",
          fontSize: props.fontSize,
          color: props.color,
        },
        props.style
      )}
    >
      {props.text}
    </div>
  );
};

import React from "react";
import { StrokePanel, Typography } from "../typography/typography";

interface IPropsButton {
  background: string;
  width: number;
  height: number;
  text: string;
  textPadding?: number;
  onClick?: Function;
  child?: React.ReactNode;
}

export const Button = (props: IPropsButton) => {
  return (
    <div
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      style={{
        borderRadius: 15,
        width: props.width,
        height: props.height,
        background: props.background,
        placeContent: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Typography
        style={{ paddingLeft: props.textPadding }}
        fontSize={14}
        strokePanel={StrokePanel.Regular}
        color={"white"}
        text={props.text}
      />
      {props.child}
    </div>
  );
};

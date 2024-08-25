import { makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { Typography, StrokePanel } from "../typography/typography";

interface ISelectProps {
  items: string[];
  value: string;

  onChange: (value: string) => void;
  style?: React.CSSProperties;
}
class SelectStore {
  value = "";
  constructor() {
    makeAutoObservable(this);
  }
  init(value: string) {
    this.value = value;
    console.log(this.value);
  }
}

export const Select = observer((props: ISelectProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [store] = React.useState(new SelectStore());
  const [cursorIsCorses, setCursorIsCorses] = React.useState(false);
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    store.init(props.value);
  }, []);
  React.useEffect(() => {
    ref.current?.addEventListener("mousemove", () => {
      setCursorIsCorses(true);
    });
    ref.current?.addEventListener("mouseleave", () => {
      setCursorIsCorses(false);
    });
  }, [ref, setCursorIsCorses, value]);

  return (
    <div ref={ref} style={props.style}>
      <div
        style={{
          backgroundColor: "white",
          height: 28,
          borderRadius: 6,
        }}
      >
        {/* <Typography
          fontSize={16}
          strokePanel={StrokePanel.Regular}
          color={"black"}
          text={store.value}
          style={{ textAlign: "center" }}
        /> */}
        <div>{store.value}</div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(243, 237, 247, 1)",
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
          borderRadius: 4,
        }}
      >
        {cursorIsCorses
          ? props.items.map((el) => (
              <div
                onClick={() => {
                  setValue(el);
                  props.onChange(el);
                }}
                style={{
                  height: 48,
                  textAlign: "center",
                  alignContent: "center",
                  cursor: "pointer",
                  borderBottom: "1px solid",
                }}
              >
                {el}
              </div>
            ))
          : null}
      </div>
    </div>
  );
});

import { makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react-lite";
import React, { HtmlHTMLAttributes } from "react";
import { Typography, StrokePanel } from "../typography/typography";
import { Icon } from "../icon/icon";

interface ISelectProps {
  items: string[];
  value: string;
  child?: React.ReactNode;

  onChange: (value: string) => void;
  style?: React.CSSProperties;
}
class SelectStore {
  value = "";
  cursorIsCorses = false;
  constructor() {
    makeAutoObservable(this);
  }
  init(value: string, ref: React.RefObject<HTMLDivElement> | undefined) {
    this.value = value;

    ref?.current?.addEventListener("mousemove", () => {
      this.cursorIsCorses = true;
    });
    ref?.current?.addEventListener("mouseleave", () => {
      this.cursorIsCorses = false;
    });
  }
}

export const Select = observer((props: ISelectProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [store] = React.useState(new SelectStore());
  React.useEffect(() => {
    store.init(props.value, ref);
  }, [props.value]);

  return (
    <div ref={ref} style={props.style}>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          backgroundColor: "white",
          height: 28,
          borderRadius: 6,
        }}
      >
        <Typography
          fontSize={16}
          strokePanel={StrokePanel.Regular}
          color={"black"}
          text={store.value}
          style={{
            marginLeft: 10,

            textAlignLast: "center",
            alignContent: "center",
            height: "100%",
          }}
        />
        {props.child}
        <Icon
          icon={"SelectIcon"}
          style={{ width: 28, height: 28, marginRight: 10 }}
        />
      </div>
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
          borderRadius: 4,
        }}
      >
        {store.cursorIsCorses
          ? props.items.map((el) => (
              <Typography
                fontSize={16}
                strokePanel={StrokePanel.Regular}
                color={"black"}
                onClick={() => {
                  store.value = el;
                  props.onChange(el);
                }}
                text={el}
                style={{ textAlign: "center", alignContent: "center" }}
              />
            ))
          : null}
      </div>
    </div>
  );
});

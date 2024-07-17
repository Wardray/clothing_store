import React from "react";
import ReactDOM from "react-dom/client";
import { StrokePanel, Typography } from "./core/ui/text/text";
import { Button } from "./core/ui/button/button";
import { Icon, IconType } from "./core/ui/icon/icon";
import { MainPage } from "./core/ui/page/main_page";
import { Select } from "./core/ui/select/select";
import { Input } from "./core/ui/input/input";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Input initialValue={"Fun10"} />
    <Select width={100} text="MEDIUM" background="black" textColor={"white"} />
    <Typography
      fontSize={16}
      strokePanel={StrokePanel.Regular}
      color={"black"}
      text={"123"}
    />
    <Typography
      fontSize={16}
      strokePanel={StrokePanel.UltraBold}
      color={"black"}
      text={"123"}
    />
    <Icon backgroundColor={"#EB6434"} icon={"BagLine"} />
    <Icon type={IconType.Circle} backgroundColor={"#EB6434"} icon={"BagLine"} />
    <Button
      textPadding={15}
      background={"#EB6434"}
      width={100}
      height={50}
      text={"123"}
    />
    <Button
      child={<></>}
      textPadding={15}
      background={"#EB6434"}
      width={100}
      height={50}
      text={"123"}
    />
    <div style={{ backgroundColor: "red", width: 640, height: 960 }}>
      <MainPage
        leftIcon={
          <>
            <Icon
              backgroundColor="rgba(246, 246, 246, 1)"
              type={IconType.Circle}
              icon={"Menu"}
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
        header={"123"}
        children={<div></div>}
      />
    </div>
  </React.StrictMode>
);

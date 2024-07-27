import React from "react";
import ReactDOM from "react-dom/client";
import { StrokePanel, Typography } from "./core/ui/text/text";
import { Button } from "./core/ui/button/button";
import { Icon, IconType } from "./core/ui/icon/icon";
import { MainPage } from "./core/ui/page/main_page";
import { Select } from "./core/ui/select/select";
import { Input } from "./core/ui/input/input";
import { extensions } from "./core/ui/extensions/extensions";
extensions();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

interface IProductCard {
  name: string;
  image: string;
  price: number;
}
interface ICategoryCard {
  text: string;
  color: string;
  icon: React.ReactNode;
}
const products = [
  {
    name: "",
    image: "https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg",
    price: 100,
  },
];
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
root.render(
  <React.StrictMode>
    {/* <Input initialValue={"Fun10"} />
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
    <div style={{ backgroundColor: "red", width: 640, height: 960 }}> */}
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
      header={"ZelOx"}
      children={
        <div
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            height: 400,
            width: "100%",

            paddingTop: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <CategoryCard
              text={"Trending \n Products"}
              color={"#F4C600"}
              icon={<Icon icon={"LeftArrow"} />}
            />
            <div style={{ width: 15 }}></div>
            <CategoryCard
              text={"Sale \n Products"}
              color={"#EB6434"}
              icon={<Icon icon={"LeftArrow"} />}
            />
          </div>
          <Typography
            style={{ paddingTop: 30, paddingLeft: 45, paddingRight: 20 }}
            fontSize={16}
            strokePanel={StrokePanel.UltraBold}
            color={"black"}
            text={"POPULAR PRODUCTS"}
          />
          <div style={{ height: "100%" }}>
            {products.repeat(100).map((el) => {
              return (
                <ProductCard name={el.name} image={el.image} price={el.price} />
              );
            })}
          </div>
        </div>
      }
    />
  </React.StrictMode>
);

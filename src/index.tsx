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
export const ProductCard = (props: IProductCard) => {
  return (
    <a>
      <img src={props.image} alt="Сервис публикации фотографий" />
    </a>
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
      header={"123"}
      children={
        <div
          style={{
            height: "100%",
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
          <div style={{ overflow: "scroll", height: "100%" }}>
            <ProductCard
              name={"Avoine hooded quilted jacket"}
              image={"https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg"}
              price={1999}
            />
            <ProductCard
              name={"hooded metallic shell jacket"}
              image={"https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg"}
              price={1400}
            />
            <ProductCard
              name={"Avoine hooded quilted jacket"}
              image={"https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg"}
              price={1999}
            />
            <ProductCard
              name={"hooded metallic shell jacket"}
              image={"https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg"}
              price={1400}
            />
            <ProductCard
              name={"Avoine hooded quilted jacket"}
              image={"https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg"}
              price={1999}
            />
            <ProductCard
              name={"hooded metallic shell jacket"}
              image={"https://imageup.ru/img156/thumb/y56nkqfrdus4866356.jpg"}
              price={1400}
            />
          </div>
        </div>
      }
    />
  </React.StrictMode>
);

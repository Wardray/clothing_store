interface MainPageProps {
  header: React.ReactNode;
  button?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}
export const MainPage = (props: MainPageProps) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          paddingTop: 30,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ paddingLeft: 20 }}>{props.leftIcon}</div>{" "}
        <div>{props.header}</div>
        <div style={{ paddingRight: 20 }}>{props.rightIcon}</div>
      </div>
      <div style={{ width: "100%", height: "100%" }}>{props.children}</div>
      <div>{props.button}</div>
    </div>
  );
};

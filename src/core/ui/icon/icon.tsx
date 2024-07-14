export enum IconType {
  Square = "Square",
  Circle = "Circle",
}
interface IconProps {
  bacgorundColor?: string;
  icon: string;
  type?: IconType;
}
const getIcon = (icon: string) => {
  switch (icon) {
    case "Menu":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.58331 9.16671H6.41665C8.24998 9.16671 9.16665 8.25004 9.16665 6.41671V4.58337C9.16665 2.75004 8.24998 1.83337 6.41665 1.83337H4.58331C2.74998 1.83337 1.83331 2.75004 1.83331 4.58337V6.41671C1.83331 8.25004 2.74998 9.16671 4.58331 9.16671Z"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5833 9.16671H17.4166C19.25 9.16671 20.1666 8.25004 20.1666 6.41671V4.58337C20.1666 2.75004 19.25 1.83337 17.4166 1.83337H15.5833C13.75 1.83337 12.8333 2.75004 12.8333 4.58337V6.41671C12.8333 8.25004 13.75 9.16671 15.5833 9.16671Z"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5833 20.1667H17.4166C19.25 20.1667 20.1666 19.25 20.1666 17.4167V15.5834C20.1666 13.75 19.25 12.8334 17.4166 12.8334H15.5833C13.75 12.8334 12.8333 13.75 12.8333 15.5834V17.4167C12.8333 19.25 13.75 20.1667 15.5833 20.1667Z"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.58331 20.1667H6.41665C8.24998 20.1667 9.16665 19.25 9.16665 17.4167V15.5834C9.16665 13.75 8.24998 12.8334 6.41665 12.8334H4.58331C2.74998 12.8334 1.83331 13.75 1.83331 15.5834V17.4167C1.83331 19.25 2.74998 20.1667 4.58331 20.1667Z"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "LeftArrow":
      return (
        <svg
          width="45"
          height="29"
          viewBox="0 0 45 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.4909 12.3354H1V16.9726H34.4909C34.4909 16.9726 31.0139 19.0335 29.3384 22.125C27.6629 25.2165 27.7927 28.3079 27.7927 28.3079H32.4299C32.4299 28.3079 33.0364 25.1038 34.4909 23.1555C37.03 19.7541 43.7652 16.9726 43.7652 16.9726V12.3354C43.7652 12.3354 38.0043 10.4998 35.5213 7.18293C32.9451 3.74149 32.9451 1 32.9451 1H27.7927C27.7927 1 27.6493 4.09146 29.3384 7.18293C31.0276 10.2744 34.4909 12.3354 34.4909 12.3354Z"
            stroke="white"
            strokeWidth="1.03049"
          />
        </svg>
      );
    case "BagLine":
      return (
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.50006 6.67001V5.70001C5.50006 3.45001 7.31006 1.24001 9.56006 1.03001C12.2401 0.770009 14.5001 2.88001 14.5001 5.51001V6.89001"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.00007 21H13.0001C17.0201 21 17.7401 19.39 17.9501 17.43L18.7001 11.43C18.9701 8.99 18.2701 7 14.0001 7H6.00007C1.73007 7 1.03007 8.99 1.30007 11.43L2.05007 17.43C2.26007 19.39 2.98007 21 7.00007 21Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
  return <div>NotFoundIcon</div>;
};

export const Icon = (props: IconProps) => {
  let type = IconType.Square;
  if (props.type !== undefined) type = props.type;
  return (
    <div
      style={{
        backgroundColor: props.bacgorundColor,
        width: 50,
        height: 50,
        borderRadius: type === IconType.Square ? 15 : 100,
        textAlign: "center",
        alignContent: "center",
      }}
    >
      {getIcon(props.icon)}
    </div>
  );
};

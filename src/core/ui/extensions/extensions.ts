import { ArrayExtensions } from "./array";

declare global {
  interface Array<T> {
    repeat(quantity: number): Array<T>;
  }
}
export const extensions = () => {
  ArrayExtensions();
};

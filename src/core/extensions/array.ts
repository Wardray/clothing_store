export const ArrayExtensions = () => {
  if ([].repeat === undefined) {
    Array.prototype.repeat = function (quantity) {
      return Array(quantity).fill(this).flat(1);
    };
  }
};

export const toCop = (num) => {
  return `COP ${num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
};

export default (products) => {
  const text = `Hola me gustaria ordenar los siguientes productos:
  \n${products.map(({ price, quantity, name }) => {
    return `• ${name} - X${quantity} - Total: ${price * quantity}\n`;
  })}\n*Total Productos*: ${products.reduce(
    (acc, curr) => acc + parseInt(curr.price) * parseInt(curr.quantity),
    0
  )}`;
  return encodeURI(text);
};

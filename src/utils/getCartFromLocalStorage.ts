import { calcTotlalPrice } from "./calcTotalPrice";

export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotlalPrice(items);
  return {
    items,
    totalPrice,
  };
};

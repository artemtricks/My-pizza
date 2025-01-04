import { CartItem } from "../../redux/slices/cart/types";
import { calcTotlalPrice } from "../calcTotlalPrice/calcTotalPrice";

interface ILocalStorageCart {
  items: CartItem[] | [];
  totalPrice: number;
}

export const getCartFromLocalStorage = (): ILocalStorageCart => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotlalPrice(items);
  return {
    items,
    totalPrice,
  };
};

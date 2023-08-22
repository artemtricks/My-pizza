import { CartItem } from "../redux/slices/cart/types";

export const calcTotlalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

import { CartItem } from "../../redux/slices/cart/types";

export const calcTotlalPrice = (items?: CartItem[]): number => {
  if (items) {
    return items.reduce((sum, obj) => {
      return obj.price * obj.count + sum;
    }, 0);
  } else {
    return 0;
  }
};

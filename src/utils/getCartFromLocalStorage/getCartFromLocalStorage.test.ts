import { getCartFromLocalStorage } from "./getCartFromLocalStorage";
import { calcTotlalPrice } from "../calcTotlalPrice/calcTotalPrice";
import { cartItemsMock2 } from "../calcTotlalPrice/calcTotlalPrice.test";

describe("getCartFromLocalStorage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear(); // Очищаем localStorage перед каждым тестом
  });

  test("should return ILocalStorageCart value", () => {
    const mockTotalPrice = 750;

    localStorage.setItem("cart", JSON.stringify(cartItemsMock2));

    const result = getCartFromLocalStorage();
    expect(result).toEqual({
      items: cartItemsMock2,
      totalPrice: mockTotalPrice,
    });
  });
});

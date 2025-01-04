import { calcTotlalPrice } from "./calcTotalPrice";

const cartItemsMock1 = [
  {
    id: "7",
    title: "Маргарита",
    price: 450,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    size: 26,
    types: "тонкое",
    count: 1,
  },
];

export const cartItemsMock2 = [
  {
    id: "7",
    title: "Маргарита",
    price: 450,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    size: 26,
    types: "тонкое",
    count: 1,
  },
  {
    id: "6",
    title: "Маргарита",
    price: 100,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    size: 26,
    types: "тонкое",
    count: 1,
  },
  {
    id: "8",
    title: "Маргарита",
    price: 50,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    size: 26,
    types: "тонкое",
    count: 1,
  },
  {
    id: "9",
    title: "Маргарита",
    price: 150,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    size: 26,
    types: "тонкое",
    count: 1,
  },
];

describe("calcTotlalPrice", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("correct value", () => {
    expect(calcTotlalPrice(cartItemsMock1)).toBe(450);
  });
  test("correct value2", () => {
    expect(calcTotlalPrice(cartItemsMock2)).toBe(750);
  });
});

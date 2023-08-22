export type PizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  count: number;
};

export type SearchPizzaParams = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  pageCurrent: string;
};

export interface PizzaSliceState {
  items: PizzaItem[];
  status: "loading" | "success" | "error" | "";
}

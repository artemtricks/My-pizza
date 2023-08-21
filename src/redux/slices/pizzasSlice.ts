import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { SortSlice } from "./filterSlice";

type PizzaItem = {
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

export const fetchPizzas = createAsyncThunk<PizzaItem[], SearchPizzaParams>(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { order, sortBy, category, search, pageCurrent } = params;
    const response = await axios.get<PizzaItem[]>(
      `https://63f36531fe3b595e2ee0f355.mockapi.io/items?page=${pageCurrent}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return response.data as PizzaItem[];
  }
);

interface PizzaSliceState {
  items: PizzaItem[];
  status: "loading" | "success" | "error" | "";
}

const initialState: PizzaSliceState = {
  items: [],
  status: "",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      console.log(state.status);
      state.items = [];
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<PizzaItem[]>) => {
        state.items = action.payload;
        state.status = "success";
        console.log(state.status);
      }
    );
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
      console.log(state.status);
    });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;

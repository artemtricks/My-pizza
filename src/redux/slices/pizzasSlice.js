import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const response = await axios.get(
      `https://63f36531fe3b595e2ee0f355.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return response.data;
  }
);

const initialState = {
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
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
      console.log(state.status);
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
      console.log(state.status);
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;

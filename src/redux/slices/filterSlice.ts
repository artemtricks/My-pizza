import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASK = "-rating",
  TITLE_DESC = "title",
  TITLE_ASK = "-title",
  PRICE_DESC = "price",
  PRICE_ASK = "-price",
}

export type SortSlice = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  pageCurrent: number;
  sort: SortSlice;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  pageCurrent: 1,
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<SortSlice>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.pageCurrent = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.searchValue = action.payload.searchValue;
        state.categoryId = Number(action.payload.categoryId);
        state.pageCurrent = Number(action.payload.pageCurrent);
      } else {
        state.pageCurrent = 1;
        state.categoryId = 0;
        state.sort = {
          name: "популярности",
          sortProperty: SortPropertyEnum.RATING_DESC,
        };
      }
    },
  },
});

export const selectSort = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;
export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;
export default filterSlice.reducer;

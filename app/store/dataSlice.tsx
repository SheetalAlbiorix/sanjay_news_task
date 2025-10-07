import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleItemType } from "../service/types";
import { fetchArticle } from "./thunk/fetchArticle";

type InitStateType = {
  [key: string]: ArticleItemType[];
};

export type DataStateType = {
  data: InitStateType;
};

const initState: InitStateType = {};

const defaultSlice = createSlice({
  name: "data",
  initialState: initState,
  reducers: {
    updateData: (
      state,
      action: PayloadAction<{ key: string; items: ArticleItemType[] }>
    ) => {
      state[action?.payload?.key] = action.payload.items;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      state[action.payload.type] = action.payload.res?.articles;
    });
  },
});

export const { updateData: stateUpdateData } = defaultSlice.actions;
export const dataReducer = defaultSlice.reducer;

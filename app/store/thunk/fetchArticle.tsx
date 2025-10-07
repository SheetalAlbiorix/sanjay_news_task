import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsApiArgs } from "../../service/types";
import { newsApi } from "../../service/DemoRequest";

export const fetchArticle = createAsyncThunk(
  "fetchArticles",
  async (type: NewsApiArgs["type"], thunkApi) => {
    try {
      const res = await newsApi({ type: type });

      return { type, res };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

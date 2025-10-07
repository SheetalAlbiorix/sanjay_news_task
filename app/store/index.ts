// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { defaultReducer } from "./slice";
import { dataReducer } from "./dataSlice";
import { themeReducer } from "./themeSlice";

const rootReducer = combineReducers({
  default: defaultReducer,
  data: dataReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["default", "data", "theme"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

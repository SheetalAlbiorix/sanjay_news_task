import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitStateType = {
  userChoice: "dark" | "light" | "system";
  activeTheme: "dark" | "light";
};

export type ThemeStateType = {
  theme: InitStateType;
};

const initState: InitStateType = {
  userChoice: "system",
  activeTheme: "light",
};

const defaultSlice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    updateThemeState: (state, action: PayloadAction<InitStateType>) => {
      state.activeTheme = action.payload.activeTheme;
      state.userChoice = action.payload.userChoice;
    },

    updateActiveTheme: (
      state,
      action: PayloadAction<InitStateType["activeTheme"]>
    ) => {
      state.activeTheme = action.payload;
    },
  },
});

export const { updateThemeState, updateActiveTheme } = defaultSlice.actions;
export const themeReducer = defaultSlice.reducer;
export const stateUserTheme = (state: ThemeStateType) => state.theme.userChoice;
export const stateIsLightTheme = (state: ThemeStateType) =>
  state.theme.activeTheme === "light";

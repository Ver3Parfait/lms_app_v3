import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme:"light",
  },
  reducers: {
    toggleTheme: (state,action) => {       
      state.theme = state.theme === "light" ? 'dark' : "light"
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer
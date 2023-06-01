import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";



const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: AsyncStorage.getItem('theme') || "light"
  },
  reducers: {
<<<<<<< HEAD
    toggleTheme: (state,action) => {       
=======
    toggleTheme: (state, action) => {
>>>>>>> f23e3032220d9dd7afdb481577149a442e0c3d69
      state.theme = state.theme === "light" ? 'dark' : "light"
      AsyncStorage.setItem('theme', state.theme)
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer
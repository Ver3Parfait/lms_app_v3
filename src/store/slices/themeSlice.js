import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";



const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme:AsyncStorage.getItem('theme') || 'light',
  },
  reducers: {
    toggleTheme: async (state,action) => {       
      state.theme = state.theme === "light" ? 'dark' : "light"
      AsyncStorage.setItem('theme', state.theme) 
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer
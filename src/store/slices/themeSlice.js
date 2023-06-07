import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light"
  },
  reducers: {
    setInitialTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setInitialTheme, toggleTheme } = themeSlice.actions;

export const fetchInitialTheme = () => {
  return async (dispatch) => {
    try {
      const theme = await AsyncStorage.getItem('theme');
      if (theme !== null) {
        dispatch(setInitialTheme(theme));
      }
    } catch (error) {
      console.log("Erreur lors du chargement du thème :", error);
    }
  };
};

export const themeReducer = themeSlice.reducer;

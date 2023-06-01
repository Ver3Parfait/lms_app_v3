import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.splice(state.indexOf(action.payload), 1)
        },
        resetFavorites: (state,action) => {
            return []
        }
    },
});

export const { addFavorite, removeFavorite, resetFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	language: [""],
};

export const activeLanguage = createSlice({
	name: "activeLanguage",
	initialState,
	reducers: {
		setActiveLanguage: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { setActiveLanguage } = activeLanguage.actions;

export default activeLanguage.reducer;

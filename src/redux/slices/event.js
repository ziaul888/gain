import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: null,
};

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        setAllEvents: (state, action) => {
            state.events = action.payload;
        },
    },
});

export const { setAllEvents } = eventSlice.actions;

export default eventSlice.reducer;

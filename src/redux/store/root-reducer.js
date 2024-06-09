import { combineReducers } from "@reduxjs/toolkit";
import configReducer from "../slices/configData.js";
import languageReducer from "../slices/languageSlice.js";
import eventReducer from "../slices/event"
import tokenReducer from "../slices/token"

export default combineReducers({
	configData: configReducer,
	language: languageReducer,
	events:eventReducer,
	token: tokenReducer
});

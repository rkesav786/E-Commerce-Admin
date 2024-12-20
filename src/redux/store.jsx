import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer, // Handles redux-form state
});

const store = configureStore({ reducer: rootReducer });

export default store;

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import filterReducer from "../filter/filter-reducer";
import {
  addContactSuccess,
  deleteContactSuccess,
  fetchContactSuccess,
} from "./contacts-action";

const itemReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;

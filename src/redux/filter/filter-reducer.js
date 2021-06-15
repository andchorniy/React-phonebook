import { createReducer } from "@reduxjs/toolkit";
import changeFilter from "./filter-action";

const filterReducer = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});

export default filterReducer;

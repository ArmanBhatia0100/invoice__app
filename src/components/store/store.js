import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./storeSlices";
import { invoiceReducer } from "./storeSlices";

export default configureStore({
  reducer: { filter: filterReducer, invoice: invoiceReducer },
});

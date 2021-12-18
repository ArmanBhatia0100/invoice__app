import { createSlice } from "@reduxjs/toolkit";

// Filter Slice
export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "none",
  },
  reducers: {
    filter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// Invoice Detail page slice
export const invoiceDetailSlice = createSlice({
  name: "invoice Detail",
  initialState: {
    details: "",
    totalEntries: 0,
  },
  reducers: {
    getInvoiceData: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { getInvoiceData } = invoiceDetailSlice.actions;
export const invoiceReducer = invoiceDetailSlice.reducer;

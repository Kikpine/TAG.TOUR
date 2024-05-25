'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface BusinessState {
  value: number
}

const initialState: BusinessState = {
  value: 0
}

export const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    changeBusiness: (state, action) => {state.value = action.payload}
  }
})

export const { changeBusiness } = businessSlice.actions;
export default businessSlice.reducer;
'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface LoginState {
  value: string
}

const initialState: LoginState = {
  value: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => { state.value = action.payload}
  }
})

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
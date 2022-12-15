import { createSlice } from '@reduxjs/toolkit'
import { fetchRooms } from '../asyncActions'

import { RootState } from '../store'

const initialState = {
  items: {},
}

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, (state) => {
      state.items = []
    })
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(fetchRooms.rejected, (state) => {
      state.items = []
    })
  },
})

export const roomSelector = (state: RootState) => state.rooms.items

export const roomsReducer = roomsSlice.reducer

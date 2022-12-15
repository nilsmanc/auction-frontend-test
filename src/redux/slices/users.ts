import { createSlice } from '@reduxjs/toolkit'
import { UserType } from '../../types'

import { fetchUsers } from '../asyncActions'
import { RootState } from '../store'

const initialState = {
  items: [] as UserType[],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.items = []
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.items = []
    })
  },
})

export const usersSelector = (state: RootState) => state.users.items

export const usersReducer = usersSlice.reducer

import { createAsyncThunk } from '@reduxjs/toolkit'

import instance from '../axios'

export const fetchRooms = createAsyncThunk<any, string>('room/fetchRooms', async (id) => {
  const { data } = await instance.get(`/rooms/${id}`)
  return data
})

export const fetchUsers = createAsyncThunk<any, string>('users/fetchUsers', async (id) => {
  const { data } = await instance.get(`/users/${id}`)
  return data
})

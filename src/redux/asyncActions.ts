import { createAsyncThunk } from '@reduxjs/toolkit'

import instance from '../axios'
import { RoomType, UserType } from '../types'

export const fetchRooms = createAsyncThunk<RoomType, string>('room/fetchRooms', async (id) => {
  const { data } = await instance.get(`/rooms/${id}`)
  return data
})

export const fetchUsers = createAsyncThunk<UserType[], string>('users/fetchUsers', async (id) => {
  const { data } = await instance.get(`/users/${id}`)
  return data
})

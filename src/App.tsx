import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { fetchRooms, fetchUsers } from './redux/asyncActions'
import { roomSelector } from './redux/slices/room'
import { usersSelector } from './redux/slices/users'
import { useAppDispatch } from './redux/store'

function App() {
  const dispatch = useAppDispatch()

  const room = useSelector(roomSelector)
  const users = useSelector(usersSelector)

  console.log(room)
  console.log(users)

  useEffect(() => {
    dispatch(fetchRooms('639b08b9209d2ccb29838c9f'))
    dispatch(fetchUsers('639b08b9209d2ccb29838c9f'))
  }, [])

  return <div></div>
}

export default App

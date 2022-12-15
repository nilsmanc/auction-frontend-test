import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Table from './components/Table'
import { fetchRooms, fetchUsers } from './redux/asyncActions'
import { roomSelector } from './redux/slices/room'
import { usersSelector } from './redux/slices/users'
import { useAppDispatch } from './redux/store'

import styles from './App.module.scss'

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

  return (
    <>
      <p className={styles.title}>
        Ход торгов <b>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</b>
      </p>
      <hr />
      <span className={styles.subTitle}>
        Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в
        таблице
      </span>
      <Table users={users} />
    </>
  )
}

export default App

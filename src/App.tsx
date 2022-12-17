import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Table from './components/Table'
import { fetchRooms, fetchUsers } from './redux/asyncActions'
import { roomSelector } from './redux/slices/room'
import { usersSelector } from './redux/slices/users'
import { useAppDispatch } from './redux/store'
import instance from './axios'
import { RoomType, UserType } from './types'

import styles from './App.module.scss'

function App() {
  const [isRoomShown, setIsRoomShown] = useState(false)
  const [newRoom, setNewRoom] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [isFetchingDone, setIsFetchingDone] = useState(false)

  const dispatch = useAppDispatch()

  const room = useSelector(roomSelector) as RoomType
  const users = useSelector(usersSelector) as UserType[]

  const setTimeHandler = async () => {
    try {
      setIsFetchingDone(false)

      const startTime = Date.now()
      await instance.patch('/rooms/639b08b9209d2ccb29838c9f', { startTime })

      setShowNotification(true)
      setNewRoom(!newRoom)
    } catch (err) {
      console.warn(err)
      alert('Failed to set time')
    }
  }

  const showHandler = () => {
    setIsRoomShown(!isRoomShown)
    setShowNotification(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchRooms('639b08b9209d2ccb29838c9f'))
      await dispatch(fetchUsers('639b08b9209d2ccb29838c9f'))
      setIsFetchingDone(true)
    }
    fetchData()
  }, [newRoom])

  return (
    <>
      <p className={styles.title}>
        Ход торгов <span>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</span>
      </p>
      <hr />
      <span className={styles.subTitle}>
        Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в
        таблице:
      </span>
      {isRoomShown && (
        <button className={styles.button} onClick={showHandler}>
          Скрыть комнату
        </button>
      )}
      {!isRoomShown && (
        <button disabled={!isFetchingDone} className={styles.button} onClick={showHandler}>
          Показать комнату
        </button>
      )}
      {!isRoomShown && (
        <>
          <button className={styles.button} onClick={setTimeHandler}>
            Создать новую комнату
          </button>
          {showNotification && <span className={styles.notification}>Комната создана</span>}
        </>
      )}
      {isRoomShown && <Table users={users} room={room} />}
    </>
  )
}

export default App

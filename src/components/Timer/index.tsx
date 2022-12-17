import { useEffect, useState } from 'react'

import styles from './Timer.module.scss'

type TimerProps = {
  startTime: number
  usersCount: number
  setUsersIndex: (index: number) => void
  usersIndex: number
}

export const Timer: React.FC<TimerProps> = ({
  startTime,
  usersCount,
  setUsersIndex,
  usersIndex,
}) => {
  const [timer, setTimer] = useState<number>(0)

  const getCurrentTime = (startTime: number, usersCount: number) => {
    const turnDuration = 120000
    const roundDuration = (Date.now() - +startTime) % (turnDuration * usersCount)

    let usersIndex = Math.trunc(roundDuration / turnDuration)

    if (usersIndex === usersCount) {
      usersIndex--
    }

    const timer = roundDuration - usersIndex * turnDuration

    setUsersIndex(usersIndex)

    return timer
  }

  useEffect(() => {
    setTimer(getCurrentTime(startTime, usersCount))

    setInterval(() => {
      setTimer(getCurrentTime(startTime, usersCount))
    }, 1000)
  }, [usersIndex])

  const currentTime = new Date(120000 - timer).toISOString().slice(11, 19)

  return <div className={styles.timer}>{currentTime}</div>
}

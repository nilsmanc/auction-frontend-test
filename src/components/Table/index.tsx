import { useState } from 'react'
import { RoomType, UserType } from '../../types'
import { Timer } from '../Timer'

import styles from './Table.module.scss'

type RoomProps = {
  users: UserType[]
  room: RoomType
}

const Table: React.FC<RoomProps> = ({ users, room }) => {
  const [usersIndex, setUsersIndex] = useState<number>(0)

  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <td>ХОД</td>
          {users.map((user: UserType) => (
            <td key={user._id}>
              {user.index === usersIndex && (
                <Timer
                  setUsersIndex={setUsersIndex}
                  usersIndex={usersIndex}
                  startTime={room.startTime}
                  usersCount={users.length}
                />
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</td>
          {users.map((user: UserType) => (
            <td key={user._id}>{user.name}</td>
          ))}
        </tr>
      </thead>
      <tbody className={styles.body}>
        <tr>
          <td className={styles.complexTitle}>
            Наличие комплекса мероприятий, повышающих стандарты качества изготовления
          </td>
          {users.map((user: UserType) => (
            <td className={styles.complexValues} key={user._id}>
              {user.complex ? '+' : '-'}
            </td>
          ))}
        </tr>
        <tr>
          <td>Срок изготолвения лота, дней</td>
          {users.map((user: UserType) => (
            <td className={styles.values} key={user._id}>
              {user.term}
            </td>
          ))}
        </tr>
        <tr>
          <td>Гарантийные обязательства, мес</td>
          {users.map((user: UserType) => (
            <td className={styles.values} key={user._id}>
              {user.guaranteeMonths}
            </td>
          ))}
        </tr>
        <tr>
          <td>Условия оплаты</td>
          {users.map((user: UserType) => (
            <td className={styles.values} key={user._id}>
              {user.paymentTerms}
            </td>
          ))}
        </tr>
        <tr>
          <td>Стоимость изготовления лота, руб (без НДС)</td>
          {users.map((user: UserType) => (
            <td className={styles.values} key={user._id}>
              <div className={styles.prices}>
                <p>{user.price} руб.</p>
                <p>-25,000 руб.</p>
                <p>2,475,000 руб.</p>
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table

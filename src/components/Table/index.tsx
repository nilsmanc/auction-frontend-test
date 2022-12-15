import { UserType } from '../../types'

import styles from './Table.module.scss'

type RoomProps = {
  users: UserType[]
}

const Table: React.FC<RoomProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Ход</td>
        </tr>
        <tr>
          <td>Параметры и требования</td>
          {users.map((user: UserType) => (
            <td key={user._id}>{user.name}</td>
          ))}
        </tr>
      </thead>
      <tbody className={styles.body}>
        <tr>
          <td>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</td>
          {users.map((user: UserType) => (
            <td key={user._id}>{user.complex ? '+' : '-'}</td>
          ))}
        </tr>
        <tr>
          <td>Срок изготолвения лота, дней</td>
          {users.map((user: UserType) => (
            <td key={user._id}>{user.paymentTerms}</td>
          ))}
        </tr>
        <tr>
          <td>Гарантийные обязательства, мес</td>
          {users.map((user: UserType) => (
            <td key={user._id}>{user.guaranteeMonths}</td>
          ))}
        </tr>
        <tr>
          <td>Условия оплаты</td>
          {users.map((user: UserType) => (
            <td key={user._id}>{user.paymentTerms}</td>
          ))}
        </tr>
        <tr>
          <td>Стоимость изготолвения лота, руб (без НДС)</td>
          {users.map((user: UserType) => (
            <td key={user._id}>
              <p className={styles.price}>{user.price} руб.</p>
              <p className={styles.tax}>-25,000 руб.</p>
              <p className={styles.total}>2,475,000 руб.</p>
            </td>
          ))}
        </tr>
        <tr>
          <td>Действия</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table

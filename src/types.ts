export type UserType = {
  _id: string
  name: string
  room: string
  complex: boolean
  term: string
  guaranteeMonths: string
  paymentTerms: string
  price: string
}

export type RoomType = {
  _id: string
  title: string
  createdAt: string
  updatedAt: string
  __v: number
}

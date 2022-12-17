export type UserType = {
  _id: string
  name: string
  room: string
  complex: boolean
  term: string
  guaranteeMonths: string
  paymentTerms: string
  price: string
  index: number
}

export type RoomType = {
  _id: string
  title: string
  startTime: number
  createdAt: string
  updatedAt: string
  __v: number
}

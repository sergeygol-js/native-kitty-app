interface IList {
  id: string
  url: string
  width: number
  height: number
  like: boolean
}

interface CardProps {
  item: IList
  handleAddLike: Function
  handleDeleteCard: Function
}

interface IState {
  cards: IList[]
}

interface Actions {
  type: 'LOAD' | 'ADD_LIKE' | 'DEL_CARDS'
  payload: any
}

interface CardStateProp {
  children: any
}

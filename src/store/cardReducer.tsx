import { LOAD } from './reducerTypes'
import { ADD_LIKE } from './reducerTypes'
import { DEL_CARDS } from './reducerTypes'

const initialState = {
  cards: [],
}

export const cardReducer = (state: IState = initialState, action: Actions) => {
  switch (action.type) {
    case LOAD:
      console.log(action)
      return { ...state, cards: action.payload }
    case ADD_LIKE:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, like: !action.payload.like }
            : card
        ),
      }
    case DEL_CARDS:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload.id),
      }
    default:
      return state
  }
}

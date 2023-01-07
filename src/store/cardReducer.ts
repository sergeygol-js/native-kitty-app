import { ADD_LIKE, DEL_CARDS, LOAD } from './reducerTypes'

const initialState = {
  cards: [],
}

export const cardReducer = (state: IState = initialState, action: Actions) => {
  switch (action.type) {
    case LOAD:
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

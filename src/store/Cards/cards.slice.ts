import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICard } from "../../types"

interface CardsState {
  cards: ICard[]
}

const initialState: CardsState = {
  cards: []
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<ICard[] | undefined>) {
      if (typeof action.payload !== 'undefined')
        state.cards = action.payload
    },
    removeCard(state, action: PayloadAction<ICard>) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id)
    }
  }
})

export const cardsActions = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer
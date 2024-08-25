import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICard } from "../../types"

interface FavCardsState {
  favCards: ICard[]
}

const initialState: FavCardsState = {
  favCards: []
}

export const favCardsSlice = createSlice({
  name: 'favCards',
  initialState,
  reducers: {
    add(state, action: PayloadAction<ICard>) {
      state.favCards.push(action.payload)
    },
    remove(state, action: PayloadAction<ICard>) {
      state.favCards = state.favCards.filter((card) => card.id !== action.payload.id)
    }
  }
})

export const favCardsActions = favCardsSlice.actions
export const favCardsReducer = favCardsSlice.reducer
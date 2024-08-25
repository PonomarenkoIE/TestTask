import { configureStore } from "@reduxjs/toolkit";
import { favCardsReducer } from "./favCards/favCards.slice";
import { cardsApi } from "./Cards/cards.api";
import { cardsReducer } from "./Cards/cards.slice";

export const rootStore = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cards: cardsReducer,
    favCards: favCardsReducer    
  }, 
  middleware: 
    getDefaultMiddleware => getDefaultMiddleware().concat(cardsApi.middleware)
})

export type RootState = ReturnType<typeof rootStore.getState>
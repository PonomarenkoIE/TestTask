import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import CardsList from './components/CardsList';
import { useFetchCardsQuery } from './store/Cards/cards.api';
import { ICard } from './types';
import { cardsActions } from './store/Cards/cards.slice';
import { useAppSelector } from './hooks/useAppSelector';
import { useDispatch } from 'react-redux';

function App() {
  const {data} = useFetchCardsQuery()
  let cards = useAppSelector((store) => store.cards.cards)

  useEffect(() => {
    cardsActions.changeCards(data)
  }, [data])

  return (
    <div className="App">
      <CardsList cardsList={data}/>
    </div>
  );
}

export default App;

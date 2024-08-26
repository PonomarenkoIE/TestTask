import React, { useEffect } from 'react';
import CardsList from './components/CardsList';
import { useFetchCardsQuery } from './store/Cards/cards.api';
import { cardsActions } from './store/Cards/cards.slice';
import { useDispatch } from 'react-redux';

export function App() {
  const {data} = useFetchCardsQuery()
  const dispatch = useDispatch()

  //Хранение списка карточек в store
  useEffect(() => {
    dispatch(cardsActions.changeCards(data))
  }, [data])

  return (
    <div className="cards">
      <CardsList cardsList={data}/>
    </div>
  );
}

export default App;
